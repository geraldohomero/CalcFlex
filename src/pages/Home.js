import React, {useStare} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculadora from './Calculadora';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'calculadora', title: 'Calculadora', icon: 'calculator' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    calculadora: Calculadora,

  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;