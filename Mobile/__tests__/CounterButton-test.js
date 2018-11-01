"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа CounterButton', () => {

  const component = renderer.create(
    <MobileCompany />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  componentTree.find("#add").onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  /*componentTree.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();*/
    
});
