import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import { addToBag } from './helper.js'

export default function shoppingBag(state = [], action){
  switch(action.type){
    case ADD_GROCERY:
      console.log("ADD_GROCERY clicked and shoppingBag  action", action);
      let shoppingBag = [...state, addToBag(action.id)];
      console.log('shoppingBag should be populated with ', shoppingBag);
      return shoppingBag;
    case REMOVE_GROCERY:
      shoppingBag = state.filter((item)=>item.id !== action.id);
      return shoppingBag;
    default:
    return state;
  }
}
