import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@mui/styles';

const styles = {
  picker: {
    width: '300px !important',
    marginTop: '2rem',
  },
  addColor: {
    width: '100%',
    padding: '1rem !important',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
    height: '70px',
  },
};

function ColorPickerForm(props) {
  const { colors, currentColor, handleChange, handleUpdateColor, addNewColor, paletteIsFull, colorName, classes } =
    props;

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      //value for text input
      return colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
    });
    ValidatorForm.addValidationRule('isColorUnique', () => {
      //current color for current color being used
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]);

  return (
    <div>
      <ChromePicker className={classes.picker} color={currentColor} onChangeComplete={handleUpdateColor} />

      <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
        <TextValidator
          className={classes.colorNameInput}
          value={colorName}
          variant="filled"
          onChange={handleChange}
          placeholder="Color Name"
          margin="normal"
          name="colorName"
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={['this field is required', 'Color name must be unique!', 'Color must be unique!']}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          type="submit"
          className={classes.addColor}
          style={{ backgroundColor: paletteIsFull ? 'lightGrey' : currentColor }}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}
export default withStyles(styles)(ColorPickerForm);
