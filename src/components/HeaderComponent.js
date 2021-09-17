import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    return (
      <div>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6">
                {props.name}'s TODO List
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default Header;