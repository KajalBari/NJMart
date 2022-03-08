import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {SMIcons, SMImage, SMText, SMView} from '../../elements';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-crop-picker';
import {dim, normalize} from '../../constants/Platform';
import {styles} from './styles';
import {COLORS} from '../../constants/Colors';
import {cameraPNG} from '../../assets';

function SMImagePicker(props) {
  const {
    imageUploadType,
    cropping,
    width,
    height,
    mediaType,
    onMediaPicked,
    mediaURL,
    iconText,
    mediaLoading,
    errorMessage,
    iconTextStyle,
    children,
    customMainContainer,
    noImage,
    noImageCustom,
    cameraImageStyle,
    fileNameLabel,
  } = props;

  const handleImagePicker = () => {
    if (imageUploadType === 'Library') {
      ImagePicker.openPicker({
        width: width,
        height: height,
        cropping: cropping,
        mediaType: mediaType,
        includeBase64: true,
        includeExif: true,
      })
        .then(media => {
          onMediaPicked(media);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (imageUploadType === 'Camera') {
      ImagePicker.openCamera({
        width: width,
        height: height,
        cropping: cropping,
        includeBase64: true,
        includeExif: true,
      })
        .then(media => {
          onMediaPicked(media);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => handleImagePicker()}
        style={[styles.mainContainer, customMainContainer]}
        disabled={mediaLoading}>
        {children}
        {mediaLoading ? (
          <ActivityIndicator color={COLORS.BRAND_BLUE} size="large" />
        ) : mediaURL ? (
          <>
            <SMImage
              source={mediaURL}
              resizeMode="stretch"
              style={styles.mediaStyle}
            />
            <SMView style={styles.addPhotoView}>
              <SMIcons
                type="MaterialCommunityIcons"
                name="camera-outline"
                size={normalize(14)}
                color={COLORS.BRAND_BLUE}
              />
            </SMView>
          </>
        ) : noImage ? (
          <SMView style={styles.noImageView}>
            <SMIcons
              type="MaterialCommunityIcons"
              name="camera-outline"
              size={normalize(20)}
              color={COLORS.BRAND_BLUE}
            />
            <SMText type="Body_1" style={[styles.iconTextStyle, iconTextStyle]}>
              {iconText}
            </SMText>
          </SMView>
        ) : noImageCustom ? (
          <SMView style={styles.noImageView}>
            <SMImage source={cameraPNG} style={cameraImageStyle} />
            <SMText type="Body_1" style={[styles.iconTextStyle, iconTextStyle]}>
              {iconText}
            </SMText>
          </SMView>
        ) : null}
      </TouchableOpacity>
      {errorMessage ? (
        <SMText style={styles.errorMessage}>{errorMessage}</SMText>
      ) : null}
    </>
  );
}

SMImagePicker.propTypes = {
  imageUploadType: PropTypes.string,
  cropping: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  mediaType: PropTypes.string,
  onMediaPicked: PropTypes.func,
  mediaURL: PropTypes.string,
  iconText: PropTypes.string,
  mediaLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  iconTextStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  customMainContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  noImage: PropTypes.bool,
  noImageCustom: PropTypes.bool,
  cameraImageStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SMImagePicker.defaultProps = {
  imageUploadType: 'Library',
  cropping: true,
  width: dim().width,
  height: normalize(200),
  mediaType: 'photo',
  mediaURL: '',
  iconText: 'Add Image',
  mediaLoading: false,
  errorMessage: '',
  iconTextStyle: {},
  customMainContainer: {},
  noImage: false,
  noImageCustom: false,
  cameraImageStyle: {},
};

export default SMImagePicker;
