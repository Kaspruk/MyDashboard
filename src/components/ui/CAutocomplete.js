import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {Field} from "./base/Field";

export class CAutocomplete extends Field{
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      items: [
        {title: 'Value 1', value: 1},
        {title: 'Value 2', value: 2},
        {title: 'Value 3', value: 3},
        {title: 'Value 4', value: 4}
      ],
      loading: true,
    }
  }

  render() {
    return (
      <Autocomplete
        value={this.props.value}
        options={this.state.items}
        onChange={(event, newVal) => this.handleChange(event, newVal)}
        getOptionLabel={(option) => typeof option==='string' ? option : option.title}
        renderInput={(params) => {
          return (<TextField
            {...params}
            error={this.state.error}
            label={this.props.label}
            helperText={this.state.helperText}
            required={this.props.required || false}
            variant="outlined" />)
        }}
      />
    )
  }
}
