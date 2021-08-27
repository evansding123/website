import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { githubKey } from './config/config.js';


const Github = (props) => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const option = {
      url: 'https://api.github.com/users/evansding123/repos',
      headers: {
        'User-Agent': 'request',
        // Authorization: `${githubKey}`,
      }
    }
    const getRepo = async () => {
      try {
        const response = await axios(option);

        response.data.sort((a, b) => {
          return (a.id - b.id);
        }).reverse();
        console.log(response.data);
        setRepos(response.data);
      } catch(error) {
        console.log(error);
      }
    }

    getRepo();
  }, [])




  return(
    <div>{repos.map((item, index) => {
      if(index < 5) {
        return(
          <div>{item.full_name}</div>
        );
      }
    })}</div>
  )
}

export default Github;