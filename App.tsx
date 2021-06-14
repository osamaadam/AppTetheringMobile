import React from 'react';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  const onRead = async (e: BarCodeReadEvent) => {
    try {
      const url = new URL(e.data);
      console.log(url);
      await fetch(url.href);
    } catch (error) {
      console.error(error);
    }
  };

  return <QRCodeScanner onRead={onRead} reactivateTimeout={2000} reactivate />;
};

export default App;
