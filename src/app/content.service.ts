import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

import { ContentTypeIds } from './content.service.types';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private CONFIG = {
    space: 'ehet9ql1gjaf',
    accessToken: 'Ndohrlnkn51rX01l2ZEZ5G3yGCDPgdIlfgDtM4DiYsI',
    contentTypeIds: ContentTypeIds
  };

  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  });

  getContent(contentType: string, query?: object) {
    return from(
      this.cdaClient.getEntry(contentType)
    )
    .pipe(first());
  }
}
