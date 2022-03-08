import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProgramTeam, ProgramReferral} from '../../components';
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
                  : colors.smPrimary,
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

function ReferralProgramContainer(props) {
  const styles = useStyles();
  const {
    referralId,
    teamData,
    // referralData,
    marketPairData,
  } = props;
  return (
    <Tab.Navigator
      initialRouteName="ProgramTeam"
      style={styles.container}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="ProgramTeam"
        options={{tabBarLabel: 'Team'}}
        component={() => (
          <ProgramTeam
            teamData={teamData}
            referralId={referralId}
          />
        )}
      />
      <Tab.Screen
        name="ProgramReferral"
        options={{
          tabBarLabel: 'Referral',
        }}
        component={() => (
          <ProgramReferral
            // referralData={referralData}
            referralId={referralId}
            marketPairData={marketPairData}
          />
        )}
      />
    </Tab.Navigator>
  );
}

export default ReferralProgramContainer;
