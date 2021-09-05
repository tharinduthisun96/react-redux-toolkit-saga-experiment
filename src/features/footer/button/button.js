import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { change_name, get_user } from './buttonSlice';



export function Button(){
    const dispatch = useDispatch();
    
    return(
        <div>
            <button onClick={() => dispatch(change_name())}>Click to change name</button>
            <button onClick={() => dispatch(get_user({lastName: ''}))}>Click to get data</button>
        </div>
    );
}