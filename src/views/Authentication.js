import React from 'react'

import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { CForm } from "../components/ui/CForm";
import firebase from "../plugins/Firebase";

export class Authentication extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: ''
      },
      isLogin: true,
    }

    this.form = React.createRef()
  }

  setUserData(field, value) {
    this.setState((state) => ({
      ...this.state,
      user: {
        ...state.user,
        [field]: value,
      }
    }))
  }

  onAuth() {
    if(this.form.current.validate()){
      firebase.auth()[`${this.state.isLogin ? 'createUserWithEmailAndPassword' : 'signInWithEmailAndPassword'}`](this.state.user.email, this.state.user.password)
        .then(console.dir)
        .catch((code, error) => {
          console.log(code, error);
        })
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isLogin: this.props.location.pathname==='/login'
    })
  }

  render() {
    return (
      <Grid spacing={3} justify="center" container>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5">{this.state.isLogin ? 'Реєстрація' : 'Авторизація'}</Typography>
          <CForm ref={this.form} onSubmit={() => this.onAuth()}>
            <Button
              style={{marginTop: 25}}
              fullWidth={true}
              color="primary"
              variant="contained"
              type="submit">
              Відправити
            </Button>
          </CForm>
        </Grid>
      </Grid>
    )
  }
}
