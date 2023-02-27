import store from '../../app/store';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import NotificationBar from './NotificationBar';
import { changeNotificationText } from './notificationTextSlice';

test('component should not display because the notificationText is empty',()=>{
    store.dispatch(changeNotificationText(''));
    render(<Provider store={store}><NotificationBar /></Provider>);
    expect(() => screen.getByTitle('divNotificationBar')).toThrow()  
})
test('component should display',()=>{
    const notificationText = 'test';
    store.dispatch(changeNotificationText(notificationText));
    render(<Provider store={store}><NotificationBar /></Provider>);
    const divNotificationBar = screen.getByTitle('divNotificationBar');
    const notificationH4 = screen.getByText(notificationText)
    expect(divNotificationBar).toBeInTheDocument();
    expect(notificationH4).toBeInTheDocument();    
})
