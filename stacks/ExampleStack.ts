import { Api, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
    // Create the HTTP API
    const api = new Api(stack, "Api", {
      routes: {
        "GET /test/{test}": "packages/functions/test.handler",
      },
    });
  
    // Show the API endpoint in the output
    stack.addOutputs({
      ApiEndpoint: api.url,
      TestEndpoint: `${api.url}/test/{test}`
    });
}
