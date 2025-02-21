const axios = require('axios');  
const config = require('../config/config');  

async function createGitHubWebhook() {  
  try {  
    const response = await axios.post(  
      `https://api.github.com/repos/${config.githubRepo}/hooks`,  
      {  
        config: {  
          url: config.slackWebhookURL,  
          content_type: "json",  
        },  
        events: ["push", "pull_request"],  
      },  
      {  
        headers: {  
          Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,  
        },  
      }  
    );  
    console.log("GitHub webhook created:", response.data);  
  } catch (error) {  
    console.error("Error creating GitHub webhook:", error.message);  
  }  
}  

module.exports = { createGitHubWebhook };  
