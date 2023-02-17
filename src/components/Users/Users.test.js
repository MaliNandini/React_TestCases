import {render,screen } from '@testing-library/react';
import { rest } from 'msw';
import { Users } from './Users';
import {server} from '../../Mocks/Server';

describe('Users Component',()=>{
    test('render correctly',()=>{
        render(<Users/>);
        const textElement = screen.getByText('Users');
        expect(textElement).toBeInTheDocument();
    })

    test('renders a list of users',async ()=>{
        render(<Users/>)
        const users = await screen.findAllByRole('listitem');
        expect(users).toHaveLength(10);
    })

    // test('renders error', async ()=>{
    //     server.use(
    //         rest.get(
    //             'https://jsonplaceholder.typicode.com/users',
    //             (req,res,ctx) =>{
    //                 return res(ctx.status(500))
    //             }
    //         )
    //     )
    //     render(<Users/>)
    //     const error = await screen.findByText('Error fetching users')
    //     expect(error).toBeInTheDocument();
    // })
})