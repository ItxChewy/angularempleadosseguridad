import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";


@Injectable()
export class ServiceAuth{
    constructor(private _http:HttpClient){}

    inicioSesion(userName:string,password:string):Observable<any>{
        let json = {
            userName : userName,
            password: password
        }
        let request = "auth/login"
        let url = environment.urlApi + request
        let header = new HttpHeaders().set("Content-type","application/json")
        return this._http.post(url,json,{headers:header})
    }
}