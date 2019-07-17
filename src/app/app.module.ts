import { GlossarySearchComponent } from './src/components/glossary-search/glossary-search.component';
import { GlossaryApprovalComponent } from './src/components/glossary-approval/glossary-approval.component';
import { GlossaryPermissionComponent } from './src/components/glossary-permission/glossary-permission.component';
import { MainComponent } from './src/components/main/main.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlossaryApprovalService } from './src/services/glossary-approval.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    GlossarySearchComponent,
    GlossaryApprovalComponent,
    GlossaryPermissionComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [GlossaryApprovalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
