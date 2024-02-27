import { Component,OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormBuilder, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServicesService } from '../../services.service';
import { Sede } from '../../sede';
@Component({
  selector: 'app-reserva',
  standalone: true,
imports:[NgForOf,ReactiveFormsModule,FormsModule,HttpClientModule],
providers: [
  ServicesService, // Proporciona tu servicio aquí
],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent implements OnInit {
listarReserva:any[]=[
  {email:'sebastianzeta211@gmail.com',nombre:'sebastian',identificacion:'1152',sede:'A',fecha:'2023'},
  {email:'sebastiankja211@gmail.com',nombre:'sebaskljtian',identificacion:'11kj52',sede:'Akj',fecha:'202jk3'}
];
listarSede:Sede[]=[];
checkoutForm;


constructor(  private formBuilder: FormBuilder,private _reservaservicio:ServicesService){
  
  this.checkoutForm = this.formBuilder.group({
    email: ['',Validators.required,Validators.minLength(1)],
    nombre: ['',Validators.required,Validators.minLength(1)],
    identificacion: ['',Validators.required,Validators.minLength(1)],
    sede: ['',Validators.required],
    fecha: ['',Validators.required],
    hora:['',Validators.required],
  });
}
ngOnInit(): void {
  this.obtenerSedes();
 
}
obtenerReservas() {
 
  this._reservaservicio._getListarReserva().subscribe((data) => {
     
    this.listarReserva = data; 
  });
}
obtenerSedes(){
  this._reservaservicio._getListarSede().subscribe((data) => {
    this.listarSede=data;
   //console.log(data); 
 },error =>{
  //console.log(error);
 });
 ;
}


agregarReserva(){
  
  const datosReserva: any={
    email: this.checkoutForm.get('email')?.value,
    nombre: this.checkoutForm.get('nombre')?.value,
    identificacion: this.checkoutForm.get('identificacion')?.value,
    campus: this.checkoutForm.get('sede')?.value,
    fecha: '',
    estado:0,
    
  }
  const fechaHoraString = this.checkoutForm.get('fecha')?.value + ' ' + this.checkoutForm.get('hora')?.value;
  const fechaHoraSQL = new Date(fechaHoraString).toISOString().slice(0, 19).replace('T', ' ');
  datosReserva.fecha= new Date(fechaHoraSQL).toISOString();
  console.log(datosReserva);
  this._reservaservicio._postReserva(datosReserva).subscribe(data=>{
    console.log("la reserva ha sido registrada");
    
  })
  this.checkoutForm.reset
}


}
