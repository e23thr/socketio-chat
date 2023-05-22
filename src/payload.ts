import { EVENT_JOIN, EVENT_MESSAGE, EVENT_UPLOAD } from "./types";

export type BasePayloadType = {
  type: typeof EVENT_JOIN | typeof EVENT_MESSAGE | typeof EVENT_UPLOAD;
  room: string;
};

export type JoinPayloadType = BasePayloadType & {
  type: typeof EVENT_JOIN;
};

export type MessagePayloadType = BasePayloadType & {
  type: typeof EVENT_MESSAGE;
  message: string;
};

export type UploadPayloadType = BasePayloadType & {
  type: typeof EVENT_UPLOAD;
  file: File;
};
