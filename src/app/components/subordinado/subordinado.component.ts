import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { ServiceEmpleados } from '../../service/empleados.service';

@Component({
  selector: 'app-subordinado',
  templateUrl: './subordinado.component.html',
  styleUrl: './subordinado.component.css'
})
export class SubordinadoComponent implements OnInit {
  public empleados!: Array<Empleado>
  constructor(private _service:ServiceEmpleados) {
    
  }

  ngOnInit(): void {
      this.loadEmpleados()
  }

  loadEmpleados():void{
    this._service.getSubordinados().subscribe(response =>{
      this.empleados = response
    })
  }
}
