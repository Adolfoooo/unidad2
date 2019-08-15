import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadin',
  templateUrl: './loadin.page.html',
  styleUrls: ['./loadin.page.scss'],
})
export class LoadinPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Espere por favor')
  }
  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message,
    duration: 2000
    });
    await loading.present();
}
}
