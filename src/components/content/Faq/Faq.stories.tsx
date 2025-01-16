import { Meta, Story } from '@storybook/react';
import React from 'react';

import Faq from './Faq';

export default {
  title: 'Components/Content/Faq',
  component: Faq,
  parameters: {
    docs: {
      description: {
        component:
          'A convenience component for FAQs with embedded structured schema data',
      },
    },
  },
} as Meta;

export const Default: Story<{ question: React.ReactNode }> = ({ question }) => (
  <Faq question={question}>Answer goes here</Faq>
);

Default.storyName = 'Faq';
Default.args = {
  question: 'Question goes here',
};
