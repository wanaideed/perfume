import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutComponent } from '../component/about/about.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  about(){
    this.modalCtrl.create({
      component: AboutComponent
    })
    .then(modalEl => {
      modalEl.present();
    });
  }

}
