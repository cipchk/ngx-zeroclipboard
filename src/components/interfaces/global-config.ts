export interface ZeroClipboardGlobalConfig {

    /**
     * 指定SWF文件的URL
     * 
     * @type {string}
     */
    swfPath?: string;

    /**
     * SWF入内的脚本策略: 用于指定SWF应该信任的页面域名
     * 默认为当前域名
     * 
     * @type {string[]}
     */
    trustedDomains?: string | string[];

    /**
     * 是否阻止SWF文件缓存，默认为true
     * 此时，将在SWF请求上添加一个"noCache"的查询参数后缀来阻止访问缓存内容
     * 
     * @type {boolean}
     */
    cacheBust?: boolean;

    /**
     * 启用功能花哨的"桌面"剪贴板，甚至在Linux上，它是众所周知的让人讨厌
     * 
     * @type {boolean}
     */
    forceEnhancedClipboard?: boolean;

    /**
     * 指定等待加载Flash SWF文件的毫秒数，超过该时间就假定Flash在用户浏览器上是未激活的
     * 如果你不在意加载花费的时间，你可以将其设为null
     * 
     * @type {number}
     */
    flashLoadTimeout?: number;

    /**
     * 将其设为false，将允许用户调用ZeroClipboard.focus(...)来处理
     * 而不是依赖于每个DOM元素的mouseover处理程序
     * 
     * @type {boolean}
     */
    autoActivate?: boolean;

    /**
     * 当Flash对象接收处理后，是否在JS中冒泡Flash模拟的对应事件。
     * 例如，你点击进行复制之后，是否让Flash模拟一个click事件，以便于该元素去冒泡触发对应的JS事件
     * 
     * @type {boolean}
     */
    bubbleEvents?: boolean;

    /**
     * 确保正确的结束符（window \r\n 其他系统 \n）
     * 
     * @type {boolean}
     * @memberOf ZeroClipboardConfig
     */
    fixLineEndings?: boolean;

    /**
     * 设置放置Flash对象的div的ID属性
     * 其值将会经过针对ID属性的HTML4 规范验证.
     * 
     * @type {string}
     */
    containerId?: string;

    /**
     * 设置放置Flash对象的div的CSS类名
     * 
     * @type {string}
     */
    containerClass?: string;

    /**
     * 设置Flash对象的div的ID属性和name属性
     * 其值将会经过针对ID属性和name属性的HTML4 规范验证.
     * 
     * @type {string}
     */
    swfObjectId?: string;

    /**
     * 将鼠标滑过复制载体元素时使用的CSS类名
     * 
     * @type {string}
     */
    hoverClass?: string;

    /**
     * 
     * 
     * @type {string}
     * @memberOf ZeroClipboardConfig
     */
    activeClass?: string;

    /**
     * 强制所有复制载体元素使用手形光标("cursor: pointer")
     * 重要: 该配置的值可以被一个活动的嵌入SWF修改
     * 
     * @type {boolean}
     */
    forceHandCursor?: boolean;

    /**
     * 设置放置Flash对象的div的title属性，鼠标悬停时显示的提示文本
     * 重要: 该配置的值可以被一个活动的嵌入SWF修改
     * 
     * @type {string}
     */
    title?: string;

    /**
     * Flash对象的 z-index CSS属性
     * 最大值为(332位): 2147483647.
     * 重要: 该配置的值可以被一个活动的嵌入SWF修改
     * 
     * @type {number}
     */
    zIndex?: number;

}
