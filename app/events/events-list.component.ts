import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from './shared/index';

import { EventService } from './shared/index';
import { ToastrService } from '../common/toastr.service'

@Component({
  moduleId: module.id,
  selector: 'events-list',
  templateUrl: 'events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor( private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }

}
