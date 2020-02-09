import React from 'react';
import { Button, notification, } from 'antd';

export default function  Index() {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  return (
    <div>
      <Button onClick={openNotification}
        type="primary"
      >
        Open the notification box
      </Button>
    </div>
  );
}
