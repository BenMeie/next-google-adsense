"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAdSense = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const script_1 = tslib_1.__importDefault(require("next/script"));
const utils_1 = require("./utils");
const GoogleAdSense = ({ publisherId, debug = false, }) => {
    var _a;
    const _publisherId = (_a = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID) !== null && _a !== void 0 ? _a : publisherId;
    if (!(0, utils_1.isPublisherId)(_publisherId)) {
        console.error("❌ [next-google-adsense] Invalid publisherId. It should be like this: pub-xxxxxxxxxxxxxxxx, there is a total of 16 digits behind pub-");
        return null;
    }
    return (react_1.default.createElement(script_1.default, { async: true, id: "next-google-adsense", src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${_publisherId}${debug ? `google_console=1` : ``}`, strategy: "afterInteractive" }));
};
exports.GoogleAdSense = GoogleAdSense;
