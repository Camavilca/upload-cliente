import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = 'http://localhost:3000/productos/';
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get(`${this.url}listar`);
  }
  nuevo(producto) {
    return this.http.post(`${this.url}`, producto);
  }
  eliminar(codigo) {
    return this.http.delete(`${this.url}${codigo}`);
  }
  mostrar(codigo) {
    return this.http.get(`${this.url}mostrar/${codigo}`);
  }
  actualizar(producto) {
    return this.http.put(`${this.url}`, producto);
  }
}
