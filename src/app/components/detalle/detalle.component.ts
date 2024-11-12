import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { ServiceEmpleados } from '../../service/empleados.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit  {
public empleado !:Empleado
constructor(private _service:ServiceEmpleados,
private _activeRoute:ActivatedRoute
){}

ngOnInit(): void {
  this.loadEmpleado()
}

loadEmpleado(){
  this._activeRoute.params.subscribe((params:Params) =>{
    let id = params["id"]
    this._service.getEmpleado(id).subscribe(response =>{
      this.empleado = response
    })
  })
  
}
}
