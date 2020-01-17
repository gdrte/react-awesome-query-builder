import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Col } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export default class TextareaWidget extends PureComponent {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    config: PropTypes.object.isRequired,
    value: PropTypes.string,
    field: PropTypes.string.isRequired,
    customProps: PropTypes.object,
  };

  handleChange = (ev) => {
    const v = ev.target.value;
    const val = v === '' ? undefined : v; // don't allow empty value
    this.props.setValue(val);
  }

  render() {
    const {config, placeholder, customProps, value} = this.props;
    const {renderSize} = config.settings;
    const _value = value != undefined ? value : null;
    const _customProps = customProps || {};    

    return (
      <Col style={{width:_customProps.width}}>
        <TextArea          
          key="widget-textarea"
          size={renderSize}
          ref="text"
          rows={4}
          type={"text"}
          value={_value}
          placeholder={placeholder}
          onChange={this.handleChange}
          {...customProps}
        />
      </Col>
    );
  }
}