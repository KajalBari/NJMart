import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import SMView from '../SMView';
import {styles} from './styles';

function SMContent(props) {
  const {scrollable, style, children} = props;
  return (
    <SMView {...props} style={[styles.contentContainerStyle, style]}>
      {scrollable ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          nestedScrollEnabled>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SMView>
  );
}

SMContent.propTypes = {
  scrollable: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMContent.defaultProps = {};

export default SMContent;
