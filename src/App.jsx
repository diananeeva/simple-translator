import { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('sl');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'fr', name: 'French' }
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      console.error('Input text is empty.');
      return;
    }

    try {
   
      const mockResponse = {
        translatedText: "Това е примерен превод."  
      };

      
      setTranslatedText(mockResponse.translatedText);
      
     
      /*
      const response = await axios.post('https://libretranslate.com/translate', {
        q: inputText,
        source: 'auto',
        target: language,
        format: 'text',
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      setTranslatedText(response.data.translatedText);
      */

    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received from the server:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Language Translator</h1>

      <textarea
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={4}
        cols={50}
      />
      <div>
        <label>Select language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleTranslate}>Translate</button>

      <h3>Translated Text:</h3>
      <p>{translatedText}</p>
    </div>
  );
}

export default App;
