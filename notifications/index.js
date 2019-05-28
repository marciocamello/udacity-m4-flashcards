import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const KEY = 'FlashCards:notifications';

export function clearNotification() {
    return AsyncStorage.removeItem(KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'FlashCards ALERT',
        body: "You don't read any card today, please your need learn more!!!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            vibrate: true,
            priority: 'high',
            sticky: false,
        }
    }
}

export function setNotification() {
    AsyncStorage.getItem(KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.KEY)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}
