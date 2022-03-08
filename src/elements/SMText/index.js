import React from 'react';
import {
  Text,
  Title,
  Subheading,
  Caption,
  Headline,
  Paragraph,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import {styles} from './styles';

const renderView = props => {
  switch (props.type) {
    case 'Text':
      return (
        <Text
          numberOfLines={props.numberOfLines}
          ellipsizeMode={props.ellipsizeMode}
          style={props.style}>
          {props.children}
        </Text>
      );
    case 'Title':
      return (
        <Title style={[styles.title, props.style]}>{props.children}</Title>
      );
    case 'Label':
      return <Text style={[styles.label, props.style]}>{props.children}</Text>;

    case 'Timer':
      return <Text style={[styles.timer, props.style]}>{props.children}</Text>;

    case 'Subheading':
      return (
        <Subheading style={[styles.subheading, props.style]}>
          {props.children}
        </Subheading>
      );
    case 'Paragraph':
      return (
        <Paragraph style={[styles.paragraph, props.style]}>
          {props.children}
        </Paragraph>
      );
    case 'Headline':
      return (
        <Headline id={props.id} style={[styles.headline, props.style]}>
          {props.children}
        </Headline>
      );
    case 'Caption':
      return (
        <Caption {...props} style={[styles.caption, props.style]}>
          {props.children}
        </Caption>
      );
    case 'Body_1':
      return (
        <Text
          numberOfLines={props.numberOfLines}
          style={[styles.body1, props.style]}>
          {props.children}
        </Text>
      );
    case 'Body_2':
      return <Text style={[styles.body2, props.style]}>{props.children}</Text>;
    default:
      return (
        <Text
          style={[styles.default, props.style]}
          numberOfLines={props.numberOfLines}
          ellipsizeMode={props.ellipsizeMode}>
          {props.children}
        </Text>
      );
  }
};

function SMText(props) {
  return renderView(props);
}

SMText.propTypes = {
  type: PropTypes.string,
  numberOfLines: PropTypes.number,
  ellipsizeMode: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.any,
};

SMText.defaultProps = {};

export default SMText;
