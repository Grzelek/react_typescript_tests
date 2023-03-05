import React from "react"
import {render, fireEvent, getByTestId} from "@testing-library/react"
import DisplayText from "./DisplayText"
import "@testing-library/jest-dom/extend-expect"
import { getValue } from "@testing-library/user-event/dist/utils"

describe("test component DisplayText", ()=>{
    it("no any issue",()=>{
        const{baseElement} = render(<DisplayText />)
        console.log(baseElement.innerHTML)
        expect(baseElement).toBeInTheDocument()
    })
    it("recived text from field", ()=>{
        const testuser = "testuser";
        const {getByTestId} = render(<DisplayText />)
        const input = getByTestId("user-in");
        fireEvent.change(input, {target: {value:testuser} })
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(testuser)
    })
    it("displayed welcome text", ()=>{
        const testuser = "testuser";
        const msg = `hello in react test, ${testuser}!`;
        const {getByTestId} = render(<DisplayText />)
        const input = getByTestId("user-in");
        const label = getByTestId("final-msg");
        fireEvent.change(input, {target: {value:testuser} })
        const btn = getByTestId("input-submit")
        fireEvent.click(btn)
       
        expect(label).toBeInTheDocument();
        expect(label.innerHTML).toBe(msg)
    })
    it("jest zgodny z migawka", () => {
        const {baseElement} = render(<DisplayText />)
        expect(baseElement).toMatchSnapshot();
    })
})