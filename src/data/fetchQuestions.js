export const fetchQuestions = async () => {
  try {
    await fetch('https://47ergmkdli.execute-api.us-east-1.amazonaws.com/fetchQuestions')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        return data;
      });
  } catch (err) {
    console.log(err);
  }
};
