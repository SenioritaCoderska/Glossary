import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlossaryApprovalService } from '../../services/glossary-approval.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-glossary-add',
  templateUrl: './glossary-add.component.html',
  styleUrls: []
})
export class GlossaryAddComponent implements OnInit {
 
  constructor(public serviceAdd:GlossaryApprovalService, private toastr: ToastrService) { }


  public data: any;
  public flagSubmitted: boolean=false;

  ngOnInit() {
    this.resetForm();
    this.flagSubmitted= false;

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
      console.table("info log: " + form);

      this.serviceAdd.formApproval = {
      RecId:0,
      Acronym: this.serviceAdd.formApproval.Acronym,
      AcronymExtension: this.serviceAdd.formApproval.AcronymExtension,
      Description: this.serviceAdd.formApproval.Description,
      PostedBy:'izabela.winkler@clariant.com',
      FlagApproved:null,
      FlagRejected:null,
      ApprovedBy: null
      }

        this.insertRecord(form);
        
        if(this.flagSubmitted){
          this.flagSubmitted=false
        }
    }

   async insertRecord(form:NgForm){
     await this.serviceAdd.postRecord(form).subscribe(
        res=>{
          this.resetForm(form);
          this.toastr.success('New acronym succesfully submitted for the approval', 'Clariant Glossary Communication')
          this.serviceAdd.uploadList();
          this.flagSubmitted=true;
        },
        err=>{
          console.log(err);
          this.toastr.error('Submission failed', 'Clariant Glossary Communication');
          this.flagSubmitted=false;
        }
      )
    }
  
    
      
  }

