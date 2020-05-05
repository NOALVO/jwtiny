# jwtiny
Ultra tiny (649 bytes), cross-platform (browser/Node.js) and cross-module (CommonJS/ES2015/AMD) JWT utils: body parser and isExpired method.

## Basic usage

1. Install it using package manager

```
npm i -S jwtiny
```

2. Import it using UMD (CommonJS, ES2015 modules or AMD)

```javascript
import { parseJwt, isExpired } from 'jwtiny';

const jwtBody = parseJwt('a valid JWT');
// it will be undefined if JWT is not valid

const expired = isExpired(jwtBody);
```