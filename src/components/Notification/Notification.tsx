import Snackbar from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';
import React, { useState } from 'react';

interface INotification {
  children: (callback: (text: string, type: Color) => void) => React.ReactElement;
}

export const Notification: React.FC<INotification> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [notificationObj, setNotificationObj] = useState<{ text: string, type: Color }>();

  const openNotification = (text: string, type: Color) => {
    setNotificationObj({ text, type });
    setOpen(true);
  };

  return (
    <>
      {children(openNotification)}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity={notificationObj?.type}>
          {notificationObj?.text}
        </Alert>
      </Snackbar>
    </>
  );
};