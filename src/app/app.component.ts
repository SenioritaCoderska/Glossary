import { Component, OnInit } from '@angular/core';
import { GlossaryPermissionService } from './services/glossary-permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
title = 'app works';
constructor( public serviceLogin: GlossaryPermissionService){}
flagLoggedIn: boolean = false;


async ngOnInit(){
  
  this.flagLoggedIn= this.serviceLogin.userExists;
}

}
