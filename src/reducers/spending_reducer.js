import { ADD_POCKET_MONEY, REMOVE_POCKET_MONEY } from '../actions';
import { addToBag } from './helper';

export default function(state = 50, action){

  switch(action.type){
    case ADD_POCKET_MONEY:
    console.log("Pocket money added");
    let item = addToBag(action.id);
    let pocketMoney = state+item.cost;
    return pocketMoney;
    case REMOVE_POCKET_MONEY:
    console.log("Pocket money removed");
    item = addToBag(action.id);
    pocketMoney = state-item.cost;
    return pocketMoney;
  default:
    return state;
  }
}
