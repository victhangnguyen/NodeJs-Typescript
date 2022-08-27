//! app.ts file => Which will be the Root entry point Where we spin up that Server
//! (require() is a function that exists in NodeJs but not in Browser side)
// const express = require('express');

// const app = express();
// in tsconfig.json file, "lib": [] (I'm not using any special lips that would support NodeJs)
//! So indeed, TypeScript is not aware of this general function which exist in a NodeJs Environment.
//! => npm install --save-dev @types/node to install all off Types we need to work with NodeJs

//! you see app: any => install @types/express
//! install success it sill app: any
//! => Reason for that to import syntax in Nodejs, but here we're acctually in an Environment of TypeScript
//! Where we can use a different import syntex TypeScript

import express from 'express';

const app = express();

app.listen(3000);

//! now const app: Express
//! So now we got Types support
