'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('qtip2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  QTooltip(react-qtip) is react-based implementation of qtip2(http://qtip2.com)
 */
var QTooltip = function (_Component) {
    _inherits(QTooltip, _Component);

    function QTooltip() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, QTooltip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QTooltip.__proto__ || Object.getPrototypeOf(QTooltip)).call.apply(_ref, [this].concat(args))), _this), _this.isFunction = function (obj) {
            var getType = {};
            return obj && getType.toString.call(obj) === '[object Function]';
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(QTooltip, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var defaults = _jquery2.default.fn.qtip.defaults;

            var _props = this.props,
                prerender = _props.prerender,
                id = _props.id,
                overwrite = _props.overwrite,
                suppress = _props.suppress;
            var _props2 = this.props,
                text = _props2.text,
                attr = _props2.attr,
                title = _props2.title,
                button = _props2.button;
            var _props3 = this.props,
                my = _props3.my,
                at = _props3.at,
                target = _props3.target,
                container = _props3.container,
                viewport = _props3.viewport,
                x = _props3.x,
                y = _props3.y,
                mouse = _props3.mouse,
                resize = _props3.resize,
                adjustMethod = _props3.adjustMethod,
                adjustScroll = _props3.adjustScroll,
                effect = _props3.effect;
            var _props4 = this.props,
                showTarget = _props4.showTarget,
                showEvent = _props4.showEvent,
                showEffect = _props4.showEffect,
                showDelay = _props4.showDelay,
                showSolo = _props4.showSolo,
                showReady = _props4.showReady,
                showAutoFocus = _props4.showAutoFocus;
            var _props5 = this.props,
                hideTarget = _props5.hideTarget,
                hideEvent = _props5.hideEvent,
                hideEffect = _props5.hideEffect,
                hideDelay = _props5.hideDelay,
                hideFixed = _props5.hideFixed,
                hideInactive = _props5.hideInactive,
                hideLeave = _props5.hideLeave,
                hideDistance = _props5.hideDistance;
            var _props6 = this.props,
                classes = _props6.classes,
                widget = _props6.widget,
                width = _props6.width,
                height = _props6.height,
                tipCorner = _props6.tipCorner,
                tipMimic = _props6.tipMimic,
                tipWidth = _props6.tipWidth,
                tipHeight = _props6.tipHeight,
                tipBorder = _props6.tipBorder,
                tipOffset = _props6.tipOffset;
            var _props7 = this.props,
                onRender = _props7.onRender,
                onMove = _props7.onMove,
                onShow = _props7.onShow,
                onHide = _props7.onHide,
                onToggle = _props7.onToggle,
                onVisible = _props7.onVisible,
                onHidden = _props7.onHidden,
                onFocus = _props7.onFocus,
                onBlur = _props7.onBlur;


            var params = {
                prerender: prerender,
                id: id,
                overwrite: overwrite,
                suppress: suppress,
                content: {
                    text: text,
                    attr: attr,
                    button: button,
                    title: title
                },
                position: {
                    my: my,
                    at: at,
                    target: target,
                    container: container,
                    viewport: viewport,
                    adjust: {
                        x: x,
                        y: y,
                        mouse: mouse,
                        resize: resize,
                        method: adjustMethod,
                        scroll: adjustScroll
                    },
                    effect: effect
                },
                show: {
                    target: showTarget,
                    event: showEvent,
                    effect: this.isFunction(showEffect) ? showEffect : true,
                    delay: showDelay,
                    solo: showSolo,
                    ready: showReady,
                    autofocus: showAutoFocus
                },
                hide: {
                    target: hideTarget,
                    event: hideEvent,
                    effect: this.isFunction(hideEffect) ? hideEffect : true,
                    delay: hideDelay,
                    fixed: hideFixed,
                    inactive: hideInactive,
                    leave: hideLeave,
                    distance: hideDistance
                },
                style: {
                    classes: classes,
                    widget: widget,
                    width: width,
                    height: height,
                    tip: {
                        corner: tipCorner,
                        mimic: tipMimic,
                        width: tipWidth,
                        height: tipHeight,
                        border: tipBorder,
                        offset: tipOffset
                    }
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
                    blur: onBlur
                }
            };

            var settings = Object.assign({}, defaults, params);
            var $tooltip = (0, _jquery2.default)(this.tooltip);
            $tooltip.qtip(settings);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { ref: function ref(c) {
                        _this2.tooltip = c;
                    }, style: { display: 'inline' } },
                this.props.children
            );
        }
    }]);

    return QTooltip;
}(_react.Component);

QTooltip.propTypes = {
    /** true, false(Default: false) - Render tooltip HTML on $(document).ready() */
    prerender: _propTypes2.default.bool,
    /** "String", false (Default: false) - Incremental numerical ID used by default */
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /** true, false (Default: true) - Overwrite previous tooltips on this element */
    overwrite: _propTypes2.default.bool,
    /** true, false (Default: true) - Translate 'title' to 'oldtitle' attribute (prevent browser tooltip) */
    suppress: _propTypes2.default.bool,
    /** Deferred, function(){}, jQuery([ ]), "String", true (Default: true) */
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node, _propTypes2.default.func]),
    /** Deferred, function(){}, jQuery([ ]), "String", true (Default: true) */
    text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node, _propTypes2.default.func]),
    /** "String" (Default: "title") */
    attr: _propTypes2.default.string,
    /** jQuery([ ]), "String", true, false (Default: false) */
    button: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node]),
    /** "Corner", false (Default: "top left") */
    my: _propTypes2.default.string,
    /** "Corner", false (Default: "bottom right") */
    at: _propTypes2.default.string,
    /** jQuery([ ]), [x, y], "mouse", "event", false (Default: false) - Defaults to target element */
    target: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node, _propTypes2.default.array]),
    /** jQuery([ ]), false (Default: document.body), Defaults to $(document.body) */
    container: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node, _propTypes2.default.object]),
    /** jQuery([ ]), true, false (Default: false) - Requires Viewport plugin */
    viewport: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node, _propTypes2.default.func]),
    /** Integer (Default: 0) - Minor x adjustments */
    x: _propTypes2.default.number,
    /** Integer (Default: 0) - Minor y adjustments */
    y: _propTypes2.default.number,
    /** true, false (Default: true) - Follow mouse when using target:'mouse' */
    mouse: _propTypes2.default.bool,
    /** true, false (Default: true) - Reposition on resize by default */
    resize: _propTypes2.default.bool,
    /** "{flip|flipinvert|shift|none} {flip|flipinvert|shift|none}" (Default: "flipinvert") - Requires Viewport plugin, */
    adjustMethod: _propTypes2.default.string,
    /** true, false (Default: true) */
    adjustScroll: _propTypes2.default.bool,
    /** Function, false (Default: see below) */
    positionEffect: _propTypes2.default.func,
    /** jQuery([]), false (Default: false) - Defaults to target element */
    showTarget: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.node]),
    /** "String", false (Default: "mouseenter") - Show on mouse over by default */
    showEvent: _propTypes2.default.string,
    /** function(){}, true, false (Default: true) - Use default 90ms fade effect */
    showEffect: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    /** Integer (Default: 90) - 90ms delay before showing */
    showDelay: _propTypes2.default.number,
    /** jQuery([]), String, true, false (Default: false) - Do not hide others when showing */
    showSolo: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node]),
    /** true, false (Default: false) - Do not show immediately */
    showReady: _propTypes2.default.bool,
    /** jQuery([]), String, true, false (Default: false) - Selector that will match the element within the tooltip to auto focus */
    showAutoFocus: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.node]),
    /** jQuery([]), false (Default: false) - Defaults to target element */
    hideTarget: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    /** "String", false (Default: "mouseleave") - Hide on mouse out by default */
    hideEvent: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    /** Function, true, false (Default: true) - Use default 90ms fade effect */
    hideEffect: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
    /** Integer (Default: 0) - No hide delay by default */
    hideDelay: _propTypes2.default.number,
    /** true, false (Default: false) - Non-hoverable by default */
    hideFixed: _propTypes2.default.bool,
    /** Integer, false (Default: false) - Do not hide when inactive */
    hideInactive: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    /** "window", false (Default: "window") - Hide when we leave the window */
    hideLeave: _propTypes2.default.string,
    /** Integer, false (Default: false) - Don't hide after a set distance */
    hideDistance: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    /** "String", false (Default: "") - No additional classes added to .qtip element */
    classes: _propTypes2.default.string,
    /** true, false (Default: false) - Not a jQuery UI widget */
    widget: _propTypes2.default.bool,
    /** "String", Integer, false (Default: false) - No set width */
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    /** "String", Integer, false (Default: false) - No set height */
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    /** true, "Corner", false (Default: true) - Use position.my by default */
    tipCorner: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /** "Corner", false (Default: false) - Don't mimic a particular corner */
    tipMimic: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    /** Integer (Default: 6) - Height of tooltip */
    tipWidth: _propTypes2.default.number,
    /** Integer (Default: 6) - Width of tooltip */
    tipHeight: _propTypes2.default.number,
    /** true, Integer (Default: true) - Detect border from tooltip style */
    tipBorder: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    /** Integer (Default: 0) - Do not apply an offset from corner */
    tipOffset: _propTypes2.default.number,
    /** Called when tooltip rendered */
    onRender: _propTypes2.default.func,
    /** Called when tooltip repositioned */
    onMove: _propTypes2.default.func,
    /** Called when tooltip is about to be shown */
    onShow: _propTypes2.default.func,
    /** Called when tooltip is about to be hidden */
    onHide: _propTypes2.default.func,
    /** Shortcut to binding to two events above */
    onToggle: _propTypes2.default.func,
    /** Called when tooltip is shown */
    onVisible: _propTypes2.default.func,
    /** Called when tooltip is hidden */
    onHidden: _propTypes2.default.func,
    /** Called when tooltip gains focus */
    onFocus: _propTypes2.default.func,
    /** Called when tooltip loses focus */
    onBlur: _propTypes2.default.func
};
QTooltip.defaultProps = {
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
    positionEffect: function positionEffect(api, pos) {
        (0, _jquery2.default)(undefined).animate(pos, {
            duration: 200,
            queue: false
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
    onBlur: null
};
exports.default = QTooltip;