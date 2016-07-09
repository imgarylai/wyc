import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Bar = () => (
  <AppBar
    title={<span style={styles.title}>Wei-Yu Chen</span>}
    showMenuIconButton={false}
  />
);

export default Bar;
