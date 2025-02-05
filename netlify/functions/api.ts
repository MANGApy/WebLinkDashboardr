import { Handler } from '@netlify/functions';
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const path = event.path.replace('/.netlify/functions/api', '');

  try {
    // Handle chat endpoint
    if (path === '/chat') {
      const { message } = JSON.parse(event.body || '{}');
      
      if (!message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Message is required' }),
        };
      }

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant knowledgeable about Roblox, account security, and cookie management. Keep responses concise and focused on providing accurate, safe information."
          },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 150
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: response.choices[0].message.content }),
      };
    }

    // Handle suggestions endpoint
    if (path === '/suggestions') {
      const { suggestion } = JSON.parse(event.body || '{}');
      
      if (!suggestion) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Suggestion is required' }),
        };
      }

      // Send to Discord webhook
      const webhookResponse = await fetch(process.env.DISCORD_WEBHOOK_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `**New Suggestion**\n${suggestion}`
        })
      });

      if (!webhookResponse.ok) {
        throw new Error('Failed to send to webhook');
      }

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not found' }),
    };
  } catch (error) {
    console.error('API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};
