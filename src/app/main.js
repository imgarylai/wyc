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
    maxWidth: 720,
    margin: 'auto',
    marginTop: 20,
  },
  intro: {
    fontSize: '1rem',
    padding: 20,
    lineHeight: 2,
  }
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
            <p style={styles.intro}>
            Hi, I am Andrea, a Taiwanese girl born in Taipei in 1991. <br/>
            I base in London now for my master degree and would go back to Taiwan in Sep, 2016. <br/>
            I am an energetic girl with an aptitude for learning and ability to grasp diverse concepts quickly. <br/>
            I am a good team player who is good at communicating and always being happy to interact with people.
            </p>
            <Education />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
