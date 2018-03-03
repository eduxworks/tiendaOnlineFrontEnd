import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: any[] = [
    {
      "titulo": "Titulo del Producto 1",
      "decripcion" : "Descripcoion del produto",
      "precio" : 100.10,
      "descuento":5,
      "cantidad":7,
      "url":"http://ebayimg.cndirect.com/newcdn/v17/AM002124-1-noneimg.jpg"
    },
    {
      "titulo": "Titulo del Producto 2",
      "decripcion" : "Descripcoion del produto",
      "precio" : 100.10,
      "descuento":5,
      "cantidad":8,
      "url":"http://ebayimg.cndirect.com/newcdn/v17/AM002124-1-noneimg.jpg"
    },
    {
      "titulo": "Titulo del Producto 3",
      "decripcion" : "Descripcoion del produto",
      "precio" : 100.10,
      "descuento":5,
      "cantidad":9,
      "url":"http://ebayimg.cndirect.com/newcdn/v17/AM002124-1-noneimg.jpg"
    },
    {
      "titulo": "Titulo del Producto 4",
      "decripcion" : "Descripcoion del produto",
      "precio" : 100.10,
      "descuento":5,
      "cantidad":10,
      "url":"http://ebayimg.cndirect.com/newcdn/v17/AM002124-1-noneimg.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
