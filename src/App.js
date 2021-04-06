import React from 'react';
import { connect } from 'react-redux';
import RouterView from './router';

import LHeader from "./components/layouts/LHeader";
import LDialog from "./components/layouts/LDialog";
import LLoader from "./components/layouts/LLoader";

import Fire from './plugins/Firebase'
import { setAppLoading, setIsLogged, setIsAppElVisible } from "./store/reducers/root";

class App extends React.Component{
  constructor() {
    super();
  }

  componentDidMount() {
    this.getLoginStatus()
  }

  getLoginStatus() {
      this.props.setAppLoading(true);
      Fire.checkAuth().then(() => {
          this.props.setIsLogged(true);
          this.props.setIsAppElVisible(true);
      }).catch(e => console.dir(e));
          // .finally(() => this.props.setAppLoading(false))
  }

  render() {
    return (
      <div className="application">
        <LHeader hasLogin={this.props.isLogged} />
        <main className="application__content">
          <RouterView />
        </main>
        <LLoader open={this.props.appLoading} />
        <LDialog />
      </div>
    );
  }
}


const mapStateToProps = state => ({
    isLogged: state.root.isLogged,
    appLoading: state.root.appLoading,
    isAppElVisible: state.root.isAppElVisible,
});

const mapDispatchToProps = () => ({
    setIsLogged,
    setAppLoading,
    setIsAppElVisible
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

