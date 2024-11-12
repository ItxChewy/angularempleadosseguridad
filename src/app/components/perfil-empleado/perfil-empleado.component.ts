import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { ServiceEmpleados } from '../../service/empleados.service';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.component.html',
  styleUrl: './perfil-empleado.component.css'
})
export class PerfilEmpleadoComponent implements OnInit {
  public empleado !: Empleado
  constructor(private _service:ServiceEmpleados) {
    
  }

  ngOnInit(): void {
      this.loadEmpleados()
  }

  loadEmpleados():void{
    this._service.getPerfilEmpleados().subscribe(response =>{
      this.empleado = response
    })
  }

}
