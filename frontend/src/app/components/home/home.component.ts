import { Component, OnInit } from "@angular/core";
import { SignupComponent } from "../signup/signup.component";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public isChecked() {
    //@ts-ignore
    if (document.getElementById("toggle").checked == true) {
      //@ts-ignore
      document.body.style.backgroundColor = "rgba(70, 68, 72, 1)";
      //@ts-ignore
      document.getElementById("navbar").style.backgroundColor =
        "rgba(70, 68, 72, 1)";
      //@ts-ignore
      document.getElementById("navbar").style.color = "white";
      //@ts-ignore
      document.getElementById("text").style.color = "white";
      //@ts-ignore
      document.getElementById("button")?.style.boxShadow =
        "0 10px 10px 0px rgba(0,0,0, 0.7)";
      //@ts-ignore
      document.getElementById("text")?.style.color = "white";
      //@ts-ignore
      document.body.style.backgroundColor = "rgb(35, 35, 36)";
    } else {
      document.body.style.backgroundColor = "white";
      //@ts-ignore
      document.getElementById("navbar").style.backgroundColor = "white";
      //@ts-ignore
      document.getElementById("text").style.color = "black";
    }
  }

  onSignUp() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "525px";
    dialogConfig.height = "600px";
    this.dialog.open(SignupComponent, dialogConfig);
  }
}
