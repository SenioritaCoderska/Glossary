import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { GlossarySearchService } from '../../services/glossary-search.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  readonly domain='https://insite.clariant.com';
  constructor(private router: Router, public serviceSearch: GlossarySearchService) { }

  public goSearch: boolean = false;
  public goAdd: boolean = false;
  public goApproval: boolean = false;
  public goHome: boolean = true;
  //
  public flagHome: boolean = false;
  public flagSearch: boolean = false;
  public flagAdd: boolean = false;
  public flagApprove: boolean = false;

  ngOnInit() {
  }

  goToPage(pagename:string, parameter:string)
  {
    this.router.navigate([this.domain + pagename, parameter]);
  }

  goToHome(){
    if (this.goHome){
      this.goHome=true;
      this.flagHome=false;
    }
  else{
    this.goHome=true;
    this.goSearch=false;
    this.goAdd=false;
    this.goApproval=false;
    this.flagHome =true;
  }

  
  console.log(this.goHome)
  }
goToSearch(){

  if (!this.goSearch){
    this.goSearch=true;
    this.goAdd=false;
    this.goApproval=false;
    this.goHome=false;
    this.serviceSearch.listSearch = [];
    this.flagHome =true;

  }
else{
  this.goSearch=true;
  this.flagHome =false;
}

console.log(this.goSearch)
}


goToAdd(){

  if (!this.goAdd){
    this.goAdd=true;
    this.goSearch=false;
    this.goApproval=false;
    this.goHome=false;
    this.flagHome =true;
  }
  else{
    this.goAdd=true;
    this.flagHome =false;
  }

console.log(this.goAdd)

}

goToApproval(){

  if (!this.goApproval){
    this.goApproval=true;
    this.goSearch=false;
    this.goAdd=false;
    this.goHome=false;
    this.flagHome =true;
  }
else{
  this.goApproval=true;
  this.flagHome =true;
}


console.log(this.goApproval)
}
}
