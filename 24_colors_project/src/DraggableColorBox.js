import React from 'react';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
  },
  deleteIcon: {
    '&svg': {
      transition: 'all 1.3s ease-in-out',
    },
  },
  boxContent: {
    boxSizing: 'border-box',
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0',
    bottom: '0',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
const DraggableColorBox = SortableElement((props) => {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.color} - {props.name}
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <span className={classes.deleteIcon}>
          <DeleteIcon onClick={props.handleClick} />
        </span>
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);
