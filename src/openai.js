//   const btnSend = document.getElementById("send");
//   const inputBox = document.getElementById("message");

//   let question = ["hello chatGPt", "How are you"];
//   let answer = ["Hi this is chatGPT", "I am fine thank you"];

//   function chatGPT() {
//     if (inputBox.value === question[0]) {
//       msgEnd.innerHTML = answer[0];
//     } else if (inputBox.value === question[1]) {
//       msgEnd.innerHTML = answer[1];
//     }
//   }
//   function init() {
//     btnSend.addEventListener("click", chatGPT)
//   }
// const {Configuration, OpenAIApi} = require('openai');
// const configuration = new Configuration({ apiKey: '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'})
// const openai = new OpenAIApi(configuration)     

// export async function sendMsgToOpenAI(message) {
//   const res = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     present_penalty: 0,
//   })    
//   return res.data.choices[0].text;
// } 