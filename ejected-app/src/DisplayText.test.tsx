import React from "react"
import {render, fireEvent, cleanup, waitFor} from "@testing-library/react"
import DisplayText from "./DisplayText"
import "@testing-library/jest-dom/extend-expect"
import { getValue } from "@testing-library/user-event/dist/utils"

describe("test component DisplayText", ()=>{
    const userFullName = "Jack Tester";
    const getUserFullnameMock = (
        username: string): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
            const promise = new Promise<string>((res, rej) => {
                res(userFullName)
            });
            const getUserFullname = jest.fn(
                async (username: string): Promise<string> =>{
                    return promise;
                }
            )
            return [promise, getUserFullname]
        }
       
    it("no any issue",()=>{
        const username = "testuser"
        const [promise, getUserFullname] = getUserFullnameMock(username)
        const{baseElement} = render(<DisplayText getUserFullname={getUserFullname}/>)
        //console.log(baseElement.innerHTML)
        expect(baseElement).toBeInTheDocument()
    })
     
    it("recived text from field", ()=>{
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username)
        const {getByTestId} = render(<DisplayText getUserFullname={getUserFullname} />)
        const input = getByTestId("user-in");
        fireEvent.change(input, {target: {value:username} })
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(username)
    })
    
    it("displayed welcome text", async ()=>{
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username)

        const msg = `hello in react test, ${userFullName}!`;
        const {getByTestId} = render(<DisplayText getUserFullname={getUserFullname}  />)
        const input = getByTestId("user-in");
        const label = getByTestId("final-msg");
        fireEvent.change(input, {target: {value:username} })
        const btn = getByTestId("input-submit")
        fireEvent.click(btn)
        
        expect(label).toMatchSnapshot();
        await waitFor(() => promise);
        expect(label.innerHTML).toBe(msg)
    })
    /*
    it("jest zgodny z migawka", async() => {
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username)

        const msg = `hello in react test, ${userFullName}!`;
        const {getByTestId} = render(<DisplayText getUserFullname={getUserFullname}  />)
        const input = getByTestId("user-in");
        const label = getByTestId("final-msg");
        fireEvent.change(input, {target: {value:username} })
        const btn = getByTestId("input-submit")
        fireEvent.click(btn)
        
        expect(label).toMatchSnapshot();
        await waitFor(() => promise);
        expect(label.innerHTML).toBe(msg)
    })
    */
    
})

