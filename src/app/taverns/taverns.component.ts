import { Component, OnInit } from '@angular/core';
import { TavernsService, MyTavern } from './taverns.service';

@Component({
    templateUrl: './taverns.component.html',
})
export class TavernsComponent implements OnInit {
    taverns: MyTavern[];

    constructor(private tavernsService: TavernsService) {}

    ngOnInit(): void {
        this.tavernsService.getAll().subscribe((taverns) => (this.taverns = taverns));
    }
}
