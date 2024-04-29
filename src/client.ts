import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "./generated/greeter_grpc_pb";
import {
  GreetManyTimesRequest,
  Greeting,
  HelloRequest,
} from "./generated/greeter_pb";
import { CalculatorClient } from "./generated/calculator_grpc_pb";
import { PrimeNumberCompositionRequest } from "./generated/calculator_pb";

const client = new CalculatorClient(
  "localhost:8999",
  grpc.credentials.createInsecure()
);

function main() {
  // const request = new HelloRequest();
  // request.setName("World");

  const request = new PrimeNumberCompositionRequest();
  request.setPrimeFactor(120);
  // let greeting = new Greeting();
  // greeting.setFirstName("Bekeeee");
  // greeting.setLastName("!!!!");

  // request.setGreeting(greeting);

  let call = client.primeNumberComposition(request);
  call.on("data", response => {
    console.log("result:", response.getResult());
  });
  call.on("end", () => {
    console.log("Server has finished sending");
  });
  call.on("error", error => {
    console.error("Error:", error);
  });
  call.on("status", status => {
    console.log("Status:", status);
  });
}

main();
