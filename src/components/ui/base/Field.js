import React from "react";

export class Field extends React.Component {
  constructor(props) {
    super();
    this.rules = props.rules || [];
    this.value = props.value;

    this.state = {
      error: false,
      errorMessage: '',
      helperText: props.helperText || '',
    }
  }

  validate() {
    const ruleResult = {
      error: false,
      message: ''
    }

    for(let i = 0; i < this.rules.length; i++) {
      const result = this.rules[i](this.value);
      if(typeof result === 'string') {
        ruleResult.error = true;
        ruleResult.message = result;
        break;
      }
    }

    if(ruleResult.error && this.state.error !== ruleResult.message) {
      this.setState({
        ...this.state,
        error: true,
        errorMessage: ruleResult.message,
        helperText: ruleResult.message,
      })
    } else if(!ruleResult.error && this.state.error) {
      this.setState({
        ...this.state,
        error: false,
        errorMessage: '',
        helperText: this.props.helperText || '',
      })
    }

    return ruleResult.error;
  }

  handleChange(event, value) {
    event.persist();
    this.value = value ? value==='clear' ? null : value : event.target.value;
    this.validate();
    if(this.props.onChange) this.props.onChange(this.value);
  }
}
