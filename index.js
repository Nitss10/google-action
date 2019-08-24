// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  function answer(agent) {
      const ques = agent.parameters['questions'];
      if(ques==='ques1'){
      agent.add(' 1) Use getline function to input a string with whitespaces. 2) You can enter a string, character by character, using cin.get() in a loop. 3) You can use cin directly. If your string does not need a whitespace. 4) The gets() function in C++ reads characters from stdin and stores them until a newline character is found or end of file occurs. Can I help you with something else?');
    }
    else if(ques==='ques2'){
      agent.add('1) str.size() 2) str.length() 3) strlen(str.c_str()) 4) iterating through a string to find its length through a loop.Can I help you with something else?');
    }
    else if(ques==='ques3'){
      agent.add('1)using "reverse" function: reverse(str.begin(), str.end()) 2)write own reverse function by swapping characters.Can I help you with something else?');
    }
    else if(ques==='ques4'){
      agent.add('1)using strcat() from <string.h> 2)using concatenate operator "+". 3)without using concatenate oprerator. Can I help you with something else?');
    }
    else if(ques==='ques5'){
      agent.add('Although you can call an inline function from within itself, the compiler may not generate inline code since the compiler cannot determine the depth of recursion at compile time. Can I help you with something else?');
    }
    else if(ques==='ques13'){
      agent.add('1)call-by-value 2)call-by-reference with pointer argument 3)call-by-reference with reference argument. Can I help you with something else?');
    }
    else if(ques==='ques6'){
      agent.add('Yes,struct members are public by default.Class members are private.It is good practice to use classes when you need an object that has methods and structs when you have a simple data object. Can I help you with something else?');
    }
    else if(ques==='ques7'){
      agent.add('1)Public mode 2)Private mode 3)Protected mode. Can I help you with something else?');
    }
    else if(ques==='ques8'){
      agent.add('There is no such thing as default datatype,if no data type is given to a variable,the compiler automatically converts it to int data type. Can I help you with something else?');
    }
    else if(ques==='ques9'){
      agent.add('A class declaration can contain static object of self type, it can also have pointer to self type, but it cannot have a non-static object of self type. Can I help you with something else?');
    }
    else if(ques==='ques10'){
      agent.add('Size of an empty class is not zero. It is 1 byte generally. It is nonzero to ensure that the two different objects will have different addresses. Can I help you with something else?');
    }
    else if(ques==='ques11'){
      agent.add('1) Default constructors 2) parameterised constructor 3) copy constructors. Can I help you with something else?');
    }
    else if(ques==='ques12'){
      agent.add('1) Iterate through the character array and keep on concatenating the characters to an empty string.2) use the inbuilt constructor of string and pass character array as its parameter.3) Use the overloaded ‘=’ operator to assign the characters in the character array to the string. Can I help you with something else?');
    }
    else{
    agent.add('Sorry I can not answer that! Can I help you with something else?');
    }
  }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('get_question', answer);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
