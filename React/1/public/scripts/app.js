'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(BulletList, { list: ['prvni', 'druhe', 'treti'] })
            );
        }
    }]);

    return App;
}(React.Component);

var BulletList = function (_React$Component2) {
    _inherits(BulletList, _React$Component2);

    function BulletList() {
        _classCallCheck(this, BulletList);

        return _possibleConstructorReturn(this, (BulletList.__proto__ || Object.getPrototypeOf(BulletList)).apply(this, arguments));
    }

    _createClass(BulletList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.list && this.props.list.length > 0 && this.props.list.map(function (l, i) {
                    return React.createElement(List, { key: i, list: l });
                })
            );
        }
    }]);

    return BulletList;
}(React.Component);

var List = function (_React$Component3) {
    _inherits(List, _React$Component3);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    null,
                    this.props.list
                )
            );
        }
    }]);

    return List;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
