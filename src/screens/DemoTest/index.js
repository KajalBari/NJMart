import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {
  SMButton,
  SMContainer,
  SMPicker,
  SMSnackBar,
  SMText,
  SMTextInput,
  SMView,
} from '../../elements';
import {
  BankDetailsPopup,
  BankAccountDeletePopup,
  BankDetailsRow,
} from '../../components';
import {addBankDetailsValidator} from './addBankDetailsValidator';
import * as profileAction from '../../actions';
import {textInputArr} from './consts';
import {checkifEmpty, validateIFSCCode} from '../../utils/commonUtils';
import {styles} from './styles';
import useStyles from './styles';
import { useTheme } from 'react-native-paper';

function AddBankDetails(props) {
  const { colors } = useTheme();
  const styles = useStyles();
  const {navigation} = props;
  const dispatch = useDispatch();

  const initialAddBankDetailState = {
    accountHolderName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
    city: '',
    swiftCode: '',
    upi: '',
  };

  const [addBankDetailState, setaddBankDetailState] = useState(
    initialAddBankDetailState,
  );
  const [bankAccountDeletePopupVisible, setBankAccountDeletePopupVisible] =
    useState('');
  const [bankDetailsPopupVisible, setBankDetailsPopupVisible] = useState({});

  const [accountType, setAccountType] = useState('savings');
  const [openAccountTypePicker, setOpenAccountTypePicker] = useState(false);
  const [accountTypePickerItems, setAccountTypePickerItems] = useState([
    {label: 'Savings', value: 'savings'},
    {label: 'Current', value: 'current'},
  ]);

  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });

  const bankDetailsLoading = useSelector(
    state => state.profile.bankDetailsLoading,
  );
  const ifscCodeBankDetailsLoading = useSelector(
    state => state.profile.ifscCodeBankDetailsLoading,
  );
  const bankDetails = useSelector(state => state.profile.bankDetails);
  const ifscCodeBankDetails = useSelector(
    state => state.profile.ifscCodeBankDetails,
  );

  const snackAlertMessage = useSelector(
    state => state.common.snackAlertMessage,
  );
  const getBankDetails = () => {
    dispatch(profileAction.getBankDetails());
  };

  useEffect(() => {
    getBankDetails();
    return () => {
      dispatch(profileAction.clearIfscbankDetails());
    };
  }, []);

  useEffect(() => {
    if (validateIFSCCode(addBankDetailState.ifscCode)) {
      dispatch(profileAction.getIfscBankDetails(addBankDetailState.ifscCode));
    } else {
      setaddBankDetailState({
        ...addBankDetailState,
        bankName: '',
        branchName: '',
        city: '',
      });
    }
  }, [addBankDetailState.ifscCode]);

  useEffect(() => {
    setaddBankDetailState({
      ...addBankDetailState,
      bankName: ifscCodeBankDetails?.bank_name || '',
      branchName: ifscCodeBankDetails?.branch || '',
      city: ifscCodeBankDetails?.district || '',
    });
  }, [ifscCodeBankDetails]);

  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };

  const handleOnChange = (key, value) => {
    setaddBankDetailState({
      ...addBankDetailState,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    const validatedData = addBankDetailsValidator({
      ...addBankDetailState,
      accountType,
    });
    if (validatedData.valid) {
      clearErrorMessageObj();
      dispatch(
        profileAction.addBankDetails(
          {...addBankDetailState, accountType},
          navigation,
        ),
      );
      setaddBankDetailState(initialAddBankDetailState);
    } else {
      seterrorMessageObj({...validatedData});
    }
  };

  const handleDeleteBankDetails = () => {
    dispatch(profileAction.deleteBankDetails(bankAccountDeletePopupVisible));
    setBankAccountDeletePopupVisible('');
  };

  const handlebankAccountDeletePopupClose = () => {
    setBankAccountDeletePopupVisible('');
  };

  const handleBankDetailsDismiss = () => {
    setBankDetailsPopupVisible({});
  };

  return (
    <SMContainer backButton noFooter homeButton>
      <KeyboardAwareScrollView
        extraScrollHeight={normalize(80)}
        nestedScrollEnabled>
        <SMView style={styles.container}>
          <SMText type="Headline" style={styles.addBankDetailsText}>
            Add Bank Details 
          </SMText>
          <SMView style={styles.instructionsView}>
            <SMText type="Title" style={styles.instructionTitle}>
              Instructions
            </SMText>
            <SMText type="Paragraph" style={styles.instructionsText}>
              Please fill the below details carefully. Account holder's name in
              bank should match with PAN card name.
            </SMText>
            <SMText type="Paragraph" style={styles.warningText}>
              * Maximum of 5 bank accounts can be added.
            </SMText>
          </SMView>
          <SMView style={styles.addBankDetailsView}>
            <SMText type="Paragraph" style={styles.innerViewTitle}>
              ENTER YOUR BANK ACCOUNT DETAILS
            </SMText>
            {textInputArr.map(txtInp => {
              return (
                <SMTextInput
                  maxLength={txtInp.maxLength}
                  autoFocus={txtInp.autoFocus}
                  type="secondary"
                  // style={styles.InputTextStyle}
                  keyboardType={txtInp.keyboardType}
                  placeholder={txtInp.placeholder}
                  onChangeText={value => {
                    handleOnChange(txtInp.onChangeState, value);
                  }}
                  value={addBankDetailState[txtInp.onChangeState]}
                  errorMessage={errorMessageObj[txtInp.onChangeState] || null}
                  style={styles.textInputStyle}
                  inputStyle={styles.inputStyle}
                  placeholderTextColor={colors.smHeaderText}
                  editable={bankDetails.length < 5}
                  loader={
                    txtInp?.onChangeState === 'ifscCode' &&
                    ifscCodeBankDetailsLoading
                  }
                />
              );
            })}
            <SMView style={styles.accountTypeView}>
              <SMText type="Paragraph" style={styles.accountTypeText}>
                Account Type:
              </SMText>
              <SMPicker
                type="secondary"
                open={openAccountTypePicker}
                value={accountType}
                items={accountTypePickerItems}
                setOpen={setOpenAccountTypePicker}
                setItems={setAccountTypePickerItems}
                containerStyle={styles.kycDropDownContainer}
                style={styles.accountTypeStyle}
                placeholder={'Savings'}
                setValue={setAccountType}
                placeholderStyle={styles.accountTypePlaceholderStyle}
                ArrowUpIconComponentSize={normalize(14)}
                ArrowDownIconComponentSize={normalize(14)}
                textStyle={styles.accountTypeTextStyle}
                disabled={bankDetails.length >= 5}
              />
            </SMView>
          </SMView>
          <SMButton
            buttonText="SUBMIT"
            type="secondary"
            buttonStyle={styles.submitButton}
            textStyle={styles.submitButtonText}
            onPress={handleSubmit}
            loader={bankDetailsLoading}
            disableButton={bankDetails.length >= 5 || bankDetailsLoading}
          />
          {bankDetails?.length > 0 &&
            bankDetails.map((bankDet, idx) => {
              return (
                <BankDetailsRow
                  bankName={bankDet?.bank_name || ''}
                  accountNumber={bankDet?.account_no || ''}
                  idx={idx + 1}
                  status={bankDet.status}
                  onBankNamePress={() => setBankDetailsPopupVisible(bankDet)}
                  onDeleteBank={() =>
                    setBankAccountDeletePopupVisible(bankDet.id)
                  }
                />
              );
            })}
        </SMView>
      </KeyboardAwareScrollView>
      {bankAccountDeletePopupVisible ? (
        <BankAccountDeletePopup
          visible={!!bankAccountDeletePopupVisible}
          onDismiss={handlebankAccountDeletePopupClose}
          onNoPress={handlebankAccountDeletePopupClose}
          onYesPress={handleDeleteBankDetails}
        />
      ) : null}
      {!checkifEmpty(bankDetailsPopupVisible) ? (
        <BankDetailsPopup
          bankDetails={bankDetailsPopupVisible}
          onDismiss={handleBankDetailsDismiss}
          onNoPress={handleBankDetailsDismiss}
          onYesPress={handleDeleteBankDetails}
        />
      ) : null}
      {snackAlertMessage ? (
        <SMSnackBar
          visible={!!snackAlertMessage}
          onDismiss={() => {
            dispatch(profileAction.clearSnackAlert());
          }}
          actionLabel="CLOSE"
          onActionPress={() => {
            dispatch(profileAction.clearSnackAlert());
          }}>
          {snackAlertMessage}
        </SMSnackBar>
      ) : null}
    </SMContainer>
  );
}

export default AddBankDetails;
