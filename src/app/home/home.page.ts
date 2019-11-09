import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutComponent } from '../component/about/about.component';
import { SliderComponent } from '../component/slider/slider.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.openslider();
  }

    about(){
      this.modalCtrl.create({
        component: AboutComponent
      })
      .then(modalEl => {
        modalEl.present();
      });
    }

    openslider() {
      this.modalCtrl.create({
        component: SliderComponent
      }).then(modalEl => {
        modalEl.present();
      });
    }

}
