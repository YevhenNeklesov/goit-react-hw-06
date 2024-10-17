import { configureStore } from "@reduxjs/toolkit";


const initialState = {
  contacts: {
		items: []
	},
  filters: {
		name: ""
	}
}

const contactsReducer = (state = initialState, action) => {
    return state
}


export const store = configureStore({
    reducer: {
        contact: contactsReducer
    }
})