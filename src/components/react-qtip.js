import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'qtip2';

/**
 *  QTooltip(react-qtip) is react-based implementation of qtip2(http://qtip2.com)
 */
class QTooltip extends Component {
    static propTypes = {
        /** true, false(Default: false) - Render tooltip HTML on $(document).ready() */
        prerender: PropTypes.bool,
        /** "String", false (Default: false) - Incremental numerical ID used by default */
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        /** true, false (Default: true) - Overwrite previous tooltips on this element */
        overwrite: PropTypes.bool,
        /** true, false (Default: true) - Translate 'title' to 'oldtitle' attribute (prevent browser tooltip) */
        suppress: PropTypes.bool,
        /** Deferred, function(){}, jQuery([ ]), "String", true (Default: true) */
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.node,
            PropTypes.func,
        ]),
        /** Deferred, function(){}, jQuery([ ]), "String", true (Default: true) */
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.node,
            PropTypes.func,
        ]),
        /** "String" (Default: "title") */
        attr: PropTypes.string,
        /** jQuery([ ]), "String", true, false (Default: false) */
        button: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.node,
        ]),
        /** "Corner", false (Default: "top left") */
        my: PropTypes.string,
        /** "Corner", false (Default: "bottom right") */
        at: PropTypes.string,
        /** jQuery([ ]), [x, y], "mouse", "event", false (Default: false) - Defaults to target element */
        target: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.node,
            PropTypes.array,
        ]),
        /** jQuery([ ]), false (Default: document.body), Defaults to $(document.body) */
        container: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.node,
            PropTypes.object,
        ]),
        /** jQuery([ ]), true, false (Default: false) - Requires Viewport plugin */
        viewport: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.node,
            PropTypes.func,
        ]),
        /** Integer (Default: 0) - Minor x adjustments */
        x: PropTypes.number,
        /** Integer (Default: 0) - Minor y adjustments */
        y: PropTypes.number,
        /** true, false (Default: true) - Follow mouse when using target:'mouse' */
        mouse: PropTypes.bool,
        /** true, false (Default: true) - Reposition on resize by default */
        resize: PropTypes.bool,
        /** "{flip|flipinvert|shift|none} {flip|flipinvert|shift|none}" (Default: "flipinvert") - Requires Viewport plugin, */
        adjustMethod: PropTypes.string,
        /** true, false (Default: true) */
        adjustScroll: PropTypes.bool,
        /** Function, false (Default: see below) */
        positionEffect: PropTypes.func,
        /** jQuery([]), false (Default: false) - Defaults to target element */
        showTarget: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.node,
        ]),
        /** "String", false (Default: "mouseenter") - Show on mouse over by default */
        showEvent: PropTypes.string,
        /** function(){}, true, false (Default: true) - Use default 90ms fade effect */
        showEffect: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func,
        ]),
        /** Integer (Default: 90) - 90ms delay before showing */
        showDelay: PropTypes.number,
        /** jQuery([]), String, true, false (Default: false) - Do not hide others when showing */
        showSolo: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.node,
        ]),
        /** true, false (Default: false) - Do not show immediately */
        showReady: PropTypes.bool,
        /** jQuery([]), String, true, false (Default: false) - Selector that will match the element within the tooltip to auto focus */
        showAutoFocus: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.node,
        ]),
        /** jQuery([]), false (Default: false) - Defaults to target element */
        hideTarget: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func,
        ]),
        /** "String", false (Default: "mouseleave") - Hide on mouse out by default */
        hideEvent: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
        ]),
        /** Function, true, false (Default: true) - Use default 90ms fade effect */
        hideEffect: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func,
        ]),
        /** Integer (Default: 0) - No hide delay by default */
        hideDelay: PropTypes.number,
        /** true, false (Default: false) - Non-hoverable by default */
        hideFixed: PropTypes.bool,
        /** Integer, false (Default: false) - Do not hide when inactive */
        hideInactive: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.bool,
        ]),
        /** "window", false (Default: "window") - Hide when we leave the window */
        hideLeave: PropTypes.string,
        /** Integer, false (Default: false) - Don't hide after a set distance */
        hideDistance: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.bool,
        ]),
        /** "String", false (Default: "") - No additional classes added to .qtip element */
        classes: PropTypes.string,
        /** true, false (Default: false) - Not a jQuery UI widget */
        widget: PropTypes.bool,
        /** "String", Integer, false (Default: false) - No set width */
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        /** "String", Integer, false (Default: false) - No set height */
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        /** true, "Corner", false (Default: true) - Use position.my by default */
        tipCorner: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        /** "Corner", false (Default: false) - Don't mimic a particular corner */
        tipMimic: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        /** Integer (Default: 6) - Height of tooltip */
        tipWidth: PropTypes.number,
        /** Integer (Default: 6) - Width of tooltip */
        tipHeight: PropTypes.number,
        /** true, Integer (Default: true) - Detect border from tooltip style */
        tipBorder: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.bool,
        ]),
        /** Integer (Default: 0) - Do not apply an offset from corner */
        tipOffset: PropTypes.number,
        /** Called when tooltip rendered */
        onRender: PropTypes.func,
        /** Called when tooltip repositioned */
        onMove: PropTypes.func,
        /** Called when tooltip is about to be shown */
        onShow: PropTypes.func,
        /** Called when tooltip is about to be hidden */
        onHide: PropTypes.func,
        /** Shortcut to binding to two events above */
        onToggle: PropTypes.func,
        /** Called when tooltip is shown */
        onVisible: PropTypes.func,
        /** Called when tooltip is hidden */
        onHidden: PropTypes.func,
        /** Called when tooltip gains focus */
        onFocus: PropTypes.func,
        /** Called when tooltip loses focus */
        onBlur: PropTypes.func,
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
        adjustMethod: 'flip shift',
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
        tipWidth: 6,
        tipHeight: 6,
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
            <div ref={(c) => { this.tooltip = c; }} style={{ display: 'inline' }}>
                {this.props.children}
            </div>
        );
    }
}

export default QTooltip;
