import React, { Component } from 'react';
import uuid from 'uuid';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { darkBlack } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const styles = {
  header: {
    color: darkBlack,
  },
  iconStyle: {
    marginRight: 5,
  },
}

const SchoolIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
  </SvgIcon>
)

const state = {
  educations: [
    {
      id: uuid.v4(),
      university: 'Glasgow Caledonian University London',
      duration: 'Sep, 2015- now',
      degree: 'MSc of Luxury Brand Marketing'
    },
    {
      id: uuid.v4(),
      university: 'National Cheng Kung University, NCKU',
      duration: 'June, 2011-June, 2014',
      degree: 'Bachelor of Foreign Language and Literature (Majored in French)'
    }
  ]
};

class Education extends Component {
  render() {
    return (
      <List>
        <Subheader style={styles.header} ><SchoolIcon style={styles.iconStyle} />Education</Subheader>
        {state.educations.map(education =>
          <ListItem
            key={education.id}
            primaryText={education.university}
            secondaryText={
              <p>
                <span style={{color: darkBlack}}>{education.duration}</span><br />
                {education.degree}
              </p>
            }
            secondaryTextLines={2}
          />
        )}
      </List>
    );
  }
}

export default Education;
