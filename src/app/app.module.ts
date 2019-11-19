import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosService } from './productos.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
