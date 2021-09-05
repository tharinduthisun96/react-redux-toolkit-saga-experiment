import { selectName } from '../../footer/button/buttonSlice';
import { selectMsg } from '../../footer/button/buttonSlice';

import { useSelector } from 'react-redux';

export function Name(){
    const name = useSelector(selectName);
    const msg = useSelector(selectMsg);
    return(
        <div>
           <h1>{name}</h1> <br/>
           <h1>{msg}</h1>
        </div>
    );
}