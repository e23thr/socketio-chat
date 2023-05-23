const e = "auth_token", n = "join", t = "message", s = "upload", r = "advertise";
function i(o) {
  return o.type === n && typeof o.room == "string" && !!o.room;
}
function E(o) {
  return o.type === t && typeof o.message == "string" && !!o.message && typeof o.room == "string" && !!o.room;
}
function f(o) {
  return o.type === s && o.file instanceof File && typeof o.room == "string" && !!o.room;
}
function u(o) {
  return o.type === e && typeof o.token == "string";
}
function c(o) {
  return o.type === r && typeof o.json == "string" && !!o.json;
}
export {
  r as EVENT_ADVERTISE,
  e as EVENT_AUTH_TOKEN,
  n as EVENT_JOIN,
  t as EVENT_MESSAGE,
  s as EVENT_UPLOAD,
  c as isAdvertisePayload,
  u as isAuthTokenPayload,
  i as isJoinPayload,
  E as isMessagePayload,
  f as isUploadPayload
};
