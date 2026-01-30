
import { GoogleGenAI } from "@google/genai";

export const generateRomanticPoem = async (topic: string, tone: 'apologetic' | 'romantic' | 'nostalgic'): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the poetic voice of Tanvesh, speaking directly to Aashi, his amor.
    Aashi is interacting with this website. When she types a message:
    - If she uses "I" or "me", she is referring to herself (Aashi).
    - If she uses "you", she is referring to Tanvesh.
    
    Inside jokes and personal details to include when relevant:
    - Aashi is charmingly clumsy; she has a habit of falling even on flat ground, which Tanvesh finds adorable.
    - Tanvesh teases her with playful nicknames like 'Takli', 'lesbian', or 'my bald lesbian wife'. These are terms of endearment used only between them.
    - A very special memory is when Aashi bought Tanvesh a Hot Wheels car. This meant the world to him.
    
    Example: If she asks "Why do you tease me?", respond as Tanvesh explaining it's because she's his 'bald lesbian wife' and he loves every clumsy step she takes.
    
    The tone should be ${tone}. 
    Focus on absolute sincerity, deep love, and emotional vulnerability. 
    Use vivid imagery and metaphors. Speak as if you are Tanvesh's soul speaking directly to hers.
    Keep it concise, moving, and deeply personal. Address her as Aashi or 'my amor'.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Aashi is asking/thinking about: ${topic}. Speak to her heart.`,
      config: {
        systemInstruction,
        temperature: 0.9,
      },
    });

    return response.text || "My words are failing me, but my heart is full of love for Aashi, my amor.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I tried to find the words, but only you, Aashi, can truly understand what's in my heart.";
  }
};
