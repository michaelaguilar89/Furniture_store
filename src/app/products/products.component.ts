import { Component, OnInit } from '@angular/core';

import { iProducts } from '../Interfaces/iProducts.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   data:iProducts[]=[
    {id:1,name:'Cama Matrimonial',description:'Cama matrimonial de madera de finos acabados',image:"https://i.imgur.com/NS1TziI.jpg"},
    {id:2,name:'Cama Matrimonial 2',description:'Cama matrimonial moderna hecha en madera de alta calidad',image:'https://i.imgur.com/a5ssxJ0.jpg'},
    {id:3,name:'Cama Individual',description:'Cama Individual de madera de finos acabados',image:"https://i.imgur.com/QjIfLKW.png"},
    {id:4,name:'Cama Individual Con Gabetas',description:'Cama Individual moderna hecha en madera de alta calidad',image:"https://i.imgur.com/apqY4I2.jpg" },
    {id:1,name:'Mueble de cocina con isla',description:'Mueble de cocina con acabados modernos',image:"https://i.imgur.com/eR17HO3.jpg"},
    {id:5,name:'Camarote Doble',description:'Camarote doble para aprovechar el espacio en algun cuarto pequeño, hecho en madera de alta calidad',image:'https://i.imgur.com/BIwDRUd.jpg'},
    {id:6,name:'Camarote Doble 2',description:'Camarote doble para aprovechar el espacio en algun cuarto pequeño, hecho en madera de alta calidad',image:"https://i.imgur.com/SHIhTyH.jpg"},
    {id:7,name:'Juego de Sala',description:'Juego de Sala con finos acabados',image:"https://i.imgur.com/UKMqV3Z.jpg" },
    {id:8,name:'Mesa Rectangular para 10 personas',description:'Gran mesa rectangular para cenar en familia',image:"https://i.imgur.com/PaMpURH.jpg"},
    {id:9,name:'Mesa Rectangular para 12 personas',description:'Gran mesa rectangular para cenar en familia, hecha en madera de alta calidad',image:'https://i.imgur.com/r8QGMAT.jpg'},
    {id:10,name:'Mueble de Sala 2',description:'Muebles de sala modernos',image:"https://i.imgur.com/Gvhro6B.jpg"}
    
  ];
  constructor() {
   
      
    
   }

  ngOnInit(): void {
   
  }

}
