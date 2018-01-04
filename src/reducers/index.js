import grocery from './grocery_reducer';
import shoppingBag from './shoppingBag_reducer';
import pocketMoney from './spending_reducer';

import { combineReducers } from 'redux';

const rootreducer = combineReducers({
  grocery,
  shoppingBag,
  pocketMoney

});

export default rootreducer;
