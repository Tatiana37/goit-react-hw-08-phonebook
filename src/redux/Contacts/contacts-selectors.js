import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state?.contacts?.contacts;
export const getFilter = state => state?.contacts?.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    let normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  },
);
