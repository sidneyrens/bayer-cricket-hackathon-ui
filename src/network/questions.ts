export const getQuestions = async () => {
  try {
    const response = await fetch('https://47ergmkdli.execute-api.us-east-1.amazonaws.com/fetchQuestions');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error fetching data: ', err.message);
  }
};
