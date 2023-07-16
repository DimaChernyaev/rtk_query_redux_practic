import { createSelector } from '@reduxjs/toolkit';

export const selectContactsItems = state => state.contacts.items;
export const selectIsAllLoading = state =>
  state.contacts.isLoading.isAllLoading;
export const selectIsDeleteLoading = state =>
  state.contacts.isLoading.isDeleteLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisableContacts = createSelector(
  [selectContactsItems, selectFilter],
  (items, filter) => {
    return items.filter(item => item.name.toLowerCase().includes(filter));
  }
);
