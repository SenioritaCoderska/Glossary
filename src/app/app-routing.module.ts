import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GlossarySearchComponent } from './components/glossary-search/glossary-search.component';

const routes: Routes = []
{path: 'https://insite.clariant.com'}

;

@NgModule({
  declarations: [],
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
  })
export class AppRoutingModule { }
