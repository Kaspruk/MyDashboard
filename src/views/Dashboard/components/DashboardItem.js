import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";


export class DashboardItem extends React.Component {
  constructor(item) {
    super();
  }

  selectCategory(e) {
    console.dir(e);
  }

  openDetail() {
    console.log(this)
  }

  render() {
    return (
      <div className="dashboard-item">
        <div className="dashboard-item__header">
          <span className="dashboard-item__title">{this.props.item.title}</span>
        </div>
        <div className="dashboard-item__body">
          <pre dangerouslySetInnerHTML={ {__html: this.props.item.description} } />
        </div>
        {this.props.item.categories.map(category => {
          return (
            <Chip
              key={category}
              color="primary"
              label={category}
              avatar={<Avatar>{category.charAt(0).toUpperCase()}</Avatar>}
              onClick={() => this.selectCategory(category)} />
          )
        })}
        <Divider />
        <Button onClick={() => this.openDetail()}>default</Button>
      </div>
    )
  }
}
