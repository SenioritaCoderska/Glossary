import { Injectable } from '@angular/core';
import { GlossarySearch } from '../models/glossary-search.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlossarySearchService {

   formSearch: GlossarySearch;
    listSearch: GlossarySearch[];
    readonly domain='https://localhost:44368/api';
    
      constructor(private http:HttpClient) { }
    
          
    getSearchedData(){
     return this.http.get(this.domain+'/GlossarySearchs/'+ this.formSearch.Acronym);
    }


}
