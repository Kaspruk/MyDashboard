import React from 'react';
import {
  Dialog as MaterialDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const components = {
  CategoryForm: require('../dialogs/CategoryForm'),
}

export default class LDialog extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    this.component = this.props.component && components[this.props.component].default();
  }

  handleClose() {
    this.setState({
      ...this.state,
      isOpen: false,
    })
  }

  handleOpen() {
    this.setState({
      ...this.state,
      isOpen: true,
    })
  }

  render() {
    return (
      <MaterialDialog
        open={this.state.isOpen}
        onClose={() => this.handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleClose()} color="primary">
            Disagree
          </Button>
          <Button onClick={() => this.handleClose()} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </MaterialDialog>
    )
  }

}
