"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe("utils", () => {
    describe("isPublisherId", () => {
        it("should return true for valid publisher IDs", () => {
            expect((0, utils_1.isPublisherId)("pub-1234567890123456")).toBe(true);
            expect((0, utils_1.isPublisherId)("pub-xxxxxxxxx")).toBe(false);
            expect((0, utils_1.isPublisherId)(undefined)).toBe(false);
        });
    });
    describe("isSlotId", () => {
        it("should return true for valid slot IDs", () => {
            expect((0, utils_1.isSlotId)("1234567890")).toBe(true);
            expect((0, utils_1.isSlotId)("xxxxxxxxxx")).toBe(false);
            expect((0, utils_1.isSlotId)(undefined)).toBe(false);
        });
    });
});
