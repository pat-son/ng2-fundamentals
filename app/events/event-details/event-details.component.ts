import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

import { IEvent, ISession } from '../shared/index';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
        .container { padding: 0px 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer;}
    `]
})

export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode = false;

    constructor( private eventService: EventService, private route: ActivatedRoute ) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        if(session) {
            const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
            session.id = nextId;
            this.event.sessions.push(session);
            this.eventService.updateEvent(this.event);
        }
        this.addMode = false;
    }
}
