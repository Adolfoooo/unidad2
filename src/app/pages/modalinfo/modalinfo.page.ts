import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalinfo',
  templateUrl: './modalinfo.page.html',
  styleUrls: ['./modalinfo.page.scss'],
})
export class ModalinfoPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }
  salir(){
    this.modalCrtl.dismiss();
  }
}
