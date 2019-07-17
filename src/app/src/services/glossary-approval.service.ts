import { Injectable } from '@angular/core';
import { GlossaryApproval } from '../models/glossary-approval.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlossaryApprovalService {
formApproval: GlossaryApproval;
listApproval: GlossaryApproval[];
readonly domain='https://localhost:44368/api';

  constructor(private http:HttpClient) { }

      
refreshList(){
  this.http.get(this.domain+'/GlossarySearchs')
  .toPromise()
  .then(res =>this.listApproval = res as GlossaryApproval[]);
}
}
