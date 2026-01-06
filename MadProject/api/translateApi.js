/*import axios from 'axios';

const RAPIDAPI_KEY = 'YOUR_RAPIDAPI_KEY'; // <-- put your rapidapi key here
const RAPIDAPI_HOST = 'text-translator2.p.rapidapi.com';

export const translateText = async (text, targetLang = 'zh') => {
  if (!text) return '';

  const data = new URLSearchParams();
  // Source language left blank or set to 'en' if you want fixed source
  data.append('source_language', 'en'); // assuming English input
  data.append('target_language', targetLang);
  data.append('text', text);

  try {
    const response = await axios.post(
      `https://${RAPIDAPI_HOST}/translate`,
      data.toString(),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
      }
    );

    // response structure: response.data.data.translatedText
    if (response?.data?.data?.translatedText) {
      return response.data.data.translatedText;
    } else {
      console.log('Unexpected translate response:', response.data);
      return null;
    }
  } catch (error) {
    console.error('translateText error:', error?.response?.data || error.message || error);
    return null;
  }
};*/



export const translateText = async (text) => {
  if (!text || !text.trim()) return '';

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|zh-CN`;

    const response = await fetch(url);
    const data = await response.json();

    // SUCCESS PATH
    // data.responseData.translatedText
    return data?.responseData?.translatedText || '';
  } catch (error) {
    console.error('Translation failed:', error);
    return '';
  }
};
