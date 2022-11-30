import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
  ShoppingCart,
  menu11,
  ThinCircle,
  Profile,
  Account,
  arrow,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { normalize } from '../../constants/Platform';

function ProfileEdit(props) {
  const { navigation } = props;
  const [distributorId, setdistributorId] = useState('')
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [joinDate, setJoinDate] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const handleProfileEdit = () => {
    navigation.navigate('Downlines');
  };

  return (


    <KeyboardAwareScrollView
      extraScrollHeight={normalize(80)}
      nestedScrollEnabled>

      <SMView style={styles.containerStyle}>
        <LinearGradient colors={["#FD6510", "#FFBF43"]}
          style={styles.gradient}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }} >


          <TouchableOpacity onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard' })} >
            <SMView style={styles.headerStyle}>
              <SMImage source={arrow} style={styles.arrowStyle} />
            </SMView>
          </TouchableOpacity>

          <SMView style={styles.iconNameStyle}>
            <SMImage source={Profile} style={styles.profileStyle} />
            <SMText style={styles.nameStylee}>Navneet Kothari</SMText>
          </SMView>

          <SMView style={[styles.contentRectangleStyle, styles.elevation]}>
            <SMText style={styles.profileText}>Profile</SMText>
            <SMView style={styles.lineStyle}>
            </SMView>

            <SMView style={styles.profileDetails}>

              <SMView style={styles.distributorStyle}>
                <SMText style={styles.distributorIdStyle}>Distributor Id</SMText>
                {/* <SMText style={styles.subTitleStyle1}>NJTop</SMText> */}
                <SMTextInput
                  style={styles.sponsorName}
                  value={distributorId}
                  onChangeText={value => setdistributorId(value)}
                />
              </SMView>

              <SMView style={styles.distributorStyle}>
                <SMText style={styles.nameStyle2}>Name</SMText>
                {/* <SMText style={styles.subTitleStyle2}>Test</SMText> */}
                <SMTextInput
                  style={styles.sponsorName}
                  value={name}
                  onChangeText={value => setName(value)}
                />
              </SMView>

              <SMView style={styles.distributorStyle}>
                <SMText style={styles.dateStyle}>Join Date</SMText>
                {/* <SMText style={styles.subTitleStyle3}>Mar 19 2018</SMText> */}
                <SMTextInput
                  style={styles.sponsorName}
                  value={joinDate}
                  onChangeText={value => setJoinDate(value)}
                />
              </SMView>

              <SMView style={styles.distributorStyle}>
                <SMText style={styles.addressStyle}>Address</SMText>
                {/* <SMText style={styles.subTitleStyle4}>Test</SMText> */}
                <SMTextInput
                  style={styles.sponsorName}
                  value={address}
                  onChangeText={value => setAddress(value)}
                />
              </SMView>

              <SMView style={styles.distributorStyle}>
                <SMText style={styles.birthDateStyle}>Birth Date</SMText>
                {/* <SMText style={styles.subTitleStyle6}>1/1/1900 12:00AM</SMText> */}
                <SMTextInput
                  style={styles.sponsorName}
                  value={birthDate}
                  onChangeText={value => setBirthDate(value)}
                />
              </SMView>


              <SMButton
                buttonText="Save"
                type="nextbutton"
                buttonStyle={styles.editButtonStyle}
              //onPress={() => navigation.navigate('ProfileEdit', { name: 'ProfileEdit' })}
              />
            </SMView>

          </SMView>

        </LinearGradient>
      </SMView>

    </KeyboardAwareScrollView>

  );
}
export default ProfileEdit;