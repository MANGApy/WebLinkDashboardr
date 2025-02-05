import { Handler } from '@netlify/functions';
import Anthropic from '@anthropic-ai/sdk';

// the newest Anthropic model is "claude-3-5-sonnet-20241022" which was released October 22, 2024
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const handler: Handler = async (event) => {
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

      const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant knowledgeable about Roblox, account security, and cookie management. Keep responses concise and focused on providing accurate, safe information."
          },
          { role: "user", content: message }
        ],
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: response.content[0].text }),
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