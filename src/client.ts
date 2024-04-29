import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "./generated/greeter_grpc_pb";
import {
  GreetManyTimesRequest,
  Greeting,
  HelloRequest,
  LongGreetRequest,
} from "./generated/greeter_pb";
import { CalculatorClient } from "./generated/calculator_grpc_pb";
import { PrimeNumberCompositionRequest } from "./generated/calculator_pb";

const client = new CalculatorClient(
  "localhost:8999",
  grpc.credentials.createInsecure()
);

function callLongGreeting() {
  const client = new GreeterClient(
    "localhost:8999",
    grpc.credentials.createInsecure()
  );

  let call = client.longGreet((err, response) => {
    if (err) {
      console.error("hereeeeeeeeeeeee######",err);
    }
    console.log(response.getResult());
  });

  let count = 0,
    intervalId = setInterval(function () {
      let request = new LongGreetRequest();
      let greet = new Greeting();
      greet.setFirstName("Mohamed");
      greet.setLastName("Ragab");
      request.setGreeting(greet);
      call.write(request);
      if (++count > 3) {
        clearInterval(intervalId);
        call.end();
      }
    }, 1000);
}

function main() {
  // // const request = new HelloRequest();
  // // request.setName("World");

  // const request = new PrimeNumberCompositionRequest();
  // request.setPrimeFactor(120);
  // // let greeting = new Greeting();
  // // greeting.setFirstName("Bekeeee");
  // // greeting.setLastName("!!!!");

  // // request.setGreeting(greeting);

  // let call = client.primeNumberComposition(request);
  // call.on("data", response => {
  //   console.log("result:", response.getResult());
  // });
  // call.on("end", () => {
  //   console.log("Server has finished sending");
  // });
  // call.on("error", error => {
  //   console.error("Error:", error);
  // });
  // call.on("status", status => {
  //   console.log("Status:", status);
  // });

  callLongGreeting();
}

main();
