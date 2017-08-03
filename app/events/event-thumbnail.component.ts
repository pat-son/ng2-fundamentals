import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styles: [`
    .thumbnail { min-height: 210px;}
    .green {color: #030 !important;}
    .bold {font-weight: bold;}
    .pad-left {
      margin-left: 10px;
    }
    .well div {
      color: #bbb;
    }
  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input('event') event: IEvent;

  constructor() { }

  ngOnInit() { }

  getStartTimeClass() {
    const isEarly = this.event && this.event.time === '8:00 am';
    return {green: isEarly, bold: isEarly}
  }

}
