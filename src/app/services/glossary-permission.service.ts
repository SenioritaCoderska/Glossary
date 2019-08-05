import { Injectable } from '@angular/core';;
import { GlossaryPermission } from '../models/glossary-permission.model';
import { HttpClient } from '@angular/common/http';
import { GlossarySearch } from '../models/glossary-search.model';

@Injectable({
  providedIn: 'root'
})
export class GlossaryPermissionService {
  readonly domain="https://localhost:5001/api";
    constructor(private http:HttpClient) { }
    

  }