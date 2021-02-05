import {PERIOD_START} from "../types";



const calendarReducer = (state,action) => {
    switch (action.type) {
        case PERIOD_START:
            return {...state,payload}

    }
}