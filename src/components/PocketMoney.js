import React, { Component } from 'react';
import { connect } from 'react-redux';

class PocketMoney extends Component {
  render(){
    console.log("Pocket money = ",this.props.pocketMoney);
    return(
      <div className="row">
        <h2 className="text-center">You have <span className="label label-info">$ {this.props.pocketMoney}</span> amount to spend on Grocery today! </h2>
        <br />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    pocketMoney: state.pocketMoney
  }
}

export default connect(mapStateToProps, null)(PocketMoney);
