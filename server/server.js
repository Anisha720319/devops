const express = require('express');  
const { sendSlackNotification } = require('../integrations/slackIntegration');  
const { createGitHubWebhook } = require('../integrations/githubIntegration');  
const { createJiraTask } = require('../integrations/jiraIntegration');  

const app = express();  
app.use(express.json());  

app.post('/github-event', (req, res) => {  
  const event = req.body;  
  sendSlackNotification(`New GitHub Event: ${event.action}`);  
  createJiraTask("New GitHub Action", JSON.stringify(event));  
  res.status(200).send("Event received.");  
});  

app.listen(3000, () => {  
  createGitHubWebhook();  
  console.log("Server running on port 3000");  
});  
