require('dotenv').config();  

module.exports = {  
  slackWebhookURL: process.env.SLACK_WEBHOOK_URL,  
  jiraBaseURL: process.env.JIRA_BASE_URL,  
  jiraUser: process.env.JIRA_USER,  
  jiraAPIToken: process.env.JIRA_API_TOKEN,  
  githubRepo: process.env.GITHUB_REPO,  
};  
