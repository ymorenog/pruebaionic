import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre='Yolanda Moreno';
  url="www.google.es"
  mostrar = false;

  nombreSitioU:string = "";
  urlSitioU:string="";

  paginas = [
    {
      icono: 'alarm-outline',
      nombre: 'pagina2',
      rutaURL: '/pagina2'
    },
    {
      icono: 'apps-outline',
      nombre: 'pagina3',
      rutaURL: '/pagina3'
    }
  ];

  sitiosWeb = [
    {
      nombreSitio: 'Google',
      urlSitio:'www.google.es'
    },
    {
      nombreSitio: 'AEAT',
      urlSitio:'www.aeat.es'
    }
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irPagina3(){
    alert("ir página 3");
    this.navCtrl.navigateForward('/pagina3');
  }

  insertarSitio(){
    let elemento = 
    [{nombreSitio:this.nombreSitioU,urlSitio:this.urlSitioU}];
    this.sitiosWeb.push();
  }
}
