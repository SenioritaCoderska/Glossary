import { Component, OnInit } from '@angular/core';
import { GlossaryApprovalService } from '../../services/glossary-approval.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-glossary-approval',
  templateUrl: './glossary-approval.component.html',
  styleUrls: []
})


export class GlossaryApprovalComponent implements OnInit {

  constructor(public service: GlossaryApprovalService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.service.uploadList();

  }
onAccept(RecId){
// check index
const index: number = this.service.listApproval.findIndex(r => r.RecId=== RecId); 

this.refreshList();
// create an array and update figures
  let arr = this.service.listApproval[index];
  arr.FlagApproved='X';
  arr.FlagRejected=null;
  arr.ApprovedBy='izabela.winkler@clariant.com';
  console.table("updated: " + arr);

  //send update
  this.service.putRecord(arr).subscribe(
    res=>{
      this.toastr.success('Acronym successfully added to the database!', 'Clariant Glossary Communication');

    },
    err=>{
      console.log(err);
      this.toastr.error('Submission failed', 'Clariant Glossary Communication');
    }
  );
 // remove
 if (index != -1) {
  this.service.listApproval.splice(index, 1);
}
}


onReject(RecId){
  
// check index
const index: number = this.service.listApproval.findIndex(r => r.RecId=== RecId); 

// create an array and update figures
  let arr = this.service.listApproval[index];
  arr.FlagApproved=null;
  arr.FlagRejected='X';
  arr.ApprovedBy='izabela.winkler@clariant.com';
  console.table("updated: " + arr)
  //send update
  this.service.putRecord(arr).subscribe(
    res=>{
      this.toastr.success('Acronym was succesfully rejected', 'Clariant Glossary Communication');
    },
    err=>{
      console.log(err);
      this.toastr.error('Submission failed', 'Clariant Glossary Communication');
    }
  );
 
 console.table("Accept: " + arr)
 // remove
 if (index != -1) {
  this.service.listApproval.splice(index, 1);
  this.refreshList();
}  
}


refreshList(){

  return this.service.listApproval;
  
}


}
  