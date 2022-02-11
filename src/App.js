import "./App.css";
import { Route, withRouter } from "react-router-dom";
// import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { NavBarContainer } from "./components/Navbar/NavBarContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import { Preloader } from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Navbar/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBarContainer />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
          </Suspense>
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
