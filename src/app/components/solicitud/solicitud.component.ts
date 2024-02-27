import { NgForOf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports:[NgForOf,ReactiveFormsModule,FormsModule,HttpClientModule],
  providers: [
    ServicesService, // Proporciona tu servicio aquí
  ],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent {
  checkoutForm;
  identificacion='';
ngOnInit(): void {
  

 
}
constructor( private _reservaservicio:ServicesService,private formBuilder: FormBuilder){

  this.checkoutForm = this.formBuilder.group({
    identificacion: [''],
   
  });
}
validarReserva() {
  const datos = String(this.checkoutForm.get('identificacion')?.value);
  const datosReserva: any={
    email: '00000',
    nombre: '0000000',
    identificacion: datos,
    campus: '1',
    fecha: "2024-02-13T19:03:00.000Z",
    estado:0,
    
  }
  console.log(datosReserva);
  this._reservaservicio._postValidacion(datosReserva).subscribe(data=>{
    console.log("la reserva ha sido validada");
    console.log(data)
  })
 
    

}
}
