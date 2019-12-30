import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MatCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ children, child, label }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <MatCard className={classes.card}>
      <CardContent>
        <Typography component="div">
          <Box fontWeight="fontWeightRegular" m={1}>
            {label}
          </Box>
        </Typography>
        {children}
      </CardContent>
    </MatCard>
  );
}


// <CardContent>
// <Typography className={classes.title} color="textSecondary" gutterBottom>
//   Word of the Day
// </Typography>
// <Typography variant="h5" component="h2">
//   be
//   {bull}
//   nev
//   {bull}o{bull}
//   lent
// </Typography>
// <Typography className={classes.pos} color="textSecondary">
//   adjective
// </Typography>
// <Typography variant="body2" component="p">
//   well meaning and kindly.
//   <br />
//   {'"a benevolent smile"'}
// </Typography>
// </CardContent>
// <CardActions>
// <Button size="small">Learn More</Button>
// </CardActions>