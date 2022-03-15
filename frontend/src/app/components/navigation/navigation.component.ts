import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { SignupComponent } from "../signup/signup.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }
  reloadPage(): void {
    window.location.href = "/main-page";
  }
  onClose() {
    this.dialogRef.close();
  }
  onSignUp() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "525px";
    dialogConfig.height = "600px";
    this.dialog.open(SignupComponent, dialogConfig);
  }
  onLogIn() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "525px";
    dialogConfig.height = "600px";
    this.dialog.open(LoginComponent, dialogConfig);
  }
}
