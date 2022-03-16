import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { AuthService } from "src/app/services/auth.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<SignupComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  onLogIn() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "525px";
    dialogConfig.height = "600px";
    this.dialog.open(LoginComponent, dialogConfig);
  }
  signup(): void {
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg);
    });
  }
}
