import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './styles/HeaderStyles.css'
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';

const Header = (props) => {
    return (
      <div>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <div className="header">
                {props.name}'s TODO List
            </div>
            <AssignmentTurnedInRoundedIcon></AssignmentTurnedInRoundedIcon>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default Header;