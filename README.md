Reproduction for https://github.com/serverless-stack/sst/issues/2723

<!--- Provide a general summary of the issue in the Title above -->
We have a function in our SST app that crashes lambda local `sst dev` mode. It functions properly when it has been deployed to aws with `sst deploy`. Minimal test reproduction: https://github.com/jensonb/sst-local-payload-bug

The bug seems related to payload size. In my minimal reproduction, the failure seems to start once the response payload reaches ~80kB.

When the function blows up, `sst dev` becomes unresponsive. The request receives a `{"message":"Internal Server Error"}` error response after a long hang, and further API requests (including to other routes) receive the error about sst dev not running. Killing the process and restarting is the only solution I have found.

## Expected Behavior
<!--- Tell us what should happen -->
The function should behave the same whether running locally after `sst dev` or on aws after `sst deploy`. `sst dev` should be able to respond with payloads that are not larger than the 6MB lambda payload limit.

## Current Behavior
<!--- Tell us what happens instead of the expected behavior -->
When the function has been deployed with `sst dev`, the larger responses are handled properly. When the function is running in `sst dev` mode, the function will hang then return a `{"message":"Internal Server Error"}` response, after which the `sst dev` session becomes completely unresponsive to further requests. Small payloads behave consistently between the two modes, the issue is only once the payload surpasses around 80kB.

## Steps to Reproduce
<!--- Provide a link to a live example, or an unambiguous set of steps to -->
<!--- reproduce this bug. Include code to reproduce, if relevant -->
1. Clone the minimal reproduction from https://github.com/jensonb/sst-local-payload-bug
2. (optional) Select nodejs version: `nvm use`
3. Install dependencies: `yarn`
4. Start local lambda mode: `yarn sst dev`
5. Visit `{API_GATEWAY_URL}/test/1` in your browser. Repeat for tests 2-5. Tests 4 and 5 should crash the `sst dev` session.
6. Deploy to aws: `yarn sst deploy`
7. Repeat step 5, all test cases work this time!
8. Cleanup: `yarn 

## Context (Environment)
<!--- How has this issue affected you? What are you trying to accomplish? -->
<!--- Providing context helps us come up with a solution that is most useful in the real world -->
```
node: v18.12.1
SST: v2.3.5
CDK: v2.62.2
```
This bug makes `sst dev` keep crashing when using a certain part of our app, forcing us to resort to constantly re-deploying for lambda code changes.