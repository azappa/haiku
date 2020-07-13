const http = require('http');
const random = require('lodash.random');
const { haikus } = require('./haiku.json');

http
  .createServer((req, res) => {
    const randInt = random(0, haikus.length);
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.write(
      JSON.stringify({
        ...haikus[randInt],
        copyright: `Made with 💛 by github.com/azappa`,
      })
    );
    res.end();
  })
  .listen(process.env.PORT || 3000);
