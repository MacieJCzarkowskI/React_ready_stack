import * as React from 'react';

import styles from './index.module.scss';
import { userInfoSelectors} from '../../features/userInfo';
import { IUserModel } from '../../models/userInfo/IUserInfo';
import {connect} from "react-redux";

interface IHomePage {
  userInfo: IUserModel;
}

class HomePage extends React.PureComponent<IHomePage> {

  public render() {
    return (
      <div className={styles.homePage}>
        <div>Name: {this.props.userInfo.name}</div>
        <div>Last Name: {this.props.userInfo.lastName}</div>
      </div>
    );
  }
}

export default connect((state: any) => ({
  userInfo: userInfoSelectors.getUserInfo(state)
}))(HomePage);
