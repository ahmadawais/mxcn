(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "clsx", "tailwind-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cn = void 0;
    /**
     * Mxcn.
     *
     * Utility function to use both &#x60;clsx&#x60; and &#x60;tailwind-merge&#x60; in one go. Where class merging becomes a seamless dance, leaving style conflicts in the dust!
     *
     * @author Awais <https://twitter.com/MrAhmadAwais/>
     */
    const clsx_1 = require("clsx");
    const tailwind_merge_1 = require("tailwind-merge");
    function cn(...inputs) {
        return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
    }
    exports.cn = cn;
    exports.default = cn;
});
