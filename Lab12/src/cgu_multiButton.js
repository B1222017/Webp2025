// multiButton.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + " 被點了";
};

const MultiButton = (num) => {
  return (
    <>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={changeText}>
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" aria-label="delete" onClick={changeText}>
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm" onClick={changeText}>
        <AlarmIcon />
      </IconButton>
    </>
  );
};

export default MultiButton;
