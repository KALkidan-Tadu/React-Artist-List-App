import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import useFetch from "./useFetch";
import "./details.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// const RecipeReviewCard = () =>{
//   const [expanded, setExpanded] = React.useState(false);
// }
const collapseRest = (expandes, expandeds, setSize) => {
    if (expandes == false){
        // setSize([1,1,2])
        for(let i = 0; i<5; i+=1){
            if(expandes != expandeds[i][0]){
                expandeds[i][1](!expandeds[i][0])
            }
        }
    }
    // else{
    //     setSize([1,1,1])
    // }
}
const fetchData = async (link) => {
    let data = ""
    let err = ""
    let loading = true
    try {
      const response = await fetch(link);
      const jsonData = await response.json();
      data = jsonData;
    } catch (error) {
      err = error;
    } finally {
      loading = false;
    }
    return {data, err, loading};
  };


const ArtistDetails = () => {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [size, setSize] = React.useState([1,1,1]);
    const [films, setFilms ] = React.useState([]);
    const [species, setSpecies ] = React.useState([]); 
    const [vehicles, setVehicles ] = React.useState([]);
    const [starships, setStarships ] = React.useState([]);
    const [home, setHome ] = React.useState([]);
    const expandeds = [[expanded1, setExpanded1], [expanded2, setExpanded2], [expanded3, setExpanded3], [expanded4, setExpanded4], [expanded5, setExpanded5]];
  const { id } = useParams();
  const { data: artist, error, isPending } = useFetch('https://swapi.dev/api/people/' + id);

  
  const history = useNavigate();
  React.useEffect( () => {
        if (artist) {
          artist.films.forEach(async(film, index) => {
            const { data, error, loading } = await fetchData(film);
            if (!loading && !error && data) {
              setFilms(arr => [...arr, data.title]);
            }
          });
}},[artist])
          
  React.useEffect( () => {
    if(artist){
          artist.species.forEach(async(spec, index) => {
            const { data, err, load } = await fetchData(spec);
            if (!load && !err && data) {
                setSpecies(arr => [...arr, data.name]);
            }
          });}
    },[artist])

  React.useEffect( () => {
    if(artist){
   artist.vehicles.forEach(async(vehicle, index) => {
            const { data: v, er, ld } = await fetchData(vehicle);
            if (!ld && !er && v) {
                setVehicles(arr => [...arr, v.name]);
            }
          });}
    },[artist])

  React.useEffect( () => {
        if (artist) {
              artist.starships.forEach(async(starShip, index) => {
            const { data: star, e, l } = await fetchData(starShip);
            if (!l && !e && star) {
                setStarships(arr => [...arr, star.name]);
            }
        });}
    },[artist])
    React.useEffect( () => {
        if (artist) {
            const find  = async () => {
            const { data, e, l } = await fetchData(artist.homeworld);
            if (!l && !e && data) {
                setHome(data.name);
            }
        }
        find()
    
    }},[artist])

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { artist && (
            <div className="details" key={id}>
              <div className="big-img">
                <Grid direction="column">
                <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                <Grid>
                <h1>{ artist.name }</h1>
                </Grid>
                <Grid className="grid">
                <p>Height: { artist.height }</p>
                </Grid>
                <Grid className="grid">
                <p>Weight: { artist.mass }</p>
                </Grid>
                <Grid className="grid">
                <p>Hair Color: { artist.hair_color }</p>
                </Grid>
                <Grid className="grid">
                <p>Skin Color: { artist.skin_color }</p>
                </Grid>
                <Grid className="grid">
                <p>Eye Color: { artist.eye_color }</p>
                </Grid>
                <Grid className="grid">
                <p>Birth Date: { artist.birth_date }</p>
                </Grid>
                <Grid className="grid">
                <p>Gender: { artist.gender }</p>
                </Grid>
                </Stack>
                </Box>
                </Grid>
              </div>

              <div className="box">
              <Box component="span"
    sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.8)' }}>
        <Grid flex container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 3, md: 3 }} direction="row">
        <Grid item xs={size[0]} sm={size[1]} md={size[2]}>
                <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                    title="Films"
                />

                <CardActions disableSpacing>
                    <ExpandMore
                    expand={expanded1}
                    onClick={() => {setExpanded1(!expanded1); collapseRest(expanded1, expandeds, setSize)}}
                    aria-expanded={expanded1}
                    aria-label="show more"
                    >
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                    <CardContent>
                        { films.map( (film, index) => (

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                       { film }
                    </Typography>
                        ))}
                    </CardContent>
                </Collapse>
                </Card>
                </Grid>
                <Grid item xs={size[0]} sm={size[1]} md={size[2]}>
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Species"
                />

                <CardActions disableSpacing>
                    <ExpandMore
                    expand={expanded2}
                    onClick={() => {setExpanded2(!expanded2); collapseRest(expanded2, expandeds, setSize)}}
                    aria-expanded={expanded2}
                    aria-label="show more"
                    >
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                    <CardContent>
                    { species.map( (spec, index) => (

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { spec }
                    </Typography>
                        ))}
                    </CardContent>
                </Collapse>
                </Card>
                </Grid>
                <Grid item xs={size[0]} sm={size[1]} md={size[2]}>
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Vehicles"
                />

                <CardActions disableSpacing>
                    <ExpandMore
                    expand={expanded3}
                    onClick={() => {setExpanded3(!expanded3); collapseRest(expanded3, expandeds, setSize)}}
                    aria-expanded={expanded3}
                    aria-label="show more"
                    >
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                    <CardContent>
                    { vehicles.map( (vehicle, index) => (

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { vehicle }
                    </Typography>
                        ))}
                    </CardContent>
                </Collapse>
                </Card>
                </Grid>
                <Grid item xs={size[0]} sm={size[1]} md={size[2]}>
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="StarShips"
                />

                <CardActions disableSpacing>
                    <ExpandMore
                    expand={expanded4}
                    onClick={() => {setExpanded4(!expanded4); collapseRest(expanded4, expandeds, setSize)}}
                    aria-expanded={expanded4}
                    aria-label="show more"
                    >
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded4} timeout="auto" unmountOnExit>
                    <CardContent>
                    { starships.map( (starShip, index) => (

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { starShip }
                    </Typography>
                        ))}
                    </CardContent>
                </Collapse>
                </Card>
                </Grid>
                <Grid item xs={size[0]} sm={size[1]} md={size[2]}>
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Home World"
                />

                <CardActions disableSpacing>
                    <ExpandMore
                    expand={expanded5}
                    onClick={() => {setExpanded5(!expanded5); collapseRest(expanded5, expandeds, setSize)}}
                    aria-expanded={expanded5}
                    aria-label="show more"
                    >
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded5} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography>
                        { home }
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                </Grid>
                </Grid>
                </Box>
              </div>
            </div>
      )}

    </div>
  );
}
 
export default ArtistDetails;

