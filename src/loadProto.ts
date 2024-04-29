import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";

export function loadProto(path: string) {
  const packageDefinition = protoLoader.loadSync(path, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  return protoDescriptor;
}
