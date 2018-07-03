import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PearsonUserName from '../PearsonUserName';
import PearsonUsers from '../PearsonUsers';

describe('Pearson User Names', function() {
  const wrapper = shallow(<PearsonUserName />);
  
  it('add functionality to delete a user from the state', function() {
  // wrapper.find("a").at(2).simulate('click');
  // expect(wrapper.state().users).toBe();
   
  });
  it('should refactor PearsonUsers.js to use a new component to render each user profile', function() {
     
  });
});
 