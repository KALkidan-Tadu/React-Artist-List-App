import ArtistList from "./ArtistList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://swapi.dev/api/people')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <ArtistList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;