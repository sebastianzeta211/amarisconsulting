import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent
  ],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
