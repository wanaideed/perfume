import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutComponent } from '../component/about/about.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-number1',
  templateUrl: './number1.page.html',
  styleUrls: ['./number1.page.scss'],
})
export class Number1Page implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      console.log(params.get('data'));
    });
  }

  about() {
    this.modalCtrl.create({
      component: AboutComponent
    })
    .then(modalEl => {
      modalEl.present();
    });
  }
}
