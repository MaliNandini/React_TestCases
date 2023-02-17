import { render,screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application Component",() =>{
test('Application render correctly', () => { 
    render(<Application/>);

    const pageHeading = screen.getByRole("heading",{
        // name:'Job application form'
        level :1,
    })
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading",{
        // name:'Section 1'
        level :2,
    })
    expect(sectionHeading).toBeTruthy();


    const inputValue = screen.getByDisplayValue("nandini");
    expect(inputValue).toBeInTheDocument();


    const nameElement = screen.getByRole("textbox",{
        name :'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox",{
        name : 'Bio',
    });
    expect(bioElement).toBeInTheDocument();


    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const imgAltElement = screen.getByAltText("a person with a laptop");
    expect(imgAltElement).toBeInTheDocument();

    const titleElement = screen.getByTitle("close");
    expect(titleElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
 })


})