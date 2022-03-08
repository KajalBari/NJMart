import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useStyles from './styles';
import {SMView, SMText, SMImage} from '..';
import PropTypes from 'prop-types';
import {
  homeButtonPNG,
  backButtonPNG,
  profileHeaderIcon,
  newsHeaderIcon,
  searchHeaderIcon,
} from '../../assets';

function SMHeader(props) {
  const styles = useStyles();
  const {
    headerContainerStyle,
    headerInnerStyle,
    backButton,
    backButtonStyle,
    onBackButtonPress,
    profileButton,
    onProfileButtonPress,
    profileHeaderIconStyle,
    titleContainerStyle,
    title,
    headertitleStyle,
    subTitle,
    headerSubtitleStyle,
    homeButton,
    onHomeButtonPress,
    homeButtonStyle,
    newsButton,
    onNewsButtonPress,
    newsHeaderIconStyle,
    searchButton,
    onSearchButtonPress,
    searchButtonStyle,
  } = props;
  const navigation = useNavigation();

  return (
    <SMView style={[styles.container, headerContainerStyle]}>
      <SMView style={[styles.innerContainer, headerInnerStyle]}>
        {backButton ? (
          <TouchableOpacity
            onPress={() =>
              onBackButtonPress ? onBackButtonPress() : navigation.goBack()
            }>
            <SMImage
              source={backButtonPNG}
              style={[styles.backButton, backButtonStyle]}
            />
          </TouchableOpacity>
        ) : null}
        {profileButton ? (
          <TouchableOpacity onPress={onProfileButtonPress}>
            <SMImage
              source={profileHeaderIcon}
              style={[styles.profileHeaderIcon, profileHeaderIconStyle]}
            />
          </TouchableOpacity>
        ) : null}
      </SMView>

      <SMView style={[styles.titlecontainer, titleContainerStyle]}>
        {title ? (
          <SMText type={'Subheading'} style={[styles.title, headertitleStyle]}>
            {title}
          </SMText>
        ) : null}
        {subTitle ? (
          <SMText
            type={'Caption'}
            style={[styles.subTitle, headerSubtitleStyle]}>
            {subTitle}
          </SMText>
        ) : null}
      </SMView>

      <SMView style={styles.rightView}>
        {searchButton ? (
          <TouchableOpacity onPress={onSearchButtonPress}>
            <SMImage
              source={searchHeaderIcon}
              style={[styles.searchButton, searchButtonStyle]}
            />
          </TouchableOpacity>
        ) : null}
        {homeButton ? (
          <TouchableOpacity
            onPress={() => {
              onHomeButtonPress
                ? onHomeButtonPress()
                : navigation.navigate('Dashboard', {screen: 'Home'});
            }}>
            <SMImage
              source={homeButtonPNG}
              style={[styles.homeButton, homeButtonStyle]}
            />
          </TouchableOpacity>
        ) : null}
        {newsButton ? (
          <TouchableOpacity onPress={onNewsButtonPress}>
            <SMImage
              source={newsHeaderIcon}
              style={[styles.newsHeaderIcon, newsHeaderIconStyle]}
            />
          </TouchableOpacity>
        ) : null}
      </SMView>
    </SMView>
  );
}

SMHeader.propTypes = {
  headerContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  headerInnerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backButton: PropTypes.bool,
  backButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onBackButtonPress: PropTypes.func,
  profileButton: PropTypes.bool,
  onProfileButtonPress: PropTypes.func,
  profileHeaderIconStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  titleContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  headertitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  subTitle: PropTypes.string,
  headerSubtitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  homeButton: PropTypes.bool,
  onHomeButtonPress: PropTypes.func,
  homeButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  newsButton: PropTypes.bool,
  onNewsButtonPress: PropTypes.func,
  newsHeaderIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  searchButton: PropTypes.bool,
  onSearchButtonPress: PropTypes.func,
  searchButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMHeader.defaultProps = {};

export default SMHeader;
