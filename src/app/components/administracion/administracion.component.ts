import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ServicesService } from '../../services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-administracion',
  standalone: true,
  imports:[NgForOf,ReactiveFormsModule,FormsModule,HttpClientModule],
providers: [
  ServicesService, // Proporciona tu servicio aquí
],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {


eliminar(index: any) {
  this._reservaservicio._deleteReserva(index).subscribe((data) => {
       
    this.listarReserva = data; 
  });
this.listarReserva.splice(index,1)
}
  listarReserva:any[]=[];
  ngOnInit(): void {
    this.obtenerReservas();
   
  }
  constructor( private _reservaservicio:ServicesService){}
  obtenerReservas() {
 
    this._reservaservicio._getListarReserva().subscribe((data) => {
       
      this.listarReserva = data; 
      console.log(data)
    });
  }
 
}
