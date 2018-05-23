import React from 'react';
import Home from './lookup.component';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

test('should render home page on load', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render cart page when we click on test button', () => {
  // Render a checkbox with label in the document
  const home = mount(<Home />);
  
  // home.find('#test').hostNodes().simulate('click');
  console.log(home.props());
  // expect(checkbox.text()).toEqual('On');
});