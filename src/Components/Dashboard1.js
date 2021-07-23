import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import images from '../Properties/images'
import dashBack from '../Images/dashBackground.jpg'
import DashboardNav from './DashBoardNav';
import  CardHeader  from '@material-ui/core/CardHeader';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import Sig from '../Images/SignIn.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [0,1,2,3,4,5];

export default function Dashboard(props) {
  const classes = useStyles();
  if(props.info != undefined){
    return (
        <React.Fragment>
          <CssBaseline />
          <DashboardNav/>
          <div style={{backgroundImage:`url(${Sig})`}}>
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent} style={{backgroundImage:`url(${Sig})`}}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                </Typography>
                <Typography  style={{color:"white"}} variant="h2" align="center" color="textSecondary" paragraph>
                 Welcome back {props.name} , here are some  recommendations with highest ratings 
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={10}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
      <CardHeader
        title={props.info[card].name}
        variant="h1"
      />
      <hr style={{color:"black"}}/>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h3> This is the {card+1} top most recommendation for you {props.name} . </h3>
          <h3>Rating-</h3>
          <h4>{props.info[card].est}</h4>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button aria-label="add to favorites">
          Buy
        </Button>
        <Button aria-label="share">
           View
        </Button>
        <Button
          
        >
          <ExpandMoreIcon />
        </Button>
      </CardActions>
    
    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          </div>
          {/* Footer */}
          {/* End footer */}
        </React.Fragment>
      );

  }
  else{
      return(
          <div>
              Loading
          </div>
      )
  }
 
}