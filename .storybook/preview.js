import React from 'react';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'
import {
  Title,
  Subtitle,
  Primary,
  Controls,
  Stories,
  useOf,
  Description,
} from '@storybook/blocks';
import Button from 'components/controls/Button/Button'
import Spacing from 'components/composition/Spacing/Spacing'
import Grid from 'components/composition/Grid/Grid'

import base from '!!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!../src/styles/themes/default/main.scss'

import './styles.scss'

export const parameters = {
  viewMode: 'docs',
  cssVariables: {
    files: {
      'Default': base,
    },
    defaultTheme: 'Default',
  },
  docs: {
    page: ({ of }) => {
      const resolvedOf = useOf(of || 'story', ['story', 'meta']);
      const name = resolvedOf.story.title?.split('/').slice(-1)[0] || 'Mobius';

      return (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />

          <h2>Help us improve this component</h2>

          <div className="sb-unstyled">
            <Spacing top="md" bottom="lg">
              <Grid>
                <Grid.Item>
                  <Button
                    href={`https://github.com/etchteam/mobius/issues/new?labels=bug&template=bug_report.md&title=${name}+bug+report`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report a bug
                  </Button>
                </Grid.Item>
                <Grid.Item>
                  <Button
                    href={`https://github.com/etchteam/mobius/issues/new?labels=enhancement&template=feature_request.md&title=${name}+new+feature`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request a feature
                  </Button>
                </Grid.Item>
              </Grid>
            </Spacing>
          </div>

          <h2>Need help?</h2>

          <p>
            If you've got any questions or queries that need answering <a href="/?path=/story/about-get-in-touch--get-in-touch">get in touch</a>.
          </p>
        </>
      );
    },
  }
}

export const decorators = [
  cssVariablesTheme,
]

export const tags = ['autodocs'];
