import { Component, OnInit } from '@angular/core';
import { GlossaryPermissionService } from 'src/app/services/glossary-permission.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-glossary-permission',
  templateUrl: './glossary-permission.component.html',
  styleUrls: []
})
export class GlossaryPermissionComponent implements OnInit {

  constructor(public permService: GlossaryPermissionService) { }

  ngOnInit() {
    this.resetForm();
  }

  onCheck(form?:NgForm){
        
    if(form!=null){
      console.table("wirte user email down: begining : " + form)
      this.permService.getGlossaryUser();
    }
    else{
      this.resetForm;
    }

  }
  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm(form);
      this.permService.formSearch = {
        RecId: 0,
        Role:'',
        Email:''
      }
    }
}
