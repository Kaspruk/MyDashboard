import React from "react";
import Table from "@material-ui/core/Table";
import {Header} from './Header'
import {Body} from './Body'
import {Footer} from './Footer'

export class CTable extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      headers: [],
      tableParams: {
        sortBy: null,
        sortDesc: null,
        page: 0,
        itemsPerPage: 10,
        itemsLength: -1,
      },
      footerProps: {
        'items-per-page-options': [10, 20, 50, { label: 'Всі', value: -1 }]
      },
      subArrItems: [],
      loading: false,
    }

  }

  static Column = function Column(props) {
    return props.render({
      onClick: () => props.onClick({item: props.item, index: props.index})
    })
  }

  componentDidMount() {
    this.createHeadersParams(this.props.headers)
  }

  shouldComponentUpdate(nextProps) {
    if('loading' in nextProps && this.state.loading !== nextProps.loading) this.setState({ ...this.state, loading: nextProps.loading })

    if(this.props.items !== nextProps.items) {
      this.setState({
        ...this.state,
        subArrItems: this.createItemsSubArrays(nextProps.items),
        tableParams: {
          ...this.state.tableParams,
          itemsLength: nextProps.items.length
        }
      })
    }
    return true;
  }

  createHeadersParams(headers) {
    if(headers && headers.length) {
      this.setState({
        ...this.state,
        headers: headers.map(head => {
          head.hidden = !head.value;

          if(head.sortBy) this.setState({
            ...this.state,
            tableParams: {
              sortBy: head.value,
              sortDesc: true,
              ...this.state.tableParams
            }
          })

          if(!('align' in head)) head.align = 'left';

          return head;
        })
      })
    }
  }

  createItemsSubArrays(items = this.props.items, perPageItems = this.state.tableParams.itemsPerPage) {
    let subArrItems = [];

    if(items.length > perPageItems && perPageItems !== -1) {
      let startIndex = 0;

      while (items[startIndex]) {
        if(items[startIndex+perPageItems]) subArrItems.push(items.slice(startIndex, startIndex+perPageItems))
        else subArrItems.push(items.slice(startIndex))
        startIndex+=perPageItems
      }
    } else subArrItems = [items]

    return subArrItems;
  }

  onSort(columnKey) {
    let sortBy = [columnKey];
    let sortDesc;

    if(this.state.tableParams.sortBy) {
      const sortParamsIndex = this.state.tableParams.sortBy.indexOf(columnKey)
      if(~sortParamsIndex) {
        if(this.state.tableParams.sortDesc[sortParamsIndex]) {
          sortBy = null;
          sortDesc = null;
        } else sortDesc = [true];
      } else sortDesc = [false];
    } else sortDesc = [false];

    this.setState({
      ...this.state,
      subArrItems: this.sortItems(sortBy, sortDesc),
      tableParams: {
        ...this.state.tableParams,
        sortBy,
        sortDesc,
      }
    })
  }

  sortItems(sortBy, sortDesc) {
    const copyItems = this.props.items.slice(0);
    if(sortBy) {
      copyItems.sort((current, next) => {
        let result = 0;
        sortBy.forEach((key, index) => {
          const res = sortDesc[index] ? current[key] - next[key] : next[key] - current[key];
          if(!result) result = res;
        })
        return result;
      })
    }
    return this.createItemsSubArrays(copyItems)
  }

  onChangePage(page) {
    this.setState({
      ...this.state,
      tableParams: {
        ...this.state.tableParams,
        page,
      }
    })
  }

  onChangeItemsPerPage(itemsPerPage) {
    this.setState({
      ...this.state,
      tableParams: {
        ...this.state.tableParams,
        itemsPerPage: itemsPerPage.target.value,
      },
      subArrItems: this.createItemsSubArrays(this.props.items, itemsPerPage.target.value)
    })
  }

  render() {
    return (
      <Table aria-label="main table">
        {!!this.state.headers.length && <Header headers={this.state.headers} params={this.state.tableParams} onSort={columnKey => this.onSort(columnKey)} />}
        <Body {...this.state} {...this.props} items={this.state.subArrItems[this.state.tableParams.page] || []} />
        <Footer
          {...this.state}
          onChangePage={page => this.onChangePage(page)}
          onChangeItemsPerPage={itemsPagePage => this.onChangeItemsPerPage(itemsPagePage)} />
      </Table>
    )
  }
}
