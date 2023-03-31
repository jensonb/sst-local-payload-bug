import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "sst-local-payload-bug",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.setDefaultRemovalPolicy("destroy");
    app.stack(ExampleStack);
  },
} satisfies SSTConfig;
