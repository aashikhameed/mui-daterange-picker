import React from "react";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { format, differenceInCalendarMonths } from "date-fns";
import { ArrowRightAlt } from "@mui/icons-material";
import Month from "./Month";
import DefinedRanges from "./DefinedRanges";

import { MARKERS } from "./DateRangePicker";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "10px 70px",
  },
  headerItem: {
    flex: 1,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    borderLeft: `1px solid #e2e2e2`,
    marginBottom: 20,
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
    showHeader,
  } = props;

  const { startDate, endDate } = dateRange;
  const canNavigateCloser =
    differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers,
  };
  return (
    <Paper elevation={5} sx={{zIndex: 99}}>
      <Grid container direction="row" wrap="nowrap">
        <Grid>
          <Grid container className={classes.header} alignItems="center">
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {startDate ? format(startDate, "MMMM DD, YYYY") : "Start Date"}
              </Typography>
            </Grid>
            <Grid item className={classes.headerItem}>
              <ArrowRightAlt color="action" />
            </Grid>
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {endDate ? format(endDate, "MMMM DD, YYYY") : "End Date"}
              </Typography>
            </Grid>
          </Grid>
          <Divider />

          <Grid container direction="row" justifyContent="center" wrap="nowrap">
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
            />
            <div className={classes.divider} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
            />
          </Grid>
        </Grid>
        {ranges.length > 0 ? (
          <>
            <div className={classes.divider} />
            <Grid>
              <DefinedRanges
                selectedRange={dateRange}
                ranges={ranges}
                setRange={setDateRange}
              />
            </Grid>
          </>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default Menu;
