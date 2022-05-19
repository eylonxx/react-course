import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { withStyles } from '@mui/styles';

const drawerWidth = 400;

const styles = {
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
  },
  button: {
    width: '50%',
  },
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  height: 'calc(100vh - 64px)',
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

NewPaletteForm.defaultProps = {
  maxColors: 20,
};

function NewPaletteForm(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('#404040');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [name, setName] = useState({
    colorName: '',
    paletteName: '',
  });
  const { classes } = props;
  const paletteIsFull = colors.length === props.maxColors;
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUpdateColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleChange = (e) => {
    //handles color name or palette name changes
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const addNewColor = () => {
    const newColor = { color: currentColor, name: name.colorName };
    setColors([...colors, newColor]);
    setName({ colorName: '', paletteName: '' });
  };

  const removeColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const handleSubmit = () => {
    let newName = name.paletteName;
    const newPalette = { paletteName: newName, id: newName.toLowerCase().replace(/ /g, '-'), colors: colors };
    props.savePalette(newPalette);
    navigate('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors((colors) => [...colors, randomColor]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav
        open={open}
        palettes={props.palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
        handleChange={handleChange}
        paletteName={name.paletteName}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open} //state
      >
        <DrawerHeader>
          {/* close icon */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="error" onClick={clearColors}>
              Clear Palette
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={paletteIsFull}
              onClick={addRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            handleUpdateColor={handleUpdateColor}
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            handleChange={handleChange}
            currentColor={currentColor}
            colorName={name.colorName}
            colors={colors}
          />
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList distance={1} colors={colors} removeColor={removeColor} axis="xy" onSortEnd={onSortEnd} />
      </Main>
    </Box>
  );
}
export default withStyles(styles)(NewPaletteForm);
