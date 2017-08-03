import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from '../shared/index';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
        .container { padding: 0px 20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent implements OnInit {

    event: IEvent;

    constructor( private eventService: EventService, private route: ActivatedRoute ) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}
