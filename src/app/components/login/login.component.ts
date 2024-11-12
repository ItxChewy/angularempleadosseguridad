import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceAuth } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("cajauser") cajaUser!:ElementRef
  @ViewChild("cajapass") cajaPass !: ElementRef

  constructor(private _service:ServiceAuth,
    private _router:Router
  ){}

  inicioSesion():void{
    let user  = this.cajaUser.nativeElement.value;
    let password = this.cajaPass.nativeElement.value;

    this._service.inicioSesion(user,password).subscribe(response =>{
      localStorage.setItem('token',response.response);
      this._router.navigate(["/home"])

    })
  }
}
