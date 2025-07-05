import OpenAI from "openai";
import { openAiKey } from "./constants";

export const client = new OpenAI({
  apiKey: openAiKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export const model = "gpt-3.5-turbo";
