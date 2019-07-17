import { Component, OnInit } from '@angular/core';
import { GlossaryApprovalService } from '../../services/glossary-approval.service';
import { GlossaryApproval } from '../../models/glossary-approval.model';

@Component({
  selector: 'app-glossary-approval',
  templateUrl: './glossary-approval.component.html',
  styleUrls: []
})
export class GlossaryApprovalComponent implements OnInit {

  constructor(public service: GlossaryApprovalService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
