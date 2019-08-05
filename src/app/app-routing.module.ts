import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlossarySearchComponent } from './components/glossary-search/glossary-search.component';
import { GlossaryApprovalComponent } from './components/glossary-approval/glossary-approval.component';
import { GlossaryAddComponent } from './components/glossary-add/glossary-add.component';
import { GlossaryWelcomeComponent } from './components/glossary-welcome/glossary-welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'approval',
    component: GlossaryApprovalComponent
  },
  {
    path: 'add',
    component: GlossaryAddComponent
  },
  {
    path: 'search',
    component: GlossarySearchComponent
  },
  {
    path: 'home',
    component: GlossaryWelcomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
  })
export class AppRoutingModule {routes: Routes[] = []; }
