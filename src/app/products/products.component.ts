import { Component, OnInit } from '@angular/core';

import { iProducts } from '../Interfaces/iProducts.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   data:iProducts[]=[
    {id:1,name:'Cama Matrimonial',description:'Cama matrimonial de madera de finos acabados',image:"https://imgbox.com/7Yl8xac9"},
    {id:2,name:'Cama Matrimonial 2',description:'Cama matrimonial moderna hecha en madera de alta calidad',image:'https://imgbox.com/7Yl8xac9'},
    {id:3,name:'Cama Individual',description:'Cama Individual de madera de finos acabados',image:"src\assets\images\camaIndividual.png"},
    {id:4,name:'Cama Individual Con Gabetas',description:'Cama Individual moderna hecha en madera de alta calidad',image:"https://imgbox.com/wGNPAiJO" },{id:1,name:'Cama Matrimonial',description:'Cama matrimonial de madera de finos acabados',image:"https://imgbox.com/7Yl8xac9"},
    {id:5,name:'Camarote Doble',description:'Camarote doble para aprovechar el espacio en algun cuarto pequeño, hecho en madera de alta calidad',image:'src\assets\images\camaroteDoble.jpg'},
    {id:6,name:'Camarote Doble 2',description:'Camarote doble para aprovechar el espacio en algun cuarto pequeño, hecho en madera de alta calidad',image:"src\assets\images\camaroteDoble2.jpg"},
    {id:7,name:'Juego de Sala',description:'Juego de Sala con finos acabados',image:"src\assets\images\JuegoDeSala1.webp" },
    {id:8,name:'Mesa Rectangular para 10 personas',description:'Gran mesa rectangular para cenar en familia',image:"src\assets\images\mesaRectangular10personas"},
    {id:9,name:'Mesa Rectangular para 10 personas',description:'Gran mesa rectangular para cenar en familia, hecha en madera de alta calidad',image:'src\assets\images\mesaRectangular10personas'},
    {id:10,name:'Mueble de Sala 2',description:'Muebles de sala modernos',image:"src\assets\images\muebleDeSala2.jpg"}
    
  ];
  constructor() {
   
      
    
   }

  ngOnInit(): void {
   
  }

}
