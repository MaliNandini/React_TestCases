import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter Component',()=>{
    test('render correctly',()=>{
        render(<Counter/>);
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toBeInTheDocument();

        const IncrementButton = screen.getByRole('button',{
            name: 'Increment'
        })
        expect(IncrementButton).toBeInTheDocument();
    })


    test('renders count of 0',()=>{
        render(<Counter/>);
        const counterElement = screen.getByRole('heading')
        expect(counterElement).toHaveTextContent("0");
    })

    test('renders a count of 1 after clicking the increment button', async ()=>{
        // user.setup()
        render(<Counter/>);
        const IncrementButton = screen.getByRole('button',{
            name: 'Increment'
        });
        await user.click(IncrementButton);
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1');
    })

    test('rendres a count of 10 after clicking the set button', async () => {
        // user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
      })
})