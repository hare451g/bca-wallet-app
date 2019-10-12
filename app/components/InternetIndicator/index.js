import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Indicator } from './styled';

function InternetIndicator(props) {
  const [isConnect, setConnect] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnect(state.isConnected);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Indicator isConnect={isConnect} />
  );
}

export default InternetIndicator;