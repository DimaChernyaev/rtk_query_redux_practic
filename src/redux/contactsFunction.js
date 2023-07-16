export const handlePendingAll = state => {
  state.isLoading.isAllLoading = true;
  state.error = null;
};

export const handlePendingDelete = state => {
  state.isLoading.isDeleteLoading = true;
  state.error = null;
};

export const handleRejectedAll = (state, action) => {
  state.isLoading.isAllLoading = false;
  state.error = action.payload;
};

export const handleRejectedDelete = (state, action) => {
  state.isLoading.isDeleteLoading = false;
  state.error = action.payload;
};

export const handleFulfilledAllContact = (state, action) => {
  state.isLoading.isAllLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleFulfilledDeleteContact = (state, action) => {
  state.isLoading.isDeleteLoading = false;
  state.error = false;
  const indexDelete = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(indexDelete, 1);
};

export const handleFulfilledAddContact = (state, action) => {
  state.isLoading.isAllLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
