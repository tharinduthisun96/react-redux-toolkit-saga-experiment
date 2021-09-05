import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    name: 'Login',
    msg: 'temp',
    postList: []
  };

export const counterSlice = createSlice({
    name: 'name_change_button',
    initialState,
    reducers: {
      change_name: (state, action) => {
        state.name = "Tharindu Akalanka";
      },
      get_user: (state, action) =>{
        const {lastName} = action.payload;
        //state.msg = action.payload.lastName;
       console.log(lastName);
      },
      set_user: (state, action) =>{
        const {lastName} = action.payload;
        state.msg = lastName;
        console.log(lastName);
      }
    },

  });
  
  export const { change_name, get_user, set_user } = counterSlice.actions;

  export const selectName = (state) => state.name_change_button.name;

  export const selectMsg = (state) => state.name_change_button.msg;

  export default counterSlice.reducer;