"use strict";
exports.__esModule = true;
var FloatingPlaceholder = /** @class */ (function () {
    function FloatingPlaceholder(_a) {
        var _b = _a.element, element = _b === void 0 ? null : _b, _c = _a.activeClass, activeClass = _c === void 0 ? 'active' : _c;
        var _this = this;
        this.element = element;
        this.activeClass = activeClass;
        if (this.element) {
            this.input();
            this.element.addEventListener("input", function () { return _this.input(); });
        }
    }
    FloatingPlaceholder.prototype.input = function () {
        var parent = this.element.parentElement;
        var label = parent ? parent.querySelector("label") : null;
        if (label &&
            this.element.value &&
            !label.classList.contains(this.activeClass)) {
            label.classList.add(this.activeClass);
        }
        else if (label &&
            !this.element.value &&
            label.classList.contains(this.activeClass)) {
            label.classList.remove(this.activeClass);
        }
    };
    return FloatingPlaceholder;
}());
exports["default"] = FloatingPlaceholder;
