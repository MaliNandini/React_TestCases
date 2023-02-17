import {useState} from 'react';
import {  UseCounterProps } from './UseConter.types';

export const UseCounter = ({initialCount = 0}: UseCounterProps = {}) =>{
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);
    const decriment = () => setCount(count - 1);
    return {count, increment, decriment };
}