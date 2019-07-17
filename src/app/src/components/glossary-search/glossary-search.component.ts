import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlossarySearchService } from '../../services/glossary-search.service';

@Component({
  selector: 'app-glossary-search',
  templateUrl: './glossary-search.component.html',
  styleUrls: []
})
export class GlossarySearchComponent implements OnInit {

  constructor(public service: GlossarySearchService) { }

  ngOnInit() {
    
  }

  onSearch(form:NgForm){
    this.getRecord(form);
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm(form);
      this.service.formSearch = {
        RecId: 0,
        Acronym: '',
        AcronymExtension: '',
        Description: '',
        PostedBy: '',
        PostedDate: ''
      }
    }

    getRecord(form:NgForm){ 
      if(form!=null)
      this.service.getSearchedData().subscribe(
        res=>{
          this.resetForm();
      },
      err=>{
        console.log(err);
      }
      );
  }
}
