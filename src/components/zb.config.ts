import { ZeroClipboardGlobalConfig } from './interfaces/global-config';

export class ZeroClipboardConfig {

    /**
     * 指定ZeroClipboard.js存放路径
     * 
     * @type {string}
     */
    path: string;

    config?: ZeroClipboardGlobalConfig;
}
