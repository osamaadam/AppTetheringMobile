import React from 'react';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  const onRead = async (e: BarCodeReadEvent) => {
    try {
      const url = `http://192.168.1.10:4000/send/${e.data}`;
      console.log(url);
      await fetch(url);
    } catch (error) {
      console.error(error);
    }
  };

  return <QRCodeScanner onRead={onRead} reactivateTimeout={500} reactivate />;
};

export default App;
