import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import AppBar from './styles/PaletteFormNavStyles';
import { withStyles } from '@mui/styles';

const styles = {
  navBtns: {},
};

function PaletteFormNav(props) {
  const { classes } = props;
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
        </Toolbar>
        <div className={classes.navBtns}>
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
          </ValidatorForm>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
