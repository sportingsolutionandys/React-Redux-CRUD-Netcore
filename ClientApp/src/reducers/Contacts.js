import * as actionTypes from '../actions/ContactActions';

const initialState = { contacts: [], isLoading: false };
export const ContactReducer = (state, action) => {
  state = state || initialState;

  if (action.type === actionTypes.requestContactsType) {
    return {
      ...state,
      isLoading: true
    };
  } 

  if (action.type === actionTypes.receiveContactsType) {
    return {
      ...state,
      contacts: action.contacts,
      isLoading: false
    };
  }

  return state;
};
