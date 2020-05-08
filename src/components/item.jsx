import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "typeface-roboto";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
});

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={3}>
              <img
                className={classes.img}
                alt="complex"
                src="https://static.ankama.com/dofus-touch/www/game/items/200/23002.png"
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper} elevation={3}>
              <div className={classes.root}>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button>Daily Graph</Button>
                  <Button>Hourly Graph</Button>
                </ButtonGroup>
              </div>
              <LineChart width={1100} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Item);
