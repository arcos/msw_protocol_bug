/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */

const { rest } = require('msw');

module.exports = {handlers: [
  // expedition contentful space handler
  rest.get(
    'https://cdn.contentful.com/spaces/7fa304q47ttv/environments/master/entries/:entry_id/',
    (req, res, ctx) => {
      
      console.log(req);
      return;
    }
  ),

]};
