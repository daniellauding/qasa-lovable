import React from 'react';
import Header, { HeaderLoggedOut, HeaderLoggedIn, HeaderCreationFlow } from '../components/Header';
import { LanguageProvider } from '../utils/translations/LanguageContext';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['logged-out', 'logged-in', 'creation-flow'],
    },
  },
};

const Template = (args) => (
  <LanguageProvider>
    <Header {...args} />
  </LanguageProvider>
);

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  variant: 'logged-out',
  onLogin: () => alert('Login clicked'),
  onSignup: () => alert('Signup clicked'),
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  variant: 'logged-in',
  user: {
    name: 'Daniel Mattias',
    avatar: 'https://img.qasa.se/unsafe/fit-in/252x252/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/300180786a1905883faa0ffd0b5612fd8a0cb04e2e97b5646e40d10f8ed2e45a.jpg'
  },
  messageCount: 9,
  notificationCount: 1,
};

export const CreationFlow = Template.bind({});
CreationFlow.args = {
  variant: 'creation-flow',
  onDismiss: () => alert('Dismiss clicked'),
  showDismiss: true,
};

// Individual component stories
export const LoggedOutDirect = () => (
  <LanguageProvider>
    <HeaderLoggedOut 
      onLogin={() => alert('Login clicked')} 
      onSignup={() => alert('Signup clicked')} 
    />
  </LanguageProvider>
);

export const LoggedInDirect = () => (
  <LanguageProvider>
    <HeaderLoggedIn 
      user={{
        name: 'Daniel Mattias',
        avatar: 'https://img.qasa.se/unsafe/fit-in/252x252/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/300180786a1905883faa0ffd0b5612fd8a0cb04e2e97b5646e40d10f8ed2e45a.jpg'
      }}
      messageCount={9}
      notificationCount={1}
    />
  </LanguageProvider>
);

export const LoggedInSwedish = () => (
  <LanguageProvider initialLanguage="sv">
    <HeaderLoggedIn 
      user={{
        name: 'Daniel Mattias',
        avatar: 'https://img.qasa.se/unsafe/fit-in/252x252/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/300180786a1905883faa0ffd0b5612fd8a0cb04e2e97b5646e40d10f8ed2e45a.jpg'
      }}
      messageCount={9}
      notificationCount={1}
    />
  </LanguageProvider>
);

export const CreationFlowDirect = () => (
  <LanguageProvider>
    <HeaderCreationFlow 
      onDismiss={() => alert('Dismiss clicked')}
      showDismiss={true}
    />
  </LanguageProvider>
);

export const CreationFlowNoDismiss = () => (
  <LanguageProvider>
    <HeaderCreationFlow 
      showDismiss={false}
    />
  </LanguageProvider>
); 