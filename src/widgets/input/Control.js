import PropTypes from "prop-types";
import React from "react";
import Input from 'antd/lib/input'
import 'antd/lib/input/style'

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
    const { forID, value, classNameWrapper, onChange } = this.props;

    return (
      <Input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    )
  }
}
