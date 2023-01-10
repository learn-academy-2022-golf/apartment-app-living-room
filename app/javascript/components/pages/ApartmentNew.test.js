import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ApartmentNew from "./ApartmentNew"

describe("<ApartmentNew />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <ApartmentNew />
            </BrowserRouter>
        )
    })
    it("renders the ApartmentNew page without errors", () => {
        const element = screen.getByText("Create a new apartment")
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Create a new apartment")
    })
    it("has a form to input street, city, state, manager", () => {
        const formName = screen.getByText("Street")
        expect(formName.getAttribute("For")).toEqual("street")

        const formAge = screen.getByText("City")
        expect(formAge.getAttribute("For")).toEqual("city")
    
        const formEnjoys = screen.getByText("State")
        expect(formEnjoys.getAttribute("For")).toEqual("state")
    
        const formImage = screen.getByText("Manager")
        expect(formImage.getAttribute("For")).toEqual("manager")
    })
})