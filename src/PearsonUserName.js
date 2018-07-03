import React, { Component } from "react";

export default class PearsonUserName extends Component {
    
  render() {
    return (
      <div key={this.props.keyVal} className="pearson-box">
            <img src={this.props.pic} alt="Pic" />
            <div className="nm">{this.props.first} {this.props.last}</div>
            <a href="javascript:void(0)" onClick={this.props.delUser}>Delete</a>
      </div>
         
    );
  }
}
