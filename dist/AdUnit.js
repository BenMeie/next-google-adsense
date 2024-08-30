"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdUnit = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const navigation_1 = require("next/navigation");
const script_1 = tslib_1.__importDefault(require("next/script"));
const utils_1 = require("./utils");
const AdLayout_1 = require("./AdLayout");
const AdUnit = ({ publisherId, slotId, layout = "display", customLayout, comment = "regular", }) => {
    var _a;
    const pathname = (0, navigation_1.usePathname)();
    const _publisherId = (_a = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID) !== null && _a !== void 0 ? _a : publisherId;
    if (!(0, utils_1.isPublisherId)(_publisherId) || !(0, utils_1.isSlotId)(slotId)) {
        console.error("❌ [next-google-adsense] Invalid publisherId or slotId found for the unit.");
        return null;
    }
    const clientId = `ca-${_publisherId}`;
    let Ad;
    switch (layout) {
        case "display":
            Ad = react_1.default.createElement(AdLayout_1.Display, { dataAdClient: clientId, dataAdSlot: slotId });
            break;
        case "in-article":
            Ad = react_1.default.createElement(AdLayout_1.InArticle, { dataAdClient: clientId, dataAdSlot: slotId });
            break;
        case "custom":
            if (!customLayout) {
                console.error("❌ [next-google-adsense] Custom layout is not provided for the unit.");
                return null;
            }
            Ad = customLayout;
            break;
        default:
            Ad = react_1.default.createElement(AdLayout_1.Display, { dataAdClient: clientId, dataAdSlot: slotId });
            break;
    }
    if (!pathname) {
        return null;
    }
    return (react_1.default.createElement("div", { key: pathname.replace(/\//g, "-") +
            "-" +
            slotId +
            "-" +
            comment.replace(" ", "-") },
        Ad,
        react_1.default.createElement(script_1.default, { id: "next-google-adsense", strategy: "afterInteractive" },
            "(window.adsbygoogle = window.adsbygoogle || []).push({}",
            ");")));
};
exports.AdUnit = AdUnit;
