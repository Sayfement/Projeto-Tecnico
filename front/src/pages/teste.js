import react from 'react';
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/')
  .then(function (response) {
    // handle success
    console.log(response);
  })

function Teste() {
    axios.get('/')
    .then(function (response) {
        // handle success
        console.log(response);
  })
  
    return(
        <div>

        </div>
    )
}

export default Teste;