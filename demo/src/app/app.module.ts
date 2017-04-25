import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';

import { ZeroClipboardModule } from 'ngx-zeroclipboard';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    HighlightJsModule,
    ZeroClipboardModule.forRoot({
        path: './assets/zeroclipboard/dist/ZeroClipboard.js',
        config: {
            title: 'Copy me!'
        }
    })
  ],
  declarations: [
    AppComponent,
    DemoComponent
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})

export class AppDemoModule {
}
