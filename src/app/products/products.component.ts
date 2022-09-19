import { Component, OnInit } from '@angular/core';

import { iProducts } from '../Interfaces/iProducts.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   data:iProducts[]=[
    {id:1,code:'CMM-01', name:'Cama Matrimonial',price:'500 000',description:'Cama matrimonial de madera de finos acabados',image:"https://i.imgur.com/NS1TziI.jpg"},
    {id:2,code:'CMM-02',name:'Cama Matrimonial 2',price:'600 000',description:'Cama matrimonial moderna hecha en madera de alta calidad',image:'https://i.imgur.com/a5ssxJ0.jpg'},
    {id:3,code:'CMI-01',name:'Cama Individual',price:'200 000',description:'Cama Individual de madera de finos acabados',image:"https://i.imgur.com/QjIfLKW.png"},
    {id:4,code:'CMIG-01',name:'Cama Individual Con Gabetas',price:'2900 000',description:'Cama Individual moderna hecha en madera de alta calidad',image:"https://i.imgur.com/apqY4I2.jpg" },
    {id:1, code:'MCI-01',name:'Mueble de cocina con isla',price:'1500 000',description:'Mueble de cocina con acabados modernos',image:"https://i.imgur.com/eR17HO3.jpg"},
    {id:5,code:'CMD-01',name:'Camarote Doble',price:'4500 000',description:'Camarote doble para aprovechar el espacio en algun cuarto pequeño, hecho en madera de alta calidad',image:'https://i.imgur.com/BIwDRUd.jpg'},
    {id:6,code:'CMD-02',name:'Camarote Doble 2',price:'500 000',description:'Camarote doble para aprovechar el espacio en algun cuarto pequeño, hecho en madera de alta calidad',image:"https://i.imgur.com/SHIhTyH.jpg"},
    {id:7,code:'CMD-01',name:'Juego de Sala',price:'600 000',description:'Juego de Sala con finos acabados',image:"https://i.imgur.com/UKMqV3Z.jpg" },
    {id:8,code:'MR10-01',name:'Mesa Rectangular para 10 personas',price:'600 000', description:'Gran mesa rectangular para cenar en familia',image:"https://i.imgur.com/PaMpURH.jpg"},
    {id:9,code:'MR12-02',name:'Mesa Rectangular para 12 personas',price:'700 000',description:'Gran mesa rectangular para cenar en familia, hecha en madera de alta calidad',image:'https://i.imgur.com/r8QGMAT.jpg'},
    {id:10,code:'MS-02',name:'Mueble de Sala 2',price:'400 000',description:'Muebles de sala modernos',image:"https://i.imgur.com/Gvhro6B.jpg"}
    
  ];
  constructor() {
   
      
    
   }

  ngOnInit(): void {
   
  }

}
