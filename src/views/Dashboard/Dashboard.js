import React from 'react'
import Grid from '@material-ui/core/Grid';
import {DashboardItem} from "./components/DashboardItem";

export class Dashboard extends React.Component {
  constructor() {
    super();

    this.items = [
      {
        id: 0,
        title: 'JavaScript',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
        categories: ['JavaScript', 'React'],
        theme: [],
      },
    ];
  }

  render() {
    return (
      <Grid container spacing={3}>
        {this.items.map((item, index) => (<Grid key={item.id} xs={4} item><DashboardItem item={item} /></Grid>))}
      </Grid>
    )
  }
}
