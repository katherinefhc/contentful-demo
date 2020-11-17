import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ContentTypeIds } from '../content.service.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  content$;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.content$ = this.contentService.getContent(ContentTypeIds.loginPage);
    console.log('******** this.content$', this.content$)
  }
}
