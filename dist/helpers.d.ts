import { MessagePayloadType, UploadPayloadType, JoinPayloadType, AuthTokenPayloadType, AdvertisePayloadType } from "./payload";
export declare function isJoinPayload(payload: any): payload is JoinPayloadType;
export declare function isMessagePayload(payload: any): payload is MessagePayloadType;
export declare function isUploadPayload(payload: any): payload is UploadPayloadType;
export declare function isAuthTokenPayload(payload: any): payload is AuthTokenPayloadType;
export declare function isAdvertisePayload(payload: any): payload is AdvertisePayloadType;
