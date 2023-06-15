import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ArtistList = ({ blogs }) => {
    const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="blog-list">
      {blogs.results.map((blog, index) => (
        // <div className="blog-preview" key={blog.id} >
          
        //     <h2>{ blog.name }</h2>
        //     <p>Height { blog.height }</p>
        //     <p>Weight { blog.mass }</p>
        //     <p>Hair Color { blog.hair_color } </p>
        //     <p>Id { blog.url.slice(-2, -1)} </p>
        //     <button onClick={(e) => {navigate(`/blogs/${ blog.url.slice(-2, -1)}`);}}>Details</button>
          
        // </div>
        <>
        <Box component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <Grid flex container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} direction="row">
        <Grid item xs={2} sm={4} md={4} key={index} >
        
        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#e0e7af"}} >
        
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            { blog.name }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Height { blog.height }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Weight { blog.mass }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hair Color { blog.hair_color } 
          </Typography>
        </CardContent>
        <button className="btn" onClick={(e) => {navigate(`/blogs/${ blog.url.slice(-2, -1)}`);}}>Details</button>
      </Card>
      <br/>
      <br/>
      </Grid>
        </Grid>
        </Box>
      </>
      ))}
     </div> 
    // console.log(blogs.results)
  );
}
 
export default ArtistList;