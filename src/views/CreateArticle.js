import React from "react";
import Fire from "../plugins/Firebase"

import Grid from '@material-ui/core/Grid'

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import {CAutocomplete} from "../components/ui/CAutocomplete";

export class CreateArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      category: '',
      subCategory: '',
      folder: '',
      tags: '',
    }
  }

  onChangeCategory(newValue){
    this.setState({
      ...this.state,
      category: newValue
    })
  }

  componentDidMount() {
    Fire.firestore.collection('articles').get().then(response => {
      const results = [];
      response.forEach(result => {
        const data = result.data();
        data['id'] = result.id
        results.push(data)
      });
      console.log(results)
    })
  }

  render() {
    return (
      <Grid container>
        <Grid spacing={3} justify="center" container>
          <Grid item xs={12} sm={6} md={3}>
            <CAutocomplete
              value={this.state.category}
              rules={[ v => !!v || 'Це поле является обов\'язковим' ]}
              url="someUrl"
              label="Категорія"
              onChange={(value) => this.onChangeCategory(value)}/>
          </ Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CAutocomplete
              value={this.state.subCategory}
              rules={[ v => !!v || 'Це поле является обов\'язковим' ]}
              url="someUrl"
              label="Субкатегорія"
              onChange={(value) => this.onChangeCategory(value)}/>
          </ Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CAutocomplete
              value={this.state.folder}
              rules={[ v => !!v || 'Це поле является обов\'язковим' ]}
              url="someUrl"
              label="Папка"
              onChange={(value) => this.onChangeCategory(value)}/>
          </ Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CAutocomplete
              value={this.state.tags}
              rules={[ v => !!v || 'Це поле является обов\'язковим' ]}
              url="someUrl"
              label="Теги"
              onChange={(value) => this.onChangeCategory(value)}/>
          </ Grid>
          <Grid item xs={12}>
            <SunEditor />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
