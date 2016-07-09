import React, { Component } from 'react';
import uuid from 'uuid';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { darkBlack } from 'material-ui/styles/colors';

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
        <Subheader>Education</Subheader>
        {state.educations.map(education =>
          <ListItem
            key={education.id}
            primaryText={education.university}
            secondaryText={
              <p>
                <span style={{color: darkBlack}}> {education.degree} </span><br />
                {education.duration}
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
