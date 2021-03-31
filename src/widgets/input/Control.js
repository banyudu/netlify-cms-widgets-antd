import PropTypes from "prop-types";
import React from "react";

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  };

  static defaultProps = {
    value: "",
  };

  state = {
  }

  render() {
    const { forID, value, classNameWrapper } = this.props;

    return (<div />);
  }
}
