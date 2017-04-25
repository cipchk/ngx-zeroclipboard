import { Injectable, NgZone } from '@angular/core';
import { Subject } from "rxjs/Subject";

import { ZeroClipboardConfig } from './zb.config';

declare const window: any;
declare const document: any;

@Injectable()
export class ScriptService {

    constructor(private zone: NgZone, 
                private cog: ZeroClipboardConfig) { }

    private loaded: boolean = false;
    private list: any = {};
    private emitter: Subject<boolean> = new Subject<boolean>();

    getChangeEmitter() {
        return this.emitter;
    }
    
    load(path: string, debug?:boolean) {
        if (!path) throw new Error('请配置ZeroClipboard.js存放路径')
        if (this.loaded) return this;

        this.loaded = true;

        this.loadScript(path).then(res => {

            // 全局设置
            if (this.cog.config) {
                this.zone.runOutsideAngular(() => {
                    window.ZeroClipboard.config(this.cog.config);
                });
            }

            this.emitter.next(true);
        });

        return this;
    }

    loadScript(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.list[path] === true) {
                resolve(<any>{
                    path: path,
                    loaded: true,
                    status: 'Loaded'
                });
                return;
            }

            this.list[path] = true;

            let node = document.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (node.readyState) { // IE
                node.onreadystatechange = () => {
                    if (node.readyState === "loaded" || node.readyState === "complete") {
                        node.onreadystatechange = null;
                        resolve(<any>{
                            path: path,
                            loaded: true,
                            status: 'Loaded'
                        });
                    }
                };
            } else {
                node.onload = () => {
                    resolve(<any>{
                        path: path,
                        loaded: true,
                        status: 'Loaded'
                    });
                };
            }
            node.onerror = (error: any) => resolve(<any>{
                path: path,
                loaded: false,
                status: 'Loaded'
            });
            document.getElementsByTagName('head')[0].appendChild(node);
        });
    }
}
