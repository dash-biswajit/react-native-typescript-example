import * as React from 'react';
import * as enzyme from 'enzyme';
import { Text } from 'react-native';
import InboxItem from './InboxItem';

describe('InboxItem tests', () => {
  it('renders the item correctly', () => {
    const item = enzyme.shallow(<InboxItem title='Test subject 1' />);
    expect(item.find(Text)).toHaveLength(3);
    expect(item.find(Text).at(1).render().text()).toEqual('Test subject 1');
  });
});
