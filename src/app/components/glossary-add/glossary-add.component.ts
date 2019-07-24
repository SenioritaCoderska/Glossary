import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { GlossaryApprovalService } from '../../services/glossary-approval.service';


@Component({
  selector: 'app-glossary-add',
  templateUrl: './glossary-add.component.html',
  styleUrls: []
})
export class GlossaryAddComponent implements OnInit {
 
  constructor(public serviceAdd:GlossaryApprovalService, private toastr: ToastrService) { }


  public data: any;

  ngOnInit() {
    this.resetForm();

  }


  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm(form);
    }
      else{
        this.serviceAdd.formApproval= {
          RecId: 0,
          Acronym: '',
          AcronymExtension: '',
          Description: '',
          PostedBy: '',
          FlagApproved: '',
          FlagRejected: '',
          ApprovedBy: '',
        }
      }
      
    }

    onSubmit(form:NgForm){

      if(this.serviceAdd.formApproval.RecId==0)
        this.insertRecord(form);
        else
        //update
        this.updateRecord(form);
    }
  
  
    insertRecord(form:NgForm){
      this.serviceAdd.postRecord().subscribe(
        res=>{
          this.resetForm(form);
          this.toastr.success('Submitted Succesfully', 'Record registered on approval list')
          this.serviceAdd.uploadList();
        },
        err=>{
          console.log(err);
        }
      )
    }
  
    updateRecord(form:NgForm){
      this.serviceAdd.putRecord().subscribe(
        res=>{
          this.resetForm(form);
          this.toastr.success('Submitted Succesfully', 'Record registered on approval list')
          this.serviceAdd.uploadList();
        },
        err=>{
          console.log(err);
        }
      )
    }
   

      
  }

