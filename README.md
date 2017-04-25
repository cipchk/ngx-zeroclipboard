# ngx-zeroclipboard
ZeroClipboard for angular

[![NPM version](https://img.shields.io/npm/v/ngx-zeroclipboard.svg)](https://www.npmjs.com/package/ngx-zeroclipboard)
[![Build Status](https://travis-ci.org/cipchk/ngx-zeroclipboard.svg?branch=master)](https://travis-ci.org/cipchk/ngx-zeroclipboard)


## Demo

[Live Demo](https://cipchk.github.io/ngx-zeroclipboard/)

## Features

+ lazy load zeroclipboard.js

## Usage

### 1. Install

```
npm install ngx-zeroclipboard --save
```

import `UEditorModule` 

```typescript
import { ZeroClipboardModule } from 'ngx-zeroclipboard';

@NgModule({
    imports: [ 
        BrowserModule,
        ZeroClipboardModule.forRoot({
            // ZeroClipboard.js URL
            path: './assets/zeroclipboard/dist/ZeroClipboard.js',
            // Configuration Options
            // see：https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/api/ZeroClipboard.md#configuration-options
            config: {
                title: 'Copy me!'
            }
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2、Template

```html
<button type="button" class="btn btn-primary"
    zeroclipboard [zcData]="data" [zcType]="'text'" #copy="zcDirective"
    (ready)=""
    (beforecopy)=""
    (copy)=""
    (aftercopy)=""
    (destroy)=""
    (error)="">Copy</button>
```

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| zcData | string |  | copy data |
| zcType | 'text' | 'html' | 'richText' | 'text' |  |
| ready | Function |  |  |
| beforecopy | Function |  |  |
| copy | Function |  |  |
| aftercopy | Function |  |  |
| destroy | Function |  |  |
| error | Function |  |  |

## Directive Instance

```typescript
@Component({
    template: `<button zeroclipboard [zcData]="data" #copy="zcDirective">Copy</button>`
})
export class DemoComponent {
    @ViewChild('copy') copy: ZeroClipboardDirective;
}
```

## Document

```typescript

interface ZeroClipboardDirective {
    /**
     * 获取Zeroclipboard实例
     */
    get Instance(): any {}

    /**
     * 重新设置全局配置
     */
    reConfig(cog: ZeroClipboardGlobalConfig) {}
}
```

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/cipchk/ngx-zeroclipboard/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/cipchk/ngx-zeroclipboard/blob/master/LICENSE) file for the full text)
