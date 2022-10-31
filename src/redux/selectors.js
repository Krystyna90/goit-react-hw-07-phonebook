export const getContacts = ({ contacts }) => contacts.items;
export const getState = ({ contacts }) => ({
  loading: contacts.isLoading,
  error: contacts.error,
});
export const getFilter = (store) => store.filter;
