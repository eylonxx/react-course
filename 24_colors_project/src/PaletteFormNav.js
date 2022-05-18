import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link, useNavigate } from 'react-router-dom';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 400;

export default function PaletteFormNav(props) {
  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
    });
  }, [props.palettes]);
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" color="default" open={props.open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Create A Palette
          </Typography>
          <ValidatorForm style={{ display: 'flex' }} onSubmit={props.handleSubmit}>
            <TextValidator
              label="Palette name"
              value={props.paletteName}
              name="paletteName"
              onChange={props.handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter a palette name!', 'Palette name already taken!']}
            />
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
}
