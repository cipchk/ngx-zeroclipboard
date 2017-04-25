/* tslint:disable */
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ZeroClipboardDirective } from 'ngx-zeroclipboard';

declare const window: any;

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DemoComponent {

    @ViewChild('copy') copy: ZeroClipboardDirective;

    switherState: boolean = true;

    data: string = 'Copy me!';
    result: string = '';
    logs: string[] = [];

    constructor(private el: ElementRef) {}

    clear() {
        this.data = 'Copy me!';
        this.result = '';
        this.logs = [];
    }

    ready() {
        this.logs.push('Flash movie loaded and ready.')
    }

    reConfig() {
        this.copy.reConfig({
            title: 'new title'
        });
        this.logs.push('the "Copy" button title value is "new title"')
    }
}
