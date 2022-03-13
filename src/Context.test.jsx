import React from "react";
import  {handleUnsubmit}  from "./Profile";
import { LogProvider , Context } from "./Context";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe ("Context" , () => {
    describe("#logIn" , () =>{
        test("switches 'isLoggedIn' to false", ()=>{
            let isLoggedIn;
            let logIn;

            render(
                <LogProvider>
                    <Context.Consumer>
                        {(value) =>{
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            return null;
                        }}
                    </Context.Consumer>
                </LogProvider>
            )

            expect(isLoggedIn).toBe(false)
            act(()=>{
                logIn("mail@mail.com", "123123");
            })
            expect(isLoggedIn).toBe(true)
        })
    })
//     describe("#logOut" , ()=>{
//         test("switches 'isLoggedIn' to false", ()=>{
//             let isLoggedIn;
//             let logOut;

//             render (
//                 <LogProvider>
//                     <Context.Consumer>
//                         {(value) =>{
//                             isLoggedIn =value.isLoggedIn;
//                             logOut = value.logOut;
//                             return null;

//                         }}
//                     </Context.Consumer>
//                 </LogProvider>
//             )
//             expect(isLoggedIn).toBe(true)
//             act(()=>{
//                 logOut()
//             })
//             expect(isLoggedIn).toBe(false)
//         })
//     })
    })