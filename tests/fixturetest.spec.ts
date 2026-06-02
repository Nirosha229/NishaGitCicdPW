import {test, request} from "@playwright/test";

test("api login test", async ({})=>{

 const apicontex= await  request.newContext()
 const res= await apicontex.post("https://reqres.in/api/login",
        {
            data: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"}})
const resjson = await res.json()
console.log(resjson)


})



