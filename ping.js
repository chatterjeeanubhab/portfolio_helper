const fetch = require('node-fetch'); // Install node-fetch in GitHub Actions automatically

const url = 'https://portfolio-java-wpek.onrender.com/'; // Replace with your Render app URL

fetch(url)
  .then(res => console.log(`Pinged ${url} - Status: ${res.status}`))
  .catch(err => console.error(`Error pinging ${url}:`, err));
