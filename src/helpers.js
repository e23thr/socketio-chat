"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthTokenPayload = exports.isUploadPayload = exports.isMessagePayload = exports.isJoinPayload = void 0;
const types_1 = require("./types");
function isJoinPayload(payload) {
    return payload.type === types_1.EVENT_JOIN && typeof payload.room === "string";
}
exports.isJoinPayload = isJoinPayload;
function isMessagePayload(payload) {
    return payload.type === types_1.EVENT_MESSAGE && typeof payload.message === "string";
}
exports.isMessagePayload = isMessagePayload;
function isUploadPayload(payload) {
    return payload.type === types_1.EVENT_UPLOAD && payload.file instanceof File;
}
exports.isUploadPayload = isUploadPayload;
function isAuthTokenPayload(payload) {
    return payload.type === types_1.EVENT_AUTH_TOKEN && typeof payload.token === "string";
}
exports.isAuthTokenPayload = isAuthTokenPayload;
