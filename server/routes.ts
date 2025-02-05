import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
export function registerRoutes(app: Express): Server {
  // Chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant knowledgeable about Roblox, account security, and cookie management. Keep responses concise and focused on providing accurate, safe information."
          },
          { role: "user", content: message }
        ],
        max_tokens: 150
      });

      res.json({ message: response.choices[0].message.content });
    } catch (error) {
      console.error('OpenAI API error:', error);
      res.status(500).json({ error: 'Failed to get AI response' });
    }
  });

  // Suggestions webhook endpoint
  app.post('/api/suggestions', async (req, res) => {
    try {
      const { suggestion } = req.body;
      if (!suggestion) {
        return res.status(400).json({ error: 'Suggestion is required' });
      }

      // Send to Discord webhook
      const response = await fetch(
        'https://discord.com/api/webhooks/1297668626354143262/OHmrnK1QgPpkX8dpGt0paejtn9NTnAD2-BWdCbEmlwxKO-KxdPLUUnNBysAA4AnNdwGz',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `**New Suggestion**\n${suggestion}`
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send to webhook');
      }

      res.json({ success: true });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: 'Failed to submit suggestion' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}