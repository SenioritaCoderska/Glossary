import { GlossarySearchComponent } from './components/glossary-search/glossary-search.component';
import { GlossaryApprovalComponent } from './components/glossary-approval/glossary-approval.component';
import { GlossaryPermissionComponent } from './components/glossary-permission/glossary-permission.component';

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
import { GlossaryWelcomeComponent } from './components/glossary-welcome/glossary-welcome.component';
import { GlossaryAddComponent } from './components/glossary-add/glossary-add.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


// const routes: Routes = [

//   {
//     path: 'approval',
//     component: GlossaryApprovalComponent,
//     data: { title: 'Check Approvals'}
//   },
//   {
//     path: 'add',
//     component: GlossaryAddComponent
//   },
//   {
//     path: 'search',
//     component: GlossarySearchComponent
//   },
//   {
//     path: 'home',
//     component: GlossaryWelcomeComponent
//   },
//   { path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
// },
// { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    GlossarySearchComponent,
    GlossaryApprovalComponent,
    GlossaryPermissionComponent,
    GlossaryAddComponent,
    GlossaryWelcomeComponent,
    PageNotFoundComponent,
    
    
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
