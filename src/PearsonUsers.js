import React, { Component } from "react";
import PearsonUserName from "./PearsonUserName";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
    
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1&per_page=10').then( (response) => {
         return response.json() })   
           .then( (json) => {
             for(let newUser in json.data) {
               this.state.users.push(json.data[newUser]);
             }
             this.setState({users: this.state.users}, () => {
              this.state.users.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );
              let result = (this.state.users).reduce((accumulator, current) => {
                const length = accumulator.length
                if (length === 0 || accumulator[length - 1].id !== current.id) {
                      accumulator.push(current);
                }
                return accumulator;
          }, []);
          this.setState({users: result});
             });
               
           });
           
  }
  
  _deleteUser(items) {
    let filteredArray = this.state.users.filter(item => item.id !== items.id);
    this.setState({users: filteredArray});
  }
  render() {
    return (
      <div className="pearson-users">
        <h1>Pearson User Management</h1>
        <div className="pearson-data">
           {this.state.users.map( (item) => {
             return <PearsonUserName keyVal={item.id} id={item.id} first={item.first_name} last={item.last_name} 
             pic={item.avatar} delUser={this._deleteUser.bind(this,item)}  />
           })}
        
        </div>
          
      </div>
    );
  }
}
