import * as grpc from "@grpc/grpc-js";

// Message interfaces
export interface IHelloRequest {
  name: string;
}

export interface IHelloReply {
  message: string;
}

// Service interface
export interface IGreeterService {
  sayHello: grpc.handleUnaryCall<IHelloRequest, IHelloReply>;
}
