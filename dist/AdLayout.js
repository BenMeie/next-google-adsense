"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InArticle = exports.Display = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Display = (props) => {
    var _a;
    return (react_1.default.createElement("ins", { className: "adsbygoogle", style: { display: "block" }, "data-ad-format": "auto", "data-full-width-responsive": (_a = props.responsive) !== null && _a !== void 0 ? _a : true, "data-ad-client": props.dataAdClient, "data-ad-slot": props.dataAdSlot }));
};
exports.Display = Display;
const InArticle = (props) => {
    return (react_1.default.createElement("ins", { className: "adsbygoogle", style: { display: "block", textAlign: "center" }, "data-ad-layout": "in-article", "data-ad-format": "fluid", "data-ad-client": props.dataAdClient, "data-ad-slot": props.dataAdSlot }));
};
exports.InArticle = InArticle;
