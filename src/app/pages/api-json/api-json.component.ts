import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiJsonService } from './api-json.service';

@Component({
  selector: 'app-api-json',
  templateUrl: './api-json.component.html',
  styleUrls: ['./api-json.component.scss']
})
export class ApiJsonComponent {
  title = 'API JSON'
  api: any;

  constructor(private apiJsonServices: ApiJsonService) { }

  ngOnInit() {
    this.apiJsonServices.getGuide().subscribe(api => {
      this.api = api;
    });
  }
}
