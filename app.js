const contentful = require('contentful');

const { server } = require('./server');

server.listen({ onUnhandledRequest: 'bypass' });

const client = contentful.createClient({
    space: '7fa304q47ttv',
    accessToken: 'b3-BHjF6jhid0Xsr7hi4yj_8YmQ_gXsAmNklWJj2f8M'
  });

  client.getEntry('7na3pnjbD0TAwCbl7H4kOt').then(function (entry) {
    console.log(entry.sys);
    console.log(entry.fields.name);
  });