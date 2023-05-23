"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdvertisePayload = exports.isAuthTokenPayload = exports.isUploadPayload = exports.isMessagePayload = exports.isJoinPayload = void 0;
const types_1 = require("./types");
function isJoinPayload(payload) {
    return payload.type === types_1.EVENT_JOIN && typeof payload.room === "string" && Boolean(payload.room);
}
exports.isJoinPayload = isJoinPayload;
function isMessagePayload(payload) {
    return (payload.type === types_1.EVENT_MESSAGE &&
        typeof payload.message === "string" &&
        Boolean(payload.message) &&
        typeof payload.room === "string" &&
        Boolean(payload.room));
}
exports.isMessagePayload = isMessagePayload;
function isUploadPayload(payload) {
    return (payload.type === types_1.EVENT_UPLOAD &&
        payload.file instanceof File &&
        typeof payload.room === "string" &&
        Boolean(payload.room));
}
exports.isUploadPayload = isUploadPayload;
function isAuthTokenPayload(payload) {
    return payload.type === types_1.EVENT_AUTH_TOKEN && typeof payload.token === "string";
}
exports.isAuthTokenPayload = isAuthTokenPayload;
function isAdvertisePayload(payload) {
    return payload.type === types_1.EVENT_ADVERTISE && typeof payload.json === "string" && Boolean(payload.json);
}
exports.isAdvertisePayload = isAdvertisePayload;
//# sourceMappingURL=helpers.js.map