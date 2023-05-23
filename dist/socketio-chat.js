const n = "auth_token", t = "join", e = "message", s = "upload", i = "advertise";
function E(o) {
  return o.type === t && typeof o.room == "string" && !!o.room;
}
function c(o) {
  return o.type === e && typeof o.message == "string" && !!o.message && typeof o.room == "string" && !!o.room;
}
function f(o) {
  return o.type === s && o.file instanceof File && typeof o.room == "string" && !!o.room;
}
function u(o) {
  return o.type === n && typeof o.token == "string";
}
function g(o) {
  return o.type === i && typeof o.json == "string" && !!o.json;
}
class r {
  constructor() {
    console.log("Chat");
  }
}
window && window.addEventListener("load", () => {
  window.ChatClient = new r();
});
export {
  i as EVENT_ADVERTISE,
  n as EVENT_AUTH_TOKEN,
  t as EVENT_JOIN,
  e as EVENT_MESSAGE,
  s as EVENT_UPLOAD,
  g as isAdvertisePayload,
  u as isAuthTokenPayload,
  E as isJoinPayload,
  c as isMessagePayload,
  f as isUploadPayload
};
