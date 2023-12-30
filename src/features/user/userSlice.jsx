import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Rudransh Khandelwal',
  role: 'employee'
};

export const userSlice = createSlice({
  name: 'user',
  initialState, 
  reducers: {}
});

export default userSlice.reducer;