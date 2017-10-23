import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'qtip2';

class QTooltip extends Component {

    static PropTypes = {
        prerender: PropTypes.bool, // true, false(Default: false) - Render tooltip HTML on $(document).ready()
        id: PropTypes.string, // "String", false (Default: false) - Incremental numerical ID used by default
        overwrite: PropTypes.bool, // true, false (Default: true) - Overwrite previous tooltips on this element
        suppress: PropTypes.bool, // true, false (Default: true) - Translate 'title' to 'oldtitle' attribute (prevent browser tooltip)
        title: PropTypes.object, // Deferred, function(){}, jQuery([ ]), "String", true (Default: true)
        text: PropTypes.object, // Deferred, function(){}, jQuery([ ]), "String", true (Default: true)
        attr: PropTypes.string, // "String" (Default: "title")
        button: PropTypes.object, // jQuery([ ]), "String", true, false (Default: false)
        my: PropTypes.string, // "Corner", false (Default: "top left")
        at: PropTypes.string, // "Corner", false (Default: "bottom right")
        target: PropTypes.object, // jQuery([ ]), [x, y], "mouse", "event", false (Default: false) - Defaults to target element
        container: PropTypes.object, // jQuery([ ]), false (Default: document.body), Defaults to $(document.body)
        viewport: PropTypes.object, // jQuery([ ]), true, false (Default: false) - Requires Viewport plugin
        x: PropTypes.number, // Integer (Default: 0) - Minor x adjustments
        y: PropTypes.number, // Integer (Default: 0) - Minor y adjustments
        mouse: PropTypes.bool, // true, false (Default: true) - Follow mouse when using target:'mouse'
        resize: PropTypes.bool, // true, false (Default: true) - Reposition on resize by default
        adjustMethod: PropTypes.string, // "{flip|flipinvert|shift|none} {flip|flipinvert|shift|none}" (Default: "flipinvert") - Requires Viewport plugin,
        adjustScroll: PropTypes.bool, // true, false (Default: true)
        positionEffect: PropTypes.func, // Function, false (Default: see below)
        showTarget: PropTypes.object, // jQuery([]), false (Default: false) - Defaults to target element
        showEvent: PropTypes.string, // "String", false (Default: "mouseenter") - Show on mouse over by default
        showEffect: PropTypes.func, // function(){}, true, false (Default: true) - Use default 90ms fade effect
        showDelay: PropTypes.number, // Integer (Default: 90) - 90ms delay before showing
        showSolo: PropTypes.object, // jQuery([]), String, true, false (Default: false) - Do not hide others when showing
        showReady: PropTypes.bool, // true, false (Default: false) - Do not show immediately
        showAutoFocus: PropTypes.object, // jQuery([]), String, true, false (Default: false) - Selector that will match the element within the tooltip to auto focus
        hideTarget: PropTypes.object, // jQuery([]), false (Default: false) - Defaults to target element
        hideEvent: PropTypes.string, // "String", false (Default: "mouseleave") - Hide on mouse out by default
        hideEffect: PropTypes.func, // Function, true, false (Default: true) - Use default 90ms fade effect
        hideDelay: PropTypes.number, // Integer (Default: 0) - No hide delay by default
        hideFixed: PropTypes.bool, // true, false (Default: false) - Non-hoverable by default
        hideInactive: PropTypes.number, // Integer, false (Default: false) - Do not hide when inactive
        hideLeave: PropTypes.string, // "window", false (Default: "window") - Hide when we leave the window
        hideDistance: PropTypes.number, // Integer, false (Default: false) - Don't hide after a set distance
        classes: PropTypes.string, // "String", false (Default: "") - No additional classes added to .qtip element
        widget: PropTypes.bool, // true, false (Default: false) - Not a jQuery UI widget
        width: PropTypes.oneOfType([ // "String", Integer, false (Default: false) - No set width
            PropTypes.string,
            PropTypes.number,
        ]),
        height: PropTypes.oneOfType([ // "String", Integer, false (Default: false) - No set height
            PropTypes.string,
            PropTypes.number,
        ]),
        tipCorner: PropTypes.string, // true, "Corner", false (Default: true) - Use position.my by default
        tipMimic: PropTypes.string, // "Corner", false (Default: false) - Don't mimic a particular corner
        tipWidth: PropTypes.number, // Integer (Default: 6)
        tipHeight: PropTypes.number, // Integer (Default: 6)
        tipBorder: PropTypes.number, // true, Integer (Default: true) - Detect border from tooltip style
        tipOffset: PropTypes.number, // Integer (Default: 0) - Do not apply an offset from corner
        onRender: PropTypes.func, // Called when tooltip rendered
        onMove: PropTypes.func, // Called when tooltip repositioned
        onShow: PropTypes.func, // Called when tooltip is about to be shown
        onHide: PropTypes.func, // Called when tooltip is about to be hidden
        onToggle: PropTypes.func, // Shortcut to binding to two events above
        onVisible: PropTypes.func, // Called when tooltip is shown
        onHidden: PropTypes.func, // Called when tooltip is hidden
        onFocus: PropTypes.func, // Called when tooltip gains focus
        onBlur: PropTypes.func, // Called when tooltip loses focus
    };

    static defaultProps = {
        prerender: false,
        id: false,
        overwrite: true,
        suppress: true,
        title: false,
        text: true,
        attr: 'title',
        button: false,
        my: 'top left',
        at: 'bottom right',
        target: false,
        container: false,
        viewport: false,
        x: 0,
        y: 0,
        mouse: true,
        resize: true,
        adjustMethod: 'flipinvert flipinvert',
        adjustScroll: true,
        positionEffect: (api, pos) => {
            $(this).animate(pos, {
                duration: 200,
                queue: false,
            });
        },
        showTarget: false,
        showEvent: 'mouseenter',
        showEffect: true,
        showDelay: 90,
        showSolo: false,
        showReady: false,
        showAutoFocus: false,
        hideTarget: false,
        hideEvent: 'mouseleave',
        hideEffect: true,
        hideDelay: 0,
        hideFixed: false,
        hideInactive: false,
        hideLeave: 'window',
        hideDistance: false,
        classes: '',
        widget: false,
        width: false,
        height: false,
        tipCorner: true,
        tipMimic: false,
        tipWidth: 8,
        tipHeight: 8,
        tipBorder: true,
        tipOffset: 0,
        onRender: null,
        onMove: null,
        onShow: null,
        onHide: null,
        onToggle: null,
        onVisible: null,
        onHidden: null,
        onFocus: null,
        onBlur: null,
    };


    componentDidMount() {
        const defaults = $.fn.qtip.defaults;

        const { prerender, id, overwrite, suppress } = this.props;
        const { text, attr, title, button } = this.props;
        const { my, at, target, container, viewport, x, y, mouse, resize, adjustMethod, adjustScroll, effect } = this.props;
        const { showTarget, showEvent, showEffect, showDelay, showSolo, showReady, showAutoFocus } = this.props;
        const { hideTarget, hideEvent, hideEffect, hideDelay, hideFixed, hideInactive, hideLeave, hideDistance } = this.props;
        const { classes, widget, width, height, tipCorner, tipMimic, tipWidth, tipHeight, tipBorder, tipOffset } = this.props;
        const { onRender, onMove, onShow, onHide, onToggle, onVisible, onHidden, onFocus, onBlur } = this.props;

        const params = {
            prerender,
            id,
            overwrite,
            suppress,
            content: {
                text,
                attr,
                button,
                title,
            },
            position: {
                my,
                at,
                target,
                container,
                viewport,
                adjust: {
                    x,
                    y,
                    mouse,
                    resize,
                    method: adjustMethod,
                    scroll: adjustScroll,
                },
                effect,
            },
            show: {
                target: showTarget,
                event: showEvent,
                effect: this.isFunction(showEffect) ? showEffect : true,
                delay: showDelay,
                solo: showSolo,
                ready: showReady,
                autofocus: showAutoFocus,
            },
            hide: {
                target: hideTarget,
                event: hideEvent,
                effect: this.isFunction(hideEffect) ? hideEffect : true,
                delay: hideDelay,
                fixed: hideFixed,
                inactive: hideInactive,
                leave: hideLeave,
                distance: hideDistance,
            },
            style: {
                classes,
                widget,
                width,
                height,
                tip: {
                    corner: tipCorner,
                    mimic: tipMimic,
                    width: tipWidth,
                    height: tipHeight,
                    border: tipBorder,
                    offset: tipOffset,
                },
            },
            events: {
                render: onRender,
                move: onMove,
                show: onShow,
                hide: onHide,
                toggle: onToggle,
                visible: onVisible,
                hidden: onHidden,
                focus: onFocus,
                blur: onBlur,
            },
        };

        const settings = Object.assign({}, defaults, params);
        const $tooltip = $(this.tooltip);
        $tooltip.qtip(settings);
    }

    isFunction = (obj) => {
        const getType = {};
        return obj && getType.toString.call(obj) === '[object Function]';
    }

    render() {
        return (
            <div ref={(c) => { this.tooltip = c; }}>
                {this.props.children}
            </div>
        );
    }
}

export default QTooltip;
