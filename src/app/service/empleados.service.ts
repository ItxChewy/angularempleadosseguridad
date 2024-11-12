import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http:HttpClient){
    
    }

    getEmpleados():Observable<any>{
        let request = "api/empleados"
        let url = environment.urlApi + request
        let token = localStorage.getItem('token');
        let headerToken = new HttpHeaders().set("Authorization","bearer " + token)
        return this._http.get(url,{headers:headerToken})
    }

    getEmpleado(id:string):Observable<any>{
        let request = "api/empleados/" + id.toString()
        let url = environment.urlApi + request
        let token = localStorage.getItem('token');
        let headerToken = new HttpHeaders().set("Authorization","bearer " + token)
        return this._http.get(url,{headers:headerToken})
    }
    getPerfilEmpleados():Observable<any>{
        let request = "api/empleados/perfilEmpleado"
        let url = environment.urlApi + request
        let token = localStorage.getItem('token');
        let headerToken = new HttpHeaders().set("Authorization","bearer " + token)
        return this._http.get(url,{headers:headerToken}) 
    }
    getSubordinados():Observable<any>{
        let request = "api/empleados/subordinados"
        let url = environment.urlApi + request
        let token = localStorage.getItem('token');
        let headerToken = new HttpHeaders().set("Authorization","bearer " + token)
        return this._http.get(url,{headers:headerToken}) 
    }
}