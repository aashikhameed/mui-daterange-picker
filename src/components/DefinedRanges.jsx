import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { isSameDay } from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange, DateRange } from '../types';

const isSameRange = (first, second) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

const DefinedRanges = ({
  ranges,
  setRange,
  selectedRange,
}) => (
  <List>
    {ranges.map((range, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem button key={idx} onClick={() => setRange(range)}>
        <ListItemText
          primaryTypographyProps={{
            variant: 'body2',
            style: {
              fontWeight: isSameRange(range, selectedRange)
                ? 'bold'
                : 'normal',
            },
          }}
        >
          {range.label}
        </ListItemText>
      </ListItem>
    ))}
  </List>
);

export default DefinedRanges;
