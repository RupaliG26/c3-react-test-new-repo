import React from 'react';
import {shallow, mount} from 'enzyme';
import { PearsonUsers } from '../PearsonUsers';

describe('Pearson Users', function() {
  const wrapper = shallow(<PearsonUsers />);
  it('should render a list of users from the state, displaying first_name, last_name and the avatar', function() {
    expect(wrapper.state().users).toEqual([{"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg", "first_name": "Eve", "id": 4, "last_name": "Holt"}, {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg", "first_name": "Charles", "id": 5, "last_name": "Morris"}, {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg", "first_name": "Tracey", "id": 6, "last_name": "Ramos"}]);
    
  });

  it('should add functionality to remove duplicated users from the state', function() {
  // wrapper.find('a').at(0).simulate('click');
   // wrapper.simulate('fetch');
    //expect(wrapper.state().users).toEqual('Data updated...');
  });
});
 