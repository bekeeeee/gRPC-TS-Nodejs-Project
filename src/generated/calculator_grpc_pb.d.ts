// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sum: ICalculatorService_ISum;
    primeNumberComposition: ICalculatorService_IPrimeNumberComposition;
}

interface ICalculatorService_ISum extends grpc.MethodDefinition<calculator_pb.SumRequest, calculator_pb.SumResponse> {
    path: "/calculator.Calculator/Sum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.SumRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.SumRequest>;
    responseSerialize: grpc.serialize<calculator_pb.SumResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.SumResponse>;
}
interface ICalculatorService_IPrimeNumberComposition extends grpc.MethodDefinition<calculator_pb.PrimeNumberCompositionRequest, calculator_pb.PrimeNumberDecompositionResponse> {
    path: "/calculator.Calculator/PrimeNumberComposition";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<calculator_pb.PrimeNumberCompositionRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.PrimeNumberCompositionRequest>;
    responseSerialize: grpc.serialize<calculator_pb.PrimeNumberDecompositionResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.PrimeNumberDecompositionResponse>;
}

export const CalculatorService: ICalculatorService;

export interface ICalculatorServer extends grpc.UntypedServiceImplementation {
    sum: grpc.handleUnaryCall<calculator_pb.SumRequest, calculator_pb.SumResponse>;
    primeNumberComposition: grpc.handleServerStreamingCall<calculator_pb.PrimeNumberCompositionRequest, calculator_pb.PrimeNumberDecompositionResponse>;
}

export interface ICalculatorClient {
    sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    primeNumberComposition(request: calculator_pb.PrimeNumberCompositionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimeNumberDecompositionResponse>;
    primeNumberComposition(request: calculator_pb.PrimeNumberCompositionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimeNumberDecompositionResponse>;
}

export class CalculatorClient extends grpc.Client implements ICalculatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public primeNumberComposition(request: calculator_pb.PrimeNumberCompositionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimeNumberDecompositionResponse>;
    public primeNumberComposition(request: calculator_pb.PrimeNumberCompositionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimeNumberDecompositionResponse>;
}
