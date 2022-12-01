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
import Clipboard from '@react-native-community/clipboard';

function MenubarNavigation(props) {

    const [refLink, setRefLink] = useState('')
    const { navigation } = props;
    const handleProfileMenuBar = () => {
        navigation.navigate('ProfileMenuBar');
    };
    const handleCopy = () => {
        Clipboard.setString(refLink)
    }

    return (

        <KeyboardAwareScrollView
            // extraScrollHeight={normalize(80)}
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
                </LinearGradient>

                <SMView style={styles.divStyle}>

                    <SMView style={styles.profileDiv}>
                        <SMView style={styles.boxStyle}>
                            <SMText style={styles.profileDetailsText}>Profile Details</SMText>
                        </SMView>
                    </SMView>

                    <SMView style={styles.profileDiv}>
                        <SMView style={styles.boxStyle}>
                            <SMText style={styles.profileDetailsText}>Placement Details</SMText>
                        </SMView>
                    </SMView>

                    <SMView style={styles.profileDiv}>
                        <SMView style={styles.boxStyle}>
                            <SMText style={styles.profileDetailsText}>Commission Details</SMText>
                        </SMView>
                    </SMView>

                    <SMView style={styles.profileDiv}>
                        <SMView style={styles.boxStyle}>
                            <SMText style={styles.profileDetailsText}>Member Statistics</SMText>
                        </SMView>
                    </SMView>
                    <SMText
                        style={styles.refText}>
                        Referral Link
                    </SMText>
                    <SMView style={styles.ButtonStyle}>

                        <SMTextInput
                            style={styles.addressStyle}
                            placeholder={"Referral Link"}
                            value={refLink}
                            onChangeText={value => setRefLink(value)}
                        />
                        <SMButton
                            buttonText="Copy"
                            type="nextbutton"
                            buttonStyle={styles.editButtonStyle}
                            onPress={handleCopy}
                        />
                    </SMView>



                </SMView>
            </SMView>
        </KeyboardAwareScrollView>
    );
}
export default MenubarNavigation;