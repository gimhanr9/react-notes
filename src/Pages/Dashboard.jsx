import clsx from 'clsx';
import { makeStyles, Typography } from "@material-ui/core";
import Graph from "../Components/Dashboard/Graph";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Operations from '../Components/Dashboard/Operations';
import Customer from '../Components/Dashboard/Customer';
import TopEats from '../Components/Dashboard/TopEats';
import TopSelling from '../Components/Dashboard/TopSelling';

const useStyle=makeStyles((theme)=>({

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },

      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      graphHeight: {
        height: 460,
      },

      operationsHeight:{
          height:420

      },

}));


function DashBoard(){
    const classes=useStyle();
    const heightGraphPaper = clsx(classes.paper, classes.graphHeight);
    const heightOperationsPaper = clsx(classes.paper, classes.operationsHeight);
    return(
        <Container maxWidth="lg" className={classes.Container}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={heightGraphPaper}>
                <Graph />
              </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
              <Paper className={heightOperationsPaper}>
                <Operations />
              </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <TopEats />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <Paper className={classes.paper}>
                <TopSelling />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
                <Paper className={classes.paper}>
                    <Customer />
                </Paper>
            </Grid>


            </Grid>

        </Container>

            

        
    );

}

export default DashBoard;