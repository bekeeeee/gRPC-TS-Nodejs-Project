import * as grpc from "@grpc/grpc-js";
import { GreeterService, IGreeterServer } from "./generated/greeter_grpc_pb";
import {
  GreetEveryOneRequest,
  GreetEveryOneResponse,
  GreetManyTimesRequest,
  GreetManyTimesResponse,
  HelloReply,
  HelloRequest,
  LongGreetRequest,
  LongGreetResponse,
} from "./generated/greeter_pb";
import {
  CalculatorService,
  ICalculatorServer,
} from "./generated/calculator_grpc_pb";
import {
  PrimeNumberCompositionRequest,
  PrimeNumberDecompositionResponse,
  SumRequest,
  SumResponse,
} from "./generated/calculator_pb";
import { request } from "http";

class CalculatorServer implements ICalculatorServer {
  [method: string]: grpc.UntypedHandleCall;
  primeNumberComposition(
    call: grpc.ServerWritableStream<
      PrimeNumberCompositionRequest,
      PrimeNumberDecompositionResponse
    >
  ) {
    let number = call.request.getPrimeFactor();
    let k = 2;
    while (number > 1) {
      if (number % k === 0) {
        let primeNumberDecompositionResponse =
          new PrimeNumberDecompositionResponse();
        primeNumberDecompositionResponse.setResult(k);
        number = number / k;
        call.write(primeNumberDecompositionResponse);
      } else {
        k = k + 1;
      }
    }
    call.end();
  }
  // primeNumberComposition: grpc.handleServerStreamingCall<PrimeNumberCompositionRequest, PrimeNumberDecompositionResponse>;

  sum(
    call: grpc.ServerUnaryCall<SumRequest, SumResponse>,
    callback: grpc.sendUnaryData<SumResponse>
  ) {
    const reply = new SumResponse();
    reply.setResult(call.request.getA() + call.request.getB());
    return callback(null, reply);
  }
}

class GreeterServer implements IGreeterServer {
  [method: string]: grpc.UntypedHandleCall;
  async greetEveryOne(
    call: grpc.ServerDuplexStream<LongGreetRequest, LongGreetResponse>
  ) {
    call.on("data", (request: GreetEveryOneRequest) => {
      let fullName =
        request.getGreeting().getFirstName() +
        " " +
        request.getGreeting().getLastName();
      console.log("Hello " + fullName);
      let response = new GreetEveryOneResponse();
      response.setResult("Hello " + fullName);
      call.write(response);
    });
    call.on("error", error => {
      console.log("Error", error);
    });
    call.on("end", () => {
      call.end();
    });
    for (let i = 0; i < 10; i++) {
      let response = new GreetEveryOneResponse();
      response.setResult("Hello " + i);
      call.write(response);
      await sleep(1000);
    }
    call.end();
  }
  // greetEveryOne: grpc.handleBidiStreamingCall<GreetEveryOneRequest, GreetEveryOneResponse>;
  longGreet(
    call: grpc.ServerDuplexStream<LongGreetRequest, LongGreetResponse>
  ) {
    call.on("data", (request: LongGreetRequest) => {
      let fullName =
        request.getGreeting().getFirstName() +
        " " +
        request.getGreeting().getLastName();
      console.log("Hello " + fullName);
    });

    call.on("end", () => {
      let response = new LongGreetResponse();
      response.setResult("Long Greet Client Streaming...");
      call.write(response);
      call.end();
    });

    call.on("error", error => {
      console.error(error);
    });
  }

  // longGreet: grpc.handleClientStreamingCall<LongGreetRequest, LongGreetResponse>;
  greetManyTimes(
    call: grpc.ServerWritableStream<
      GreetManyTimesRequest,
      GreetManyTimesResponse
    >
  ) {
    let firstName = call.request.getGreeting().getFirstName();
    let lastName = call.request.getGreeting().getLastName();

    let greetManyTimesResponse = new GreetManyTimesResponse();
    let count = 0,
      intervalId = setInterval(() => {
        greetManyTimesResponse.setResult(firstName + " " + lastName);
        call.write(greetManyTimesResponse);
        if (++count > 9) {
          clearInterval(intervalId);
          call.end();
        }
      }, 1000);
  }

  sayHello(
    call: grpc.ServerUnaryCall<HelloRequest, HelloReply>,
    callback: grpc.sendUnaryData<HelloReply>
  ): void {
    const reply = new HelloReply();
    reply.setMessage(`Hello, ${call.request.getName()}!`);
    callback(null, reply);
  }
}

async function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(() => resolve(""), interval);
  });
}

function getServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(GreeterService, new GreeterServer());
  // server.addService(CalculatorService, new CalculatorServer());

  return server;
}

const server = getServer();
server.bindAsync(
  "0.0.0.0:8999",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error("Error binding server:", error);
      return;
    }
    // server.start();
    console.log(`Server running at http://127.0.0.1:${port}`);
  }
);
