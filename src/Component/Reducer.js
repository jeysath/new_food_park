import { Foodlist } from "./Foodlist";
import { Calculation } from "./Offercalc";
import {
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM
} from "./constant";

export const Reducer = (state = Foodlist, action) => {
    switch (action.type) {

        case ADD_SHOPPING_ITEM:
            state.forEach(item => {
                if (item.id === parseInt(action.payload)) {
                    item["qty"] = item["qty"] + 1
                }
            })
            Calculation(state);
            return state;


        case DECREASE_SHOPPING_ITEM:
            state.forEach(item => {
                if (item.id === parseInt(action.payload)) {
                    item["qty"] = item["qty"] - 1
                }
            })
            Calculation(state);
            return state;

        default:
            return state;
    }
}