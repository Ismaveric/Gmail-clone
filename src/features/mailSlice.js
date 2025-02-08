import {  createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMailIsOpen: false,
  },
  reducers: {
    selectMail:(state, action) => {
      state.selectedMail = action.payload;
    },
   openSendMail: (state) => {  
   state.sendMailIsOpen = true
    },
    closeSendMail: (state) => {
     state.sendMailIsOpen = false;
    },
  },
  
  })
  

export const { selectMail, openSendMail,  closeSendMail } = mailSlice.actions;

export const selectsendMailIsOpen = (state) => state.mail.sendMailIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;


export default mailSlice.reducer;
