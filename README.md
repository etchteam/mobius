<h1 align="center">
	<img width="300" src="https://raw.githubusercontent.com/etchteam/mobius-logo/main/logo.png" alt="Mobius design system">
	<br>
  <br>
</h1>

[Live Demo](https://mobius.wrap.org.uk/)

# Install

```bash
npm install --save @etchteam/mobius
```

# Usage

Install the global CSS in your main app file;

```js
import '@etchteam/mobius/src/styles/main.scss';
```

```jsx
import React from 'react';
import { Button } from '@etchteam/mobius';

const MyComponent = () => (
  <Button
    type="primary"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </Button>
)
```
