# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixturetest.spec.ts >> api login test
- Location: tests\fixturetest.spec.ts:3:5

# Error details

```
SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON
```

# Test source

```ts
  1  | import {test, request} from "@playwright/test";
  2  | 
  3  | test("api login test", async ({})=>{
  4  | 
  5  |  const apicontex= await  request.newContext()
  6  |  const res= await apicontex.post("https://rahulshettyacademy.com/angularpractice/",{data:{username :"rahulshettyacademy", pwd:"Learning@830$3mK2"}})
> 7  | const resjson = await res.json()
     |                 ^ SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON
  8  | console.log(resjson)
  9  | 
  10 | 
  11 | })
```