import PropTypes from 'prop-types';
import React from 'react';

const Preview = ({ value, getAsset }) => {
  return <div dangerouslySetInnerHTML={{ __html: getParsedHtml(value, getAsset) }} />
}

Preview.propTypes = {
  value: PropTypes.node,
}

export default Preview
