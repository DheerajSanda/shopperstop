import React, { Component } from 'react';

import { connect } from 'react-redux';

class Stats extends Component {
  cost(){
    let totalCost = 0;
    this.props.shoppingBag.forEach(item => totalCost += item.cost);
    return totalCost;
  }
  calories(){
    let totalCalories = 0;
    this.props.shoppingBag.forEach(item => totalCalories += item.calories);
    return totalCalories;
  }
  weight(){
    let totalweight = 0;
    this.props.shoppingBag.forEach(item => totalweight += item.weight);
    return totalweight;
  }
  render(){
    console.log('from the stats', this.props);
    return(
      <div className="col-md-3 stats-bg">
        <h2 className="text-center">stats Items</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost - $ {this.cost()}</li>
          <li className="list-group-item">Calories - {this.calories()} cal</li>
          <li className="list-group-item">Weight - {this.weight()} gm</li>
        </ul>

      </div>
    );
  }
}


function mapStateToProps(state){
  console.log(state);
  return{
    shoppingBag: state.shoppingBag
  }
}

export default connect(mapStateToProps, null)(Stats);
