import { GlossarySearchComponent } from './components/glossary-search/glossary-search.component';
import { GlossaryApprovalComponent } from './components/glossary-approval/glossary-approval.component';
import { GlossaryPermissionComponent } from './components/glossary-permission/glossary-permission.component';
import { MainComponent } from './components/main/main.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlossaryApprovalService } from './services/glossary-approval.service';
import { AppComponent } from './app.component';
import { GlossarySearchService } from './services/glossary-search.service';
import { GlossaryPermissionService } from './services/glossary-permission.service';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { GlossaryWelcomeComponent } from './components/glossary-welcome/glossary-welcome.component';
import { GlossaryAddComponent } from './components/glossary-add/glossary-add.component';



@NgModule({
  declarations: [
    AppComponent,
    GlossarySearchComponent,
    GlossaryApprovalComponent,
    GlossaryPermissionComponent,
    GlossaryAddComponent,
    MainComponent,
    GlossaryWelcomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,


  ],
  providers: [GlossaryApprovalService, GlossarySearchService, GlossaryPermissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
