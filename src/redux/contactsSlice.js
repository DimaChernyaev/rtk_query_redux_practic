import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operation';
import * as handleFunctionFetch from './contactsFunction';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: {
      isAllLoading: false,
      isDeleteLoading: false,
    },
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handleFunctionFetch.handlePendingAll)
      .addCase(
        fetchContacts.fulfilled,
        handleFunctionFetch.handleFulfilledAllContact
      )
      .addCase(fetchContacts.rejected, handleFunctionFetch.handleRejectedAll)
      .addCase(addContacts.pending, handleFunctionFetch.handlePendingAll)
      .addCase(
        addContacts.fulfilled,
        handleFunctionFetch.handleFulfilledAddContact
      )
      .addCase(addContacts.rejected, handleFunctionFetch.handleRejectedAll)
      .addCase(deleteContact.pending, handleFunctionFetch.handlePendingDelete)
      .addCase(
        deleteContact.fulfilled,
        handleFunctionFetch.handleFulfilledDeleteContact
      )
      .addCase(
        deleteContact.rejected,
        handleFunctionFetch.handleRejectedDelete
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
