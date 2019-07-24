import { Injectable } from '@angular/core';
import { GlossarySearch } from '../models/glossary-search.model';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { GlossarySearchComponent } from '../components/glossary-search/glossary-search.component';

@Injectable({
  providedIn: 'root'
})
export class GlossarySearchService {

   formSearch : GlossarySearch;
    listSearch : GlossarySearch[] = [];
    
    readonly domain='https://localhost:44368/api';
    
      constructor(private http:HttpClient) {

        
       }
           
  async getSearchedData(){

    return await this.http.get(this.domain + '/GlossarySearchs/' + this.formSearch.Acronym)
      .toPromise()
      .then((res: GlossarySearch[]) =>{
        console.log("Service response: " + res);
        this.listSearch= res || [];
      }
      ,
      err => console.log(err));
  
}

}