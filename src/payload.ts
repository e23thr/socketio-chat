import { EVENT_JOIN, EVENT_MESSAGE, EVENT_UPLOAD, EVENT_AUTH_TOKEN, EVENT_ADVERTISE } from "./types";

export type BasePayloadType = {
  type: typeof EVENT_JOIN | typeof EVENT_MESSAGE | typeof EVENT_UPLOAD;
};

export type JoinPayloadType = BasePayloadType & {
  type: typeof EVENT_JOIN;
  room: string;
};

export type MessagePayloadType = BasePayloadType & {
  type: typeof EVENT_MESSAGE;
  room: string;
  message: string;
};

export type UploadPayloadType = BasePayloadType & {
  type: typeof EVENT_UPLOAD;
  room: string;
  file: File;
};

export type AuthTokenPayloadType = BasePayloadType & {
  type: typeof EVENT_AUTH_TOKEN;
  token: string;
};

export type AdvertisePayloadType = BasePayloadType & {
  type: typeof EVENT_ADVERTISE;
  json: string;
};

export type PayloadType = JoinPayloadType | MessagePayloadType | UploadPayloadType | AuthTokenPayloadType;
