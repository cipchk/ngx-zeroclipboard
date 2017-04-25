import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>ngx-zeroclipboard</h1>
    <p class="mb-3">ZeroClipboard for angular</p>
    <demo></demo>
  `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
