import React from 'react';
import { message, Button, } from 'antd';

export default function index() {
  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };
  return (
    <div>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </div>
  );
}
