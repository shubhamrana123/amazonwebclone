import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BoatImage from '../../assets/amazon-content/boat.jpg' 
import CardHeader from '@mui/material/CardHeader/CardHeader';
import { Grid } from '@mui/material';
export const OfferCard = () => {
    const offerDetail = [
        {id:1,item:'electroncs',title:"Up to 75% off | Headphones"},
        {id:2,item:'style',title:'Up to 60% off | Styles for men'},
        {id:3,item:'tv',title:'Get the perfect screen size | TVs Starting ₹6,999'},
        {id:4,item:'home-improvement',title:'Starting ₹99 | All your home improvement needs'},
        {id:5,item:'amazon-brand',title:'Up to 60% off | Amazon Brands & more'},
        {id:6,item:'home-appliances',title:'Appliances for your home | Up to 55% off'},
        {id:7,item:'home-style',title:'Revamp your home in style'},
        {id:8,item:'automative-essentials',title:'Automotive essentials | Up to 60% off'}
    ]
  return (
    <Grid container p={2} spacing={2} rowGap={2}>
{offerDetail?.map((item:any)=>(
    <Grid item xs={12}  sm={6} md={4} lg={3}>
    <Card  sx={{ maxWidth: 300 }} >
              <CardHeader
      
      
      title={item?.title}
    //   subheader="September 14, 2016"
    />

      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={BoatImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

))}

    </Grid>
   
  );
}
