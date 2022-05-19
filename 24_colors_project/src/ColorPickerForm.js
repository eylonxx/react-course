import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function ColorPickerForm(props) {
  const { colors, currentColor, handleChange, handleUpdateColor, addNewColor, paletteIsFull, colorName } = props;

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
      <ChromePicker color={currentColor} onChangeComplete={handleUpdateColor} />

      <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
        <TextValidator
          value={colorName}
          onChange={handleChange}
          name="colorName"
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={['this field is required', 'Color name must be unique!', 'Color must be unique!']}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          type="submit"
          style={{ backgroundColor: paletteIsFull ? 'lightGrey' : currentColor }}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}
