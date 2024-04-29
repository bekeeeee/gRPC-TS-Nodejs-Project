// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greeter_pb = require('./greeter_pb.js');

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
  // streaming API
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
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
