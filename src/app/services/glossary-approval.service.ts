import { Injectable } from '@angular/core';
import { GlossaryApproval} from '../models/glossary-approval.model';
import { HttpClient } from '@angular/common/http';
import { GlossaryUpdate } from '../models/glossary-update.model';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class GlossaryApprovalService {
formApproval : GlossaryApproval;
formPosting: GlossaryUpdate;
listApproval : GlossaryApproval[]=[];

readonly domain='https://localhost:44368/api';

  constructor(private http:HttpClient ) { }


uploadList(){
this.http.get(this.domain + '/GlossaryApprovals')
  .toPromise()
  .then((res: GlossaryApproval[]) =>{
    console.log(res);
    this.listApproval=res;
  }
  ,
  err => console.log(err));
}


  postRecord(arr){


  return this.http.post(this.domain+'/GlossaryApprovals',this.formApproval);

  }
  
  postRecordFromUpdate(content: string){

    this.updateApprovalForm(content);

    console.table(this.formApproval);
    console.log("Content post: " + content);

  return this.http.post(this.domain+'/GlossaryApprovals', this.formApproval);

  }



  updatePostingForm(content: string){

    var arr = content.split('/')
    this.formPosting = {
          RecId: 0,
          Acronym: arr[0],
          AcronymExtension: arr[1],
          Description: arr[2],
          PostedBy: 'izabela.winkler@clariant.com',
          FlagApproved: null,
          FlagRejected: null,
          ApprovedBy: null,
          
    }
  }


  putRecord(arr){

    return this.http.put(this.domain+'/GlossaryApprovals/'+ arr.RecId, arr).subscribe();
    }
  
    updateApprovalForm(arr){

      this.formApproval = {
            RecId: arr.RecId,
            Acronym: arr.Acronym,
            AcronymExtension: arr.AcronymExtension,
            Description: arr.AcronymExtension,
            PostedBy: arr.AcronymExtension,
            PostedDate: arr.AcronymExtension,
            FlagApproved: arr.AcronymExtension,
            FlagRejected: arr.AcronymExtension,
            ApprovedBy: arr.AcronymExtension
            
      }
    }

     
}
