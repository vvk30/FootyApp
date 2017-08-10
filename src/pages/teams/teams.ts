import { Component } from '@angular/core';
import {NavController,NavParams } from 'ionic-angular';
import {TeamHomePage} from '../pages';
import {tournamentsService} from '../../app/services/tournamentsService';
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  tournamentId:any;
  teams:any=[];
  constructor(private navCtrl: NavController,private navParams:NavParams,private tournamentService:tournamentsService) {
    this.tournamentId = this.navParams.data;
    this.getTeams();
  }
  itemTapped($event,name){
    this.navCtrl.push(TeamHomePage,name);
  }
  getTeams(){
    this.tournamentService.getTeams(this.tournamentId).then(data=>{
      this.teams = data;
  });
  }
}
