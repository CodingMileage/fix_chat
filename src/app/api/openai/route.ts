import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });

    console.log('API Key:', process.env.OPENAI_API_KEY);


    return NextResponse.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error fetching from OpenAI:', error);
    return NextResponse.json({ error: 'Failed to fetch response from OpenAI.' }, { status: 500 });
  }
}
