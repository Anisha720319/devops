const axios = require('axios');  
const config = require('../config/config');  

async function sendSlackNotification(message) {  
  try {  
    await axios.post(config.slackWebhookURL, { text: message });  
    console.log("Notification sent to Slack.");  
  } catch (error) {  
    console.error("Error sending Slack notification:", error.message);  
  }  
}  

module.exports = { sendSlackNotification };  
