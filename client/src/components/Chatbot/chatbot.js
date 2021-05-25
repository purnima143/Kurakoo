import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
   background: '#f5f8fb',
   fontFamily: 'Helvetica Neue',
   headerBgColor: '#EF6C00',
   headerFontColor: '#fff',
   headerFontSize: '15px',
   botBubbleColor: '#EF6C00',
   botFontColor: '#fff',
   userBubbleColor: '#fff',
   userFontColor: '#4a4a4a',
 };

const config = {
  width: '400px',
  height: '500px',
  floating: true,
  floatingStyle: {
    right: '15px',
    bottom: '60px',
    width: '40px',
    height: '40px',
  },
  headerTitle: 'Chat Help',
};

const steps = [
  {
    id: 'intro',
    message: 'Hello, Nice to see you here.',
    trigger: 'intro2',
  },
  {
    id: 'intro2',
    message: 'I am your assistant.',
    trigger: 'intro3',
  },

  {
    id: 'intro3',
    message: 'Are you a student?',
    trigger: 'intro-user',
  },
  {
    id: 'intro-user',
    options: [
    { value: 'student', label: 'YES', trigger: 'student' },
      { value: 'no', label: 'NO', trigger: '3' },
      
    ],
  },
  {
    id: 'student',
    message: 'Hey Buddy! You are at the right place.',
    trigger: 'platform',
  },
  {
    id: 'platform',
    message: 'Through this platform you can ask questions from our community. But for that you need to login/register',
    trigger: '8',
  },
  {
    id: '8',
    message: 'Would you like to know more?',
    trigger: 'interest',
  },
  {
    id: 'interest',
    options: [
        { value: 'yes', label: 'YES', trigger: '9' },
        { value: 'no', label: 'NO', trigger: '5' },
      ],
  },
  {
    id: '9',
    message: 'Through this platform: 1. You can ask questions related to academics, jobs etc. 2. You can read answers of various question from our feed. 3. You can make friends and learn from people you trust. So yeah go ahead and build your connection. :)',
    trigger: 'next',
  },
  {
      id:'next',
      user: true,
      trigger:'10'
  },
  {
    id: '10',
    message: "Hey! And don't forget to go through the new updates of our website :).",
    trigger: 'final',
  },
  {
      id:'final',
      message:'Have a great day :).',
      end:true
  },

  {
    id: '3',
    message: 'Do you want to answer a question?',
    trigger: '4',
  },

  {
    id: '4',
    options: [
        { value: 'yes', label: 'YES', trigger: '6' },
        { value: 'no', label: 'NO', trigger: '5' },
        
      ],
    },
  {
    id: '5',
    message:
      'Okay cool. Have a great day!',
    end:true,
  },
  {
    id: '6',
    message: 'Great! But you need to login/register first, and then you can add an answer.',
    trigger: '7',
  },
  {
    id: '7',
    user:true,
    trigger: '5',
  },
  
];

const ChatBotComponent = () => {
  return (
     <ThemeProvider theme={theme}>
       
     <ChatBot recognition={true}
      speechSynthesis={{enable:true,
      lang:'en'}} 
      steps={steps}
      {...config}/> 

     </ThemeProvider>
  );
};

export default ChatBotComponent;