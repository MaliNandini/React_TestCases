import {render , screen} from '@testing-library/react';
import { Greet } from './Greet';

describe("Greet Component",()=>{
    test("Greet renders correctly",()=>{
        render(<Greet/>);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })
        
        
    test("Greet render with a name",()=>{
        render(<Greet name="nandini"/>);
        const textElement = screen.getByText("Hello nandini");
        expect(textElement).toBeInTheDocument();
    })
})
