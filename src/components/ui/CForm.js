import React from 'react';

export class CForm extends React.Component {
  constructor() {
    super();

    this.state = {
      validation: true,
    }
    this.formRef = React.createRef()
    this.childrenRefs = [];
    this.submitBtnRef = null;
  }

  validate() {
    let validation = true;
    this.childrenRefs.forEach(child => ('validate' in child) && (validation = !child.validate()));

    if(!validation && this.state.validation) this.setState({ validation: false })
    else if(validation && !this.state.validation) this.setState({ validation: true })
    return validation;
  }

  getChildrenWithRef() {
    this.childrenRefs = [];
    if(Array.isArray(this.props.children)) {
      return this.props.children.map((child, index) => this.setRefInChildren(child, index));
    } else return this.setRefInChildren(this.props.children, 0);
  }

  setRefInChildren(child, index) {
    const setRef = ref => {
      if(ref) {
        if(child.props.type === 'submit') {
          this.submitBtnRef = ref;
        } else {
          this.childrenRefs.push(ref);
        }
      }
    };

    return React.cloneElement(
      React.Children.only(child),
      { ref: setRef, key: index }
    );
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.props.onSubmit) this.props.onSubmit(e);
  }

  render() {
    return (
      <form ref={this.formRef} className="cs-form" onSubmit={e => this.onSubmit(e)}>
        {this.getChildrenWithRef()}
      </form>
    )
  }
}
