import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { userid:null,loggedin:false,role:null};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    log_in: (state, action) => {
      state.value = action.payload;
    },

    log_out: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { log_in, log_out } = userSlice.actions;

export default userSlice.reducer;