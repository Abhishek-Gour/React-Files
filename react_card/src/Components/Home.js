import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


function Home(props) {
 
  const navigate = useNavigate();
  const navToPage = (url) => {
    navigate(url)
  }

  return (
      <div>
          <h1>This is a home page</h1>
          <button onClick={() => navToPage('/about')}>Go to About</button>
          <button onClick={() => navToPage('/contact')}>Go to Contact</button>
      </div>
  );
}

export default Home;
