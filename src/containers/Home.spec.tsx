import * as React from 'react';
import * as enzyme from 'enzyme';
import { Text } from 'react-native';
import Home, { User, Message } from './Home';

describe('Home tests', () => {
    it('renders with just user correctly', () => {
      const user: User = {id: 1000, fullName: 'Prabhu Subramanian', avatar: 'PS'};
      const item = enzyme.shallow(<Home user={user} />);
      expect(item.find(Text).render().text()).toEqual('Welcome Prabhu Subramanian');
    });

    it('renders with user and messages correctly', () => {
      const user: User = {id: 1000, fullName: 'Prabhu Subramanian', avatar: 'PS'};
      const messages: Message[] = [
        {id: 1, sender: 'user 1', title: 'Hello mate', body: 'How are you doing?', sent: new Date(), received: new Date()}
      ];
      const item = enzyme.shallow(<Home user={user} messages={messages} />);
      expect(item.find(Text).render().text()).toEqual('Welcome Prabhu Subramanian');
    });
});
