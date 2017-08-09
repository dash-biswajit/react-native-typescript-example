import * as React from 'react';
import * as enzyme from 'enzyme';
import { Text } from 'react-native';
import Header from './Header';

describe('Header tests', () => {
  it('renders the item correctly', () => {
    const item = enzyme.shallow(<Header title='Test title' avatar='B' />);
    expect(item.find(Text)).toHaveLength(2);
    expect(item.find(Text).at(0).render().text()).toEqual('Test title');
    expect(item.find(Text).at(1).render().text()).toEqual('B');
  });
});
