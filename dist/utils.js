"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSlotId = exports.isPublisherId = void 0;
const PUBLISHER_ID_REGEX = /^pub-\d{16}$/;
const SLOT_ID_REGEX = /^\d{10}$/;
function isPublisherId(id) {
    if (typeof id !== "string") {
        return false;
    }
    return PUBLISHER_ID_REGEX.test(id);
}
exports.isPublisherId = isPublisherId;
function isSlotId(id) {
    if (typeof id !== "string") {
        return false;
    }
    return SLOT_ID_REGEX.test(id);
}
exports.isSlotId = isSlotId;
