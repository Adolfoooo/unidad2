import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalinfoPage } from '../modalinfo/modalinfo.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }
  ngOnInit() {
  }
  async abrirModal(){
    const modal = await this.modalCrtl.create({
      component: ModalinfoPage,
      componentProps: {
        nombre: 'Adolfo, Manuel',
      pais : 'México'
      }
    });
    await modal.present();
   }
}