import PropTypes from 'prop-types';

const Preview = ({ value }) => {
  return String(value)
}

Preview.propTypes = {
  value: PropTypes.node,
}

export default Preview
