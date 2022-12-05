import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox,SMPicker } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../../constants/Platform';
//import { TextInput } from "react-native-paper";

function RegisterNomineePage(props) {
  const { navigation } = props;

  const [nName, setNName] = useState('')
  const [nTitle, setNTitle] = useState('')
  const [nRelation, setNRelation] = useState('')

  // const bankDetails = useSelector(state => state.profile.bankDetails);
  // const ifscCodeBankDetails = useSelector(
  //   state => state.profile.ifscCodeBankDetails,
  // );

  const [pos, setPos] = useState("")

  const [applicantRelation, setApplicantRelation] = useState('Select');
  const [openApplicantRelationPicker, setOpenApplicantRelationPicker] = useState(false);
  const [applicantRelationPickerItems, setApplicantRelationPickerItems] = useState([
    {label: 'Father', value: 'father'},
    {label: 'Mother', value: 'mother'},
    {label: 'Husband', value: 'husband'},
    {label: 'Wife', value: 'wife'},
    {label: 'Son', value: 'son'},
    {label: 'Brother', value: 'brother'},
    {label: 'Other', value: 'other'},
  ]);


  const handleRegisterBankInfoPage = () => {
    navigation.navigate('RegisterBankInfoPage');
  };

  return (
    <SMView style={styles.containerStyle}>
      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >

        <SMImage source={NJMartLogo} style={styles.njMartImage} />
        <SMView style={[styles.tableStyle, styles.elevation]}>

          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory
          </SMText>
          <SMText style={styles.NomineeInfo}>
            Nominee Information
          </SMText>

          <SMView style={styles.divStyle}>

            
            <SMView style={styles.containerRadio}>
                <SMText style={styles.textPos}>Nominee Title:</SMText>

                <SMView style={styles.Wrapper}>
                  {['Mr', 'Mrs', 'Ms'].map(position =>
                    <SMView key={position} style={styles.pos}>
                      <SMText style={styles.position1}>{position}</SMText>

                      <TouchableOpacity style={styles.outer}
                        onPress={() => setPos(position)}>
                        {pos === position && <SMView style={styles.inner} />}
                      </TouchableOpacity>
                    </SMView>
                  )}
                </SMView>
              </SMView>

            <SMTextInput
              style={styles.nameStyle}
              placeholder={"Nominee Name"}
              value={nName}
              onChangeText={value => setNName(value)}
            />


              <SMView style={styles.applicantRelationView}>
              <SMText  style={styles.applicantRelationText}>
                Relation With Applicant:
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
                //textStyle={styles.accountTypeTextStyle}
              //disabled={bankDetails.length >= 5}
              />
              </SMView>

            <SMButton
              buttonText="Next"
              type="nextbutton"
              buttonStyle={styles.nextButtonStyle}
              onPress={handleRegisterBankInfoPage}
            />

          </SMView>
        </SMView>
      </LinearGradient>
    </SMView>
  );
}
export default RegisterNomineePage;