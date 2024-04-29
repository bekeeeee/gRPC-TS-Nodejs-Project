// package: greeter
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as greeter_pb from "./greeter_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    greetManyTimes: IGreeterService_IGreetManyTimes;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloReply> {
    path: "/greeter.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greeter_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<greeter_pb.HelloReply>;
}
interface IGreeterService_IGreetManyTimes extends grpc.MethodDefinition<greeter_pb.GreetManyTimesRequest, greeter_pb.GreetManyTimesResponse> {
    path: "/greeter.Greeter/GreetManyTimes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<greeter_pb.GreetManyTimesRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.GreetManyTimesRequest>;
    responseSerialize: grpc.serialize<greeter_pb.GreetManyTimesResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.GreetManyTimesResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<greeter_pb.HelloRequest, greeter_pb.HelloReply>;
    greetManyTimes: grpc.handleServerStreamingCall<greeter_pb.GreetManyTimesRequest, greeter_pb.GreetManyTimesResponse>;
}

export interface IGreeterClient {
    sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    greetManyTimes(request: greeter_pb.GreetManyTimesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
    greetManyTimes(request: greeter_pb.GreetManyTimesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: greeter_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public greetManyTimes(request: greeter_pb.GreetManyTimesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
    public greetManyTimes(request: greeter_pb.GreetManyTimesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
}