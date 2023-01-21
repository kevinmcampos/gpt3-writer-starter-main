import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Usar linguagem clara, amigável, simples e fácil de entender, fazer informações técnicas fáceis de entender. Evitar jargões e termos técnicos.
Explicar qualquer termo que pode não ser familiar para audiência. Evitar ambiguidade e confusão.
Ser transparente e inclusivo, aberto e convidativo.
Comunicar o porque das coisas, e ser transparente sobre o que a Dice Minimal é e faz
Focar na audiência. Priorizar o interesse da audiência.
Comunicar de forma relevante e engajante. Ser ambisioso e positivo. Comunicar de forma positiva, expressar otimismo e confiança.
Ser sério sem ser formal. Comunicar autoridade, profissionalidade e ser creditável, mas não ser muito formal or wordy.
`;

// Put yourself in your reader's shoes: always focused on the audience's needs and interests. Think about the audience's perspective and to communicate in a way that is relevant and engaging.

// Start with the most important information: audience needs to know first. Prioritize the most important information and to communicate it upfront.

// Be precise with terms: explain what we mean. Use precise language and to explain any terms that may not be familiar to the audience.

// Avoid ambiguity: transparent and easy to understand, and avoid ambiguity in communication and be clear and concise in messaging.

// Be open, inclusive and welcoming to everyone: communicate in a way that is welcoming and inclusive, and to avoid any language that could be considered discriminatory or offensive.

// communicate in a way that is clear, simple, transparent, inclusive, ambitious, positive, serious without being formal, and audience-focused, while also being precise with terms and avoiding ambiguity. Additionally, it needs to put itself in the audience's shoes and start with the most important information, and be open and welcoming to everyone.

// Ser claro e amigável, porém sério.

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  try {
    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${basePromptPrefix}${req.body.userInput}`,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });
  } catch (e) {
    console.log('Erro!\n' + e)
    res.status(500).json({ output: e });
  }
  
};

export default generateAction;