
export const requestContactsType = 'REQUEST_CONTACTS';
export const receiveContactsType = 'RECEIVE_CONTACTS';


export const contactActions = {
    getContacts : () => async (dispatch, getState) => {
 
        dispatch({ type: requestContactsType});
        const url = `api/Contact`;
        const response = await fetch(url);
        const contacts = await response.json();
        dispatch({ type: receiveContactsType, contacts });
    },
    addContact : (contact) => async (dispatch, getState) => {

        let data = JSON.stringify(contact);
        const response = await fetch('api/Contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: data
            });
        //const content = await response.json();
  }
};
