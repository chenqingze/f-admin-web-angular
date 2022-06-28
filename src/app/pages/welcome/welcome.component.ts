import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
    gender = 'female';

    constructor() {
    }

    ngOnInit() {
    }

    male() {
        this.gender = 'male';
    }

    female() {
        this.gender = 'female';
    }

    other() {
        this.gender = 'other';
    }
}
