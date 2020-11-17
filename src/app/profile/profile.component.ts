import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ContentTypeIds } from '../content.service.types';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  content$;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.content$ = this.contentService.getContent(ContentTypeIds.profilePage);
  }
}
