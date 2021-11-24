import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contactsList;
export const getFilter = (state) => state.contacts.contactFilter;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contactsList, contactFilter) => {
        let normFilter = contactFilter.toLowerCase();
        return contactsList.filter(contact => contact.name.toLowerCase().includes(normFilter));
})
    
    
    
