# Import Parser
> Parse EcmaScript 6 import statements with ease.

### Getting started
Install the package by running:
```
npm install --save import-parser
```

### Example
You can find a working example in `tester.js`.
```javascript
const ImportParser = require('import-parser');

const testCode = `
import React from "react"
import { Admin, Api, BackstageApisRestClient } from "backstage-admin"

import MultiContentListView from './views/ListView'
import MultiContentAddView from './views/AddView'
import MultiContentEditView from './views/EditView'
`

const imports = ImportParser(testCode)
console.log(imports)
/* =>
[ { originalMatch: 'import React from "react"',
    modulePath: 'react',
    importList: [ 'React' ] },
  { originalMatch: 'import { Admin, Api, BackstageApisRestClient } from "backstage-admin"',
    modulePath: 'backstage-admin',
    importList: [ 'Admin', 'Api', 'BackstageApisRestClient' ] },
  { originalMatch: 'import MultiContentListView from \'./views/ListView\'',
    modulePath: './views/ListView',
    importList: [ 'MultiContentListView' ] },
  { originalMatch: 'import MultiContentAddView from \'./views/AddView\'',
    modulePath: './views/AddView',
    importList: [ 'MultiContentAddView' ] },
  { originalMatch: 'import MultiContentEditView from \'./views/EditView\'',
    modulePath: './views/EditView',
    importList: [ 'MultiContentEditView' ] } ]
*/
```
### License
- MIT