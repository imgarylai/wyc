/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Bar from './Bar';
import Education from './Education';

const styles = {
  bar: {
    textAlign: 'center',
  },
  container: {
    maxWidth: 700,
    margin: 'auto',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div style={styles.bar}>
            <Bar />
          </div>
          <div style={styles.container}>
            <Education />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
