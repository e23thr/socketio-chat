import {
  MessagePayloadType,
  UploadPayloadType,
  JoinPayloadType,
  AuthTokenPayloadType,
  AdvertisePayloadType,
} from "./payload";
import { EVENT_ADVERTISE, EVENT_AUTH_TOKEN, EVENT_JOIN, EVENT_MESSAGE, EVENT_UPLOAD } from "./types";

export function isJoinPayload(payload: any): payload is JoinPayloadType {
  return payload.type === EVENT_JOIN && typeof payload.room === "string" && Boolean(payload.room);
}

export function isMessagePayload(payload: any): payload is MessagePayloadType {
  return (
    payload.type === EVENT_MESSAGE &&
    typeof payload.message === "string" &&
    Boolean(payload.message) &&
    typeof payload.room === "string" &&
    Boolean(payload.room)
  );
}

export function isUploadPayload(payload: any): payload is UploadPayloadType {
  return (
    payload.type === EVENT_UPLOAD &&
    payload.file instanceof File &&
    typeof payload.room === "string" &&
    Boolean(payload.room)
  );
}

export function isAuthTokenPayload(payload: any): payload is AuthTokenPayloadType {
  return payload.type === EVENT_AUTH_TOKEN && typeof payload.token === "string";
}

export function isAdvertisePayload(payload: any): payload is AdvertisePayloadType {
  return payload.type === EVENT_ADVERTISE && typeof payload.json === "string" && Boolean(payload.json);
}
