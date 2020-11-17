import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ContentTypeIds } from '../content.service.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles = [
    { color: 'primary', value: 85 },
    { color: 'accent', value: 99 },
    { color: 'warn', value: 75 }
  ]
  content$;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.content$ = this.contentService.getContent(ContentTypeIds.dashboardPage);
    console.log('******** this.content$', this.content$)
  }

}
