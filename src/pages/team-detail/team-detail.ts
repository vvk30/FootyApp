import { Component } from '@angular/core';
import {  NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  title:any;
  constructor(private navCtrl: NavController,private navParams:NavParams) {
    this.title = navParams.data;
  }
}
