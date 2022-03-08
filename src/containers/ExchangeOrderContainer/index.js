import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {OrderBook, MarketTrades} from '../../components';
import useStyles from './styles';
import {SMButton, SMView} from '../../elements';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

function MyTabBar(props) {
  const styles = useStyles();
  const {colors} = useTheme();
  const {state, descriptors, navigation} = props;
  return (
    <SMView style={styles.tabBarView}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <SMButton
            type="secondary"
            buttonText={label}
            buttonStyle={[
              styles.tabButtonStyle,
              {
                backgroundColor: isFocused
                  ? colors.smSecondary
                  : colors.smWhite,
              },
            ]}
            textStyle={styles.tabButtonText}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </SMView>
  );
}

function ExchangeOrderContainer(props) {
  const styles = useStyles();
  const {
    orderBookBuyData,
    orderBookSellData,
    marketTradesData,
    coinDataExchangeOrder,
  } = props;
  return (
    <Tab.Navigator
      initialRouteName="OrderBook"
      style={styles.container}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="OrderBook"
        options={{tabBarLabel: 'Order Book'}}
        component={() => (
          <OrderBook
            orderBookBuyData={orderBookBuyData}
            orderBookSellData={orderBookSellData}
            coinDataExchangeOrder={coinDataExchangeOrder}
          />
        )}
      />
      <Tab.Screen
        name="MarketTrades"
        options={{
          tabBarLabel: 'Market Trades',
        }}
        component={() => (
          <MarketTrades
            marketTradesData={marketTradesData}
            coinDataExchangeOrder={coinDataExchangeOrder}
          />
        )}
      />
    </Tab.Navigator>
  );
}

export default ExchangeOrderContainer;
