// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GreetEveryOneRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetEveryOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetEveryOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetEveryOneRequest): GreetEveryOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetEveryOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetEveryOneRequest;
    static deserializeBinaryFromReader(message: GreetEveryOneRequest, reader: jspb.BinaryReader): GreetEveryOneRequest;
}

export namespace GreetEveryOneRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetEveryOneResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetEveryOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetEveryOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetEveryOneResponse): GreetEveryOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetEveryOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetEveryOneResponse;
    static deserializeBinaryFromReader(message: GreetEveryOneResponse, reader: jspb.BinaryReader): GreetEveryOneResponse;
}

export namespace GreetEveryOneResponse {
    export type AsObject = {
        result: string,
    }
}

export class LongGreetRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): LongGreetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LongGreetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LongGreetRequest): LongGreetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LongGreetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LongGreetRequest;
    static deserializeBinaryFromReader(message: LongGreetRequest, reader: jspb.BinaryReader): LongGreetRequest;
}

export namespace LongGreetRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class LongGreetResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): LongGreetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LongGreetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LongGreetResponse): LongGreetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LongGreetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LongGreetResponse;
    static deserializeBinaryFromReader(message: LongGreetResponse, reader: jspb.BinaryReader): LongGreetResponse;
}

export namespace LongGreetResponse {
    export type AsObject = {
        result: string,
    }
}

export class GreetManyTimesRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetManyTimesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetManyTimesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetManyTimesRequest): GreetManyTimesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetManyTimesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetManyTimesRequest;
    static deserializeBinaryFromReader(message: GreetManyTimesRequest, reader: jspb.BinaryReader): GreetManyTimesRequest;
}

export namespace GreetManyTimesRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetManyTimesResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetManyTimesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetManyTimesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetManyTimesResponse): GreetManyTimesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetManyTimesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetManyTimesResponse;
    static deserializeBinaryFromReader(message: GreetManyTimesResponse, reader: jspb.BinaryReader): GreetManyTimesResponse;
}

export namespace GreetManyTimesResponse {
    export type AsObject = {
        result: string,
    }
}

export class Greeting extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): Greeting;
    getLastName(): string;
    setLastName(value: string): Greeting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Greeting.AsObject;
    static toObject(includeInstance: boolean, msg: Greeting): Greeting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Greeting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Greeting;
    static deserializeBinaryFromReader(message: Greeting, reader: jspb.BinaryReader): Greeting;
}

export namespace Greeting {
    export type AsObject = {
        firstName: string,
        lastName: string,
    }
}

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}
