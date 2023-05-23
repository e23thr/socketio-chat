const n = "auth_token", e = "join", t = "message", s = "upload", i = "advertise";
function f(o) {
  return o.type === e && typeof o.room == "string" && !!o.room;
}
function c(o) {
  return o.type === t && typeof o.message == "string" && !!o.message && typeof o.room == "string" && !!o.room;
}
function E(o) {
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
typeof window < "u" && (console.log("window is defined"), window.addEventListener("load", () => {
  window.ChatClient = new r();
}));
export {
  i as EVENT_ADVERTISE,
  n as EVENT_AUTH_TOKEN,
  e as EVENT_JOIN,
  t as EVENT_MESSAGE,
  s as EVENT_UPLOAD,
  g as isAdvertisePayload,
  u as isAuthTokenPayload,
  f as isJoinPayload,
  c as isMessagePayload,
  E as isUploadPayload
};
