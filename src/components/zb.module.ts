import { NgModule, ModuleWithProviders } from '@angular/core';

import { ZeroClipboardConfig } from './zb.config';
import { ZeroClipboardDirective } from "./zb.directive";
import { ScriptService } from './script.service';

@NgModule({
  imports: [],
  providers: [ ScriptService ],
  declarations: [ ZeroClipboardDirective ],
  exports: [ ZeroClipboardDirective ]
})
export class ZeroClipboardModule {
    static forRoot(config?: ZeroClipboardConfig): ModuleWithProviders {
        return {
            ngModule: ZeroClipboardModule,
            providers: [
                { provide: ZeroClipboardConfig, useValue: config }
            ]
        };
    }
}
