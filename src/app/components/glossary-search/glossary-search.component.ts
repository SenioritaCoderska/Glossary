import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlossaryApprovalService } from '../../services/glossary-approval.service';
import { GlossarySearchService } from '../../services/glossary-search.service';
import { Toast, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-glossary-search',
  templateUrl: './glossary-search.component.html',
  styleUrls: []
})

export class GlossarySearchComponent implements OnInit {

  constructor(public serviceSearch: GlossarySearchService, public serviceApproval: GlossaryApprovalService, private toastr: ToastrService) { }
public flagUpdate: boolean= false;
public flagSendForApproval: boolean=false;
  ngOnInit() {
    this.resetForm();
  }


  async onSearch(form:NgForm){
    
    await this.getRecord(form)

  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm(form);
      this.serviceSearch.formSearch = {
        RecId: 0,
        Acronym: '',
        AcronymExtension: '',
        Description: '',
        PostedBy: '',
        PostedDate: ''
      }
    }

    getRecord(form:NgForm){ 
      if(form!=null){
        this.serviceSearch.getSearchedData();
        
      }
      else{
        this.resetForm;
      }
      
  }

  populateValues(form: NgForm, ifClicked: boolean){
    if(ifClicked){
      
      console.log("flag change to true") ;
      this.flagUpdate = true;
            
      console.log(this.flagUpdate);
    }else{
     
      this.flagUpdate = false;
    }
   
    console.log(this.flagUpdate)
    console.profile(form.name)
  }

  onAdd(form:NgForm, content: string){
    
    console.log("contentFrom: " + content);
    console.log(this.serviceSearch.listSearch);
 
    this.serviceApproval.postRecordFromUpdate(content).subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.success('Submitted Succesfully', 'Send for approval')
      this.flagSendForApproval=true;
    },
    err=>{
      console.log(err);
      this.flagSendForApproval=false;
    });
  }
}
