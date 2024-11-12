import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { ServiceEmpleados } from '../../service/empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public empleados!: Array<Empleado>
  constructor(private _service:ServiceEmpleados) {
    
  }

  ngOnInit(): void {
      this.loadEmpleados()
  }

  loadEmpleados():void{
    this._service.getEmpleados().subscribe(response =>{
      this.empleados = response
    })
  }

}
