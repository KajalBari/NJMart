import React, { useState } from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox ,SMPicker} from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';
import {normalize} from '../../constants/Platform';
import { contactValidation } from './contactValidation';

function RegisterContactPage(props) {
  const { navigation } = props;

  const [contactInfo, setContactInfo] = useState({
    postalAdd: '',
    country: '',
    district: '',
    pin: '',
    mobile:'',
    email: '',
  })

  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });
  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };


  const handleOnChange = (key, value) => {
    setContactInfo({
      ...contactInfo,
      [key]:value,
    });
  };

  const submit = () => {
    const validatedData  = contactValidation({...contactInfo});
      // console.log("otpValidator",otpValidator.valid);
      if (validatedData.valid) {
        clearErrorMessageObj();
        navigation.navigate('RegisterNomineePage');
      } else {
        seterrorMessageObj({ ...validatedData });
      }
    }

//   const [postalAdd, setPostalAdd] = useState('')
//   const [country, setCountry] = useState('')
//  // const [state, setState] = useState('')
//   const [district, setDistrict] = useState('')
//   const [pin, setPin] = useState('')
//  // const [mobile, setMobile] = useState('')
//   const [email, setEmail] = useState('')

  const [applicantRelation, setApplicantRelation] = useState('Select');
  const [openApplicantRelationPicker, setOpenApplicantRelationPicker] = useState(false);
  const [applicantRelationPickerItems, setApplicantRelationPickerItems] = useState([
    {label: 'Maharashtra', value: 'maharashtra'},
    {label: 'Uttar Pradesh', value: 'uttarPradesh'},
    {label: 'Gujarat', value: 'gujarat'},
    {label: 'Punjab', value: 'punjab'},
    {label: 'Orrisa', value: 'orrisa'},
    {label: 'Goa', value: 'goa'},
  ]);

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
                value={contactInfo.postalAdd}
                // onChangeText={value => setPostalAdd(value)}
                onChangeText={value => {
                  handleOnChange('postalAdd', value);
                }}
              />

              <SMTextInput
                style={styles.countryStyle}
                placeholder={"Country"}
                value={contactInfo.country}
                //onChangeText={value => setCountry(value)}
                onChangeText={value => {
                  handleOnChange('country', value);
                }}
              />

              <SMView style={styles.applicantRelationView}>
              <SMText  style={styles.applicantRelationText}>
                 State:
              </SMText>
              <SMPicker
                type="secondary"
                open={openApplicantRelationPicker}
                value={applicantRelation}
                items={applicantRelationPickerItems}
                setOpen={setOpenApplicantRelationPicker}
                setItems={setApplicantRelationPickerItems}
                containerStyle={styles.DropDownContainer}
                style={styles.applicantRelationTextBoxStyle}
                placeholder={'Select'}
                setValue={setApplicantRelation}
                placeholderStyle={styles.applicantRelationPlaceholder}
                ArrowUpIconComponentSize={normalize(14)}
                ArrowDownIconComponentSize={normalize(14)}
              />
              </SMView>

              <SMTextInput
                style={styles.districtStyle}
                placeholder={"District"}
                value={contactInfo.district}
               // onChangeText={value => setDistrict(value)}
               onChangeText={value => {
                handleOnChange('district', value);
              }}
              />

              <SMTextInput
                style={styles.pincodeStyle}
                placeholder={"Pin Code"}
                value={contactInfo.pin}
               //onChangeText={value => setPin(value)}
               onChangeText={value => {
                handleOnChange('pin', value);
              }}
              />

              <SMTextInput
                style={styles.mobileStyle}
                placeholder={"Mobile*"}
                value={contactInfo.mobile}
                onChangeText={value =>{
                  handleOnChange('mobile',value);
                }}
                errorMessage={errorMessageObj?.mobile}
              />

              <SMTextInput
                style={styles.emailStyle}
                placeholder={"Email"}
                value={contactInfo.email}
                //onChangeText={value => setEmail(value)}
                onChangeText={value => {
                  handleOnChange('email', value);
                }}
              />

              <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
                onPress={() => {submit()}}
              />
            </SMView>
          </ScrollView>

        </SMView>
      </SMView>

    </SMView>
  );
}
export default RegisterContactPage;