import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import groceryItemsList from '../data/groceryItems.json';
import { addToBag } from './helper.js'

export default function grocery(state = groceryItemsList, action){
  switch(action.type){
    case ADD_GROCERY:
      console.log("ADD_GROCERY clicked", action);
      let grocery = state.filter(item=>item.id !== action.id);
      return grocery;
    case REMOVE_GROCERY:
    console.log("+++++remove_grocery action",state, action);
      grocery = [...state, addToBag(action.id)];
      return grocery;
    default:
    return state;
  }
}
