import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index'

@Component({
    moduleId: module.id,
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left: 10px;}
        .error input, .error textarea {background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :ms-input-placeholder {color: #999;}
    `]
})

export class CreateSessionComponent implements OnInit {
    public newSessionForm: FormGroup;
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;

    constructor() { }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues) {
        let session: ISession = {
            id: 999,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session);
    }
}
