import { GoogleGenAI } from "@google/genai";
import { DesignRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDesignAdvice = async (request: DesignRequest): Promise<string> => {
  try {
    const prompt = `As a world-class interior designer with an eye for minimalism and functionality, provide a brief, sophisticated design concept description for a ${request.style} ${request.roomType}. The user's specific request is: "${request.prompt}". Keep it under 100 words, elegant, and inspiring.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Unable to generate advice at this moment.";
  } catch (error) {
    console.error("Error generating design advice:", error);
    throw new Error("Failed to generate design advice.");
  }
};

export const generateDesignImage = async (request: DesignRequest): Promise<string> => {
  try {
    // Construct a rich prompt for the image model
    const fullPrompt = `Photorealistic, high-end interior design photography of a ${request.style} ${request.roomType}. ${request.prompt}. 8k resolution, architectural digest style, perfect lighting, cinematic composition.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          { text: fullPrompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K" // Using 1K for faster preview, could be 2K/4K
        }
      }
    });

    // Iterate to find image part
    for (const candidate of response.candidates || []) {
      for (const part of candidate.content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Error generating design image:", error);
    throw new Error("Failed to generate design visualization.");
  }
};
