/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import * as React from "react";
import {
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';

import { combine } from "../utils";

const useStyles = makeStyles((theme) => ({
  leftBorderRadius: {
    borderRadius: "50% 0 0 50%",
  },
  rightBorderRadius: {
    borderRadius: "0 50% 50% 0",
  },
  buttonContainer: {
    display: "flex",
  },
  button: {
    height: 36,
    width: 36,
    padding: 0,
    border: '1px'
  },
  buttonText: {
    lineHeight: 1.6,
  },
  outlined: {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23345CECFF' stroke-width='3' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='33' stroke-linecap='butt'/%3e%3c/svg%3e")`,
  },
  filled: {
    "&:hover": {
      backgroundColor: '#B8BABD',
    },
    backgroundColor: '#B8BABD',
  },
  highlighted: {
    backgroundColor: '#e2e2e2',
  },
  contrast: {
    color: '#54d',
  },
}));

const Day = ({
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
}) => {
  const classes = useStyles();

  return (
    <div
      className={combine(
        classes.buttonContainer,
        startOfRange && classes.leftBorderRadius,
        endOfRange && classes.rightBorderRadius,
        !disabled && highlighted && classes.highlighted
      )}
    >
      <IconButton
        className={combine(
          classes.button,
          !disabled && outlined && classes.outlined,
          !disabled && filled && classes.filled
        )}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        <Typography
          color={!disabled ? "textPrimary" : "textSecondary"}
          className={combine(
            classes.buttonText,
            !disabled && filled && classes.contrast
          )}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default Day;
