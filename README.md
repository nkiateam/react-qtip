# react-qtip
[![npm](https://img.shields.io/npm/v/react-qtip.svg)](https://www.npmjs.com/package/react-qtip)
[![Build Status](https://travis-ci.org/nkiateam/react-qtip.svg?branch=master)](https://travis-ci.org/nkiateam/react-qtip)
[![Dependencies](https://img.shields.io/david/nkiateam/react-qtip.svg)](https://github.com/nkiateam/react-qtip)
[![DevDependencies](https://img.shields.io/david/dev/nkiateam/react-qtip.svg)](https://github.com/nkiateam/react-qtip)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nkiateam/react-qtip/master/LICENSE)

react-qtip is react-based implementation of qtip2(http://qtip2.com)

## Install

```
npm install react-qtip --save-dev
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'react-qtip';

const App = () => {
    <Tooltip title="qtip2" text="qtip2 is one of the tooltip library">
        <a href='qtip2.com/'>Go to Qtip2</a>
    </Tooltip>
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Demo Build
- npm run examples
- http://localhost:4000

## Example & Documentaion
https://nkiateam.github.io/react-qtip/

## License
[The MIT License (MIT)](/LICENSE)