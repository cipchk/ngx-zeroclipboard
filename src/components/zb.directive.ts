import { Directive, Input, HostListener, ElementRef, OnDestroy, EventEmitter, Output, NgZone } from '@angular/core';
import { ZeroClipboardConfig } from './zb.config';
import { ZeroClipboardGlobalConfig } from './interfaces/global-config';
import { ScriptService } from './script.service';

declare const window: any;

@Directive({
    selector: '[zeroclipboard]',
    exportAs: 'zcDirective'
})
export class ZeroClipboardDirective implements OnDestroy {

    private id: string;
    private instance: any;

    @Output() ready = new EventEmitter();
    @Output() beforecopy = new EventEmitter();
    @Output() copy = new EventEmitter();
    @Output() aftercopy = new EventEmitter();
    @Output() destroy = new EventEmitter();
    @Output() error = new EventEmitter();

    @Input() zcData: string;
    @Input() zcType: 'text' | 'html' | 'richText' = 'text';

    constructor(private el: ElementRef,
                private zone: NgZone, 
                private ss: ScriptService,
                private cog: ZeroClipboardConfig) {}

    ngOnInit() {
        // 已经存在对象无须进入懒加载模式
        if (window.ZeroClipboard) {
            this.init();
            return;
        }

        this.ss.load(this.cog && this.cog.path, true).getChangeEmitter().subscribe(res => {
            this.init();
        });
    }

    private init(options?: any) {
        if (!window.ZeroClipboard)
            throw new Error('ZeroClipboard.js 文件加载失败');

        if (this.instance) return;

        this.zone.runOutsideAngular(() => {
            
            let zb = new window.ZeroClipboard(this.el.nativeElement);
            zb.on('ready', (arg: any) => {

                this.zone.run(() => {
                    this.ready.emit(arg);
                });
                
                zb.on('beforecopy', (arg: any) => {
                    this.zone.run(() => {
                        this.beforecopy.emit(arg);
                    });
                });
                zb.on('copy', (arg: any) => {
                    switch (this.zcType) {
                        case 'text':
                            this.instance.setText(this.zcData);
                            break;
                        case 'html':
                            this.instance.setHtml(this.zcData);
                            break;
                        case 'richText':
                            this.instance.setRichText(this.zcData);
                            break;
                    }
                    this.zone.run(() => {
                        this.copy.emit(arg);
                    });
                });
                zb.on('aftercopy', (arg: any) => {
                    this.zone.run(() => {
                        this.aftercopy.emit(arg);
                    });
                });
            });
            zb.on('error', (arg: any) => {
                this.zone.run(() => {
                    this.error.emit(arg);
                });

                window.ZeroClipboard.destroy();
            });
            this.instance = zb;
        });
    }

    ngOnDestroy() {
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
        }
        this.destroy.emit();
    }

    /**
     * 获取Zeroclipboard实例
     * 
     * @readonly
     * @type {*}
     */
    get Instance(): any {
        return this.instance;
    }

    /**
     * 重新设置全局配置
     * 
     * @param {ZeroClipboardGlobalConfig} cog 
     */
    reConfig(cog: ZeroClipboardGlobalConfig) {
        this.zone.runOutsideAngular(() => {
            window.ZeroClipboard.config(cog);
        });
    }
}
