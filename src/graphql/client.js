import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
  url: `${process.env.NEXT_PUBLIC_APP_API_URL}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
});

export const upLoadFile = async (file, fileName) => {
  try {
    const formData = new FormData();
    if (fileName) {
      formData.append('file', file, fileName);
    } else {
      formData.append('file', file);
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_URL}/client/upload/file`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (response?.ok) {
      return await response?.json();
    } else {
      const data = await response?.json();
      return data || false;
    }
  } catch (error) {
    return error;
  }
};

export const getDetailsFromStory = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_URL}/generate/ai/text`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    if (response?.ok) {
      return await response?.json();
    } else {
      const data = await response?.json();
      return data || false;
    }
  } catch (error) {
    return error;
  }
};
