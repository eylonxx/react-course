import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AppBar from './styles/PaletteFormNavStyles';
import { withStyles } from '@mui/styles';
import PaletteMetaForm from './PaletteMetaForm';

const styles = {
  navBtns: {},
};

function PaletteFormNav(props) {
  const { classes } = props;

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
          <PaletteMetaForm
            handleSubmit={props.handleSubmit}
            palettes={props.palettes}
            paletteName={props.paletteName}
            handleChange={props.handleChange}
          />
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
