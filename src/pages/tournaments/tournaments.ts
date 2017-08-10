import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeamsPage} from '../pages';
import { tournamentsService } from '../../app/services/tournamentsService';
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  tournaments=[];
  constructor(private navCtrl: NavController,private tournamentservice:tournamentsService) {
  this.getTournaments();
  }
  itemTapped($event,id){
    this.navCtrl.push(TeamsPage,id)
  }
  getTournaments(){
    this.tournamentservice.getTounaments().then(data=>{
    this.tournaments = data;
  });
  }
}
