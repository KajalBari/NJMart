import React from 'react';
import {ActivityIndicator, withTheme, Banner} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import PropTypes from 'prop-types';
import {SMHeader, SMFooter, SMContent, SMView, SMIcons, SMText} from '..';
import * as commonAction from '../../actions';
import useStyles from './styles';
import {checkifEmpty} from '../../utils/commonUtils';
import {normalize} from '../../constants/Platform';

function SMContainer(props) {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {colors} = props.theme;
  const {
    containerStyle,
    noHeader,
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
    loader,
    scrollable,
    contentStyle,
    children,
    noFooter,
    footerStyle,
    footerChildren,
    searchButton,
    onSearchButtonPress,
    searchButtonStyle,
  } = props;

  const foreGroundPushMessage = useSelector(
    state => state.common.foreGroundPushMessage,
  );

  return (
    <SMView style={[styles.container, containerStyle]}>
      {noHeader ? null : (
        <SMHeader
          headerContainerStyle={headerContainerStyle}
          headerInnerStyle={headerInnerStyle}
          backButton={backButton}
          backButtonStyle={backButtonStyle}
          onBackButtonPress={onBackButtonPress}
          profileButton={profileButton}
          onProfileButtonPress={onProfileButtonPress}
          profileHeaderIconStyle={profileHeaderIconStyle}
          titleContainerStyle={titleContainerStyle}
          title={title}
          headertitleStyle={headertitleStyle}
          subTitle={subTitle}
          headerSubtitleStyle={headerSubtitleStyle}
          homeButton={homeButton}
          onHomeButtonPress={onHomeButtonPress}
          homeButtonStyle={homeButtonStyle}
          newsButton={newsButton}
          onNewsButtonPress={onNewsButtonPress}
          newsHeaderIconStyle={newsHeaderIconStyle}
          searchButton={searchButton}
          onSearchButtonPress={onSearchButtonPress}
          searchButtonStyle={searchButtonStyle}
        />
      )}
      {!checkifEmpty(foreGroundPushMessage) ? (
        <Banner
          visible={!checkifEmpty(foreGroundPushMessage)}
          actions={[
            {
              label: 'CLOSE',
              onPress: () =>
                dispatch(commonAction.clearForeGroundPushNotification()),
            },
          ]}
          icon={({size}) => (
            <SMIcons
              name="notifications-active"
              type="MaterialIcons"
              size={normalize(size)}
            />
          )}>
          <SMView style={styles.notificationBannerView}>
            <SMText style={styles.notificationBody}>
              {foreGroundPushMessage?.notification?.body || 'Notification'}
            </SMText>
            <SMText style={styles.notificationTitle}>
              {foreGroundPushMessage?.notification?.title ||
                'Something went wrong'}
            </SMText>
          </SMView>

          {/* {JSON.stringify(foreGroundPushMessage)} */}
        </Banner>
      ) : null}
      {loader ? (
        <ActivityIndicator
          size="large"
          animating={true}
          color={colors.smSecondary}
          style={styles.loader}
        />
      ) : (
        <SMContent scrollable={scrollable} style={contentStyle}>
          {children}
        </SMContent>
      )}
      {noFooter ? null : (
        <SMFooter footerStyle={footerStyle}>{footerChildren}</SMFooter>
      )}
    </SMView>
  );
}

SMContainer.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  noHeader: PropTypes.bool,
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
  loader: PropTypes.bool,
  scrollable: PropTypes.bool,
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.any,
  noFooter: PropTypes.bool,
  footerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  footerChildren: PropTypes.any,
  searchButton: PropTypes.bool,
  onSearchButtonPress: PropTypes.func,
  searchButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMContainer.defaultProps = {};

export default SMContainer;
