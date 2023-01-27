import * as React from 'react';
import { StylesProvider } from '@mui/material/styles';

// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, { DateRangePickerWrapperProps } from './DateRangePickerWrapper';
import generateClassName from '../generateClassName';

const DateRangePickerExporter= (
  props,
) => (
  <StylesProvider generateClassName={generateClassName}>
    <DateRangePickerWrapper
      {...props}
    />
  </StylesProvider>
);

export default DateRangePickerExporter;
