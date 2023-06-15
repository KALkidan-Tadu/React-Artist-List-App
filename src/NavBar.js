import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Artist List</h1>
      <div className="links">
        <Link style={{ 
          color: 'white', 
          backgroundColor: '#453324',
          borderRadius: '8px' 
        }}to="/">Home</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;