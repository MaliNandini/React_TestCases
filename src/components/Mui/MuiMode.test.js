import {render,screen} from '../../text-utils';
import { AppProviders } from '../../Providers/AppProviders';
import { MuiMode } from './MuiMode';

describe('MuiMode',()=>{
test('MuiMode renders correctly',()=>{
    render(<MuiMode/>);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent("dark mode");
})
})