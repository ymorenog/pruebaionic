import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irPagina3(){
    this.navCtrl.navigateForward('/pagina3');
  }
}
