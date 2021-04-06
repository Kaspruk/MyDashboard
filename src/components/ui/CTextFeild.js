import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import React from "react";

export class CTextField extends React.Component {
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
        error: true,
        errorMessage: ruleResult.message,
        helperText: ruleResult.message,
      })
    } else if(!ruleResult.error && this.state.error) {
      this.setState({
        error: false,
        errorMessage: '',
        helperText: this.props.helperText || '',
      })
    }

    return ruleResult.error;
  }

  handleChange(event) {
    this.value = event.target.value;
    this.validate();
    if(this.props.onChange) this.props.onChange(event);
  }

  handleBlur(event) {
    this.value = event.target.value;
    this.validate();
    if(this.props.onBlur) this.props.onBlur(event);
  }

  render() {
    return (
      <FormControl error={this.state.error} required={this.props.required || false}>
        {this.props.label && <InputLabel>{this.props.label}</InputLabel>}
        <Input
          value={this.props.value}
          onBlur={event => this.handleBlur(event)}
          onChange={event => this.handleChange(event)} />
        {this.state.helperText && <FormHelperText>{this.state.helperText}</FormHelperText>}
      </FormControl>
    )
  }
}
