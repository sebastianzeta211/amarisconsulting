import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private MyAppUrl="https://localhost:7126/";
  private MyApiUrl_sede="api/sede";
  private MyApiUrl_reserva="api/reserva/";
  private MyApiUrl_validacion="api/validar/";
  constructor(private http:HttpClient) { } 
//ok
    _getListarSede(): Observable<any> {
      return this.http.get(this.MyAppUrl+this.MyApiUrl_sede);
      }
//ok
    _getListarReserva(): Observable<any> {
        return this.http.get(this.MyAppUrl+this.MyApiUrl_reserva);
        }  
//ok
    _deleteReserva(id:number):Observable<any>{
      return   this.http.delete(this.MyAppUrl+this.MyApiUrl_reserva+id)
    }
//ok
    _postReserva(reserva:any):Observable<any>{
      return   this.http.post(this.MyAppUrl+this.MyApiUrl_reserva,reserva)
    }
//ok
    _postValidacion(identificacionO:any):Observable<any>{
      return   this.http.post(this.MyAppUrl+this.MyApiUrl_validacion,identificacionO)
    }
}
