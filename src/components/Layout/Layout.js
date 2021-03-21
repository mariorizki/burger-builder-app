import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = props => (
  <React.Fragment>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
