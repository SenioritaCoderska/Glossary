import { Injectable } from '@angular/core';;
import { HttpClient } from '@angular/common/http';
import { GlossaryPermission} from '../models/glossary-permission.model';
import { EmailValidator } from '@angular/forms';
import { format } from 'util';

@Injectable({
  providedIn: 'root'
})
export class GlossaryPermissionService {
  readonly domain="https://localhost:5001/api";
  userExists: boolean = false;
  formSearch : GlossaryPermission;
  listUser: GlossaryPermission[] = [];
 
    constructor(private http:HttpClient) { }

   async  getGlossaryUser(){

    console.log("start   " + this.formSearch.Email);
     
      return await this.http.get(this.domain + '/GlossaryPermissions/' + this.formSearch.Email)
        .toPromise()
        .then((res: GlossaryPermission[]) =>{
          console.log(res);
          this.listUser =res|| [];
          this.userExists=true;
        }
        ,
        err => {console.log(err);
           this.userExists=false}) ;
      }

  }