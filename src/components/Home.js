import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import MyPaper from "./custom/MyPaper";
import React from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
});

const Home = (props) => {
  const classes = useStyles();
  //use box padding to counteract grid spacing (default: spacing x 4 )
  return (
    <Box padding="8px">
      <Grid
        id="home-grid"
        className={classes.root}
        container
        justify="center"
        spacing={2}
      >
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <MyPaper>
            <Typography variant="h4">Welcome to Dope Hat</Typography>
          </MyPaper>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <MyPaper>
            <Typography varient="body1">
              Dope Hat is a site built to allow small developer teams to track
              progress on their projects in a mobile optomized interface (not
              really yet but it will be).
            </Typography>
          </MyPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
