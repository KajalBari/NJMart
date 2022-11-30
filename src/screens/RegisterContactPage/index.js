import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import { FlatList, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';
import { useState } from "react";
//import { TextInput } from "react-native-paper";

function RegisterContactPage(props) {
  const { navigation } = props;
  const [postalAdd, setPostalAdd] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [pin, setPin] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const handleRegisterNomineePage = () => {
    navigation.navigate('RegisterNomineePage');
  };

  return (

    <SMView style={styles.containerStyle}>
      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >
        <SMImage source={NJMartLogo} style={styles.njMartImage} />
      </LinearGradient>

      <SMView style={[styles.tableStyle, styles.elevation]}>
        <SMView style={styles.innerDivStyle}>

          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory
          </SMText>
          <SMText style={styles.contactHeading}>
            Contact Information
          </SMText>

          <ScrollView nestedScrollEnabled>

            <SMView style={styles.divStyle}>

              <SMTextInput
                style={styles.addressStyle}
                placeholder={"Postal Address"}
                value={postalAdd}
                onChangeText={value => setPostalAdd(value)}

              />

              <SMTextInput
                style={styles.countryStyle}
                placeholder={"Country"}
                value={country}
                onChangeText={value => setCountry(value)}
              />

              <SMTextInput
                style={styles.stateStyle}
                placeholder={"State"}
                value={state}
                onChangeText={value => setState(value)}
              />

              <SMTextInput
                style={styles.districtStyle}
                placeholder={"District"}
                value={district}
                onChangeText={value => setDistrict(value)}
              />

              <SMTextInput
                style={styles.pincodeStyle}
                placeholder={"Pin Code"}
                value={pin}
                onChangeText={value => setPin(value)}
              />

              <SMTextInput
                style={styles.mobileStyle}
                placeholder={"Mobile*"}
                value={mobile}
                onChangeText={value => setMobile(value)}
              />

              <SMTextInput
                style={styles.emailStyle}
                placeholder={"Email"}
                value={email}
                onChangeText={value => setEmail(value)}
         
              />

              <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
                onPress={handleRegisterNomineePage}
              />
            </SMView>
          </ScrollView>

        </SMView>
      </SMView>

    </SMView>
  );
}
export default RegisterContactPage;