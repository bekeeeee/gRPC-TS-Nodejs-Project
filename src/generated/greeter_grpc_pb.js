// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greeter_pb = require('./greeter_pb.js');

function serialize_greeter_GreetEveryOneRequest(arg) {
  if (!(arg instanceof greeter_pb.GreetEveryOneRequest)) {
    throw new Error('Expected argument of type greeter.GreetEveryOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_GreetEveryOneRequest(buffer_arg) {
  return greeter_pb.GreetEveryOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_GreetEveryOneResponse(arg) {
  if (!(arg instanceof greeter_pb.GreetEveryOneResponse)) {
    throw new Error('Expected argument of type greeter.GreetEveryOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_GreetEveryOneResponse(buffer_arg) {
  return greeter_pb.GreetEveryOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_GreetManyTimesRequest(arg) {
  if (!(arg instanceof greeter_pb.GreetManyTimesRequest)) {
    throw new Error('Expected argument of type greeter.GreetManyTimesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_GreetManyTimesRequest(buffer_arg) {
  return greeter_pb.GreetManyTimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_GreetManyTimesResponse(arg) {
  if (!(arg instanceof greeter_pb.GreetManyTimesResponse)) {
    throw new Error('Expected argument of type greeter.GreetManyTimesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_GreetManyTimesResponse(buffer_arg) {
  return greeter_pb.GreetManyTimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloReply(arg) {
  if (!(arg instanceof greeter_pb.HelloReply)) {
    throw new Error('Expected argument of type greeter.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloReply(buffer_arg) {
  return greeter_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloRequest(arg) {
  if (!(arg instanceof greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeter.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloRequest(buffer_arg) {
  return greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_LongGreetRequest(arg) {
  if (!(arg instanceof greeter_pb.LongGreetRequest)) {
    throw new Error('Expected argument of type greeter.LongGreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_LongGreetRequest(buffer_arg) {
  return greeter_pb.LongGreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_LongGreetResponse(arg) {
  if (!(arg instanceof greeter_pb.LongGreetResponse)) {
    throw new Error('Expected argument of type greeter.LongGreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_LongGreetResponse(buffer_arg) {
  return greeter_pb.LongGreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/greeter.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.HelloRequest,
    responseType: greeter_pb.HelloReply,
    requestSerialize: serialize_greeter_HelloRequest,
    requestDeserialize: deserialize_greeter_HelloRequest,
    responseSerialize: serialize_greeter_HelloReply,
    responseDeserialize: deserialize_greeter_HelloReply,
  },
  // Server streaming API
greetManyTimes: {
    path: '/greeter.Greeter/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: greeter_pb.GreetManyTimesRequest,
    responseType: greeter_pb.GreetManyTimesResponse,
    requestSerialize: serialize_greeter_GreetManyTimesRequest,
    requestDeserialize: deserialize_greeter_GreetManyTimesRequest,
    responseSerialize: serialize_greeter_GreetManyTimesResponse,
    responseDeserialize: deserialize_greeter_GreetManyTimesResponse,
  },
  // Client streaming API
longGreet: {
    path: '/greeter.Greeter/LongGreet',
    requestStream: true,
    responseStream: false,
    requestType: greeter_pb.LongGreetRequest,
    responseType: greeter_pb.LongGreetResponse,
    requestSerialize: serialize_greeter_LongGreetRequest,
    requestDeserialize: deserialize_greeter_LongGreetRequest,
    responseSerialize: serialize_greeter_LongGreetResponse,
    responseDeserialize: deserialize_greeter_LongGreetResponse,
  },
  // BiDi streaming
greetEveryOne: {
    path: '/greeter.Greeter/GreetEveryOne',
    requestStream: true,
    responseStream: true,
    requestType: greeter_pb.GreetEveryOneRequest,
    responseType: greeter_pb.GreetEveryOneResponse,
    requestSerialize: serialize_greeter_GreetEveryOneRequest,
    requestDeserialize: deserialize_greeter_GreetEveryOneRequest,
    responseSerialize: serialize_greeter_GreetEveryOneResponse,
    responseDeserialize: deserialize_greeter_GreetEveryOneResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
