import React from 'react';
import styled, {withTheme} from 'styled-components/native';
import PropTypes from 'prop-types';

const DefaultText = styled.Text`
  font-family: ${({theme, type}) => {
    if (type === 'bold') {
      return theme.fonts.bold;
    }
    if (type === 'semi-bold') {
      return theme.fonts.semi_bold;
    }
    return theme.fonts.regular;
  }};
`;

const Text = props => {
  const {style} = props;
  if (style && style.fontWeight) {
    return <DefaultText type={style.fontWeight} {...props} />;
  }
  return <DefaultText {...props} />;
};

Text.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Text.defaultProps = {
  style: null,
};

export default withTheme(Text);
