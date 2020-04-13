// https://github.com/alexellis/leaderboard-app/blob/master/leaderboard-page/handler.js

const fs = require('fs')

module.exports = (event, context) => {
  const {method, path} = event

  console.log('method', method)
  console.log('path', path)

  if (method !== 'GET') {
    context.status(400).fail('Bad Request')
    return
  }

  const headers = {
    'Content-Type': '',
  }
  if (/.*\.js/.test(path)) {
    headers['Content-Type'] = 'application/javascript'
  } else if (/.*\.css/.test(path)) {
    headers['Content-Type'] = 'text/css'
  } else if (/.*\.ico/.test(path)) {
    headers['Content-Type'] = 'image/x-icon'
  } else if (/.*\.json/.test(path)) {
    headers['Content-Type'] = 'application/json'
  } else if (/.*\.map/.test(path)) {
    headers['Content-Type'] = 'application/octet-stream'
  }

  let contentPath = `${__dirname}/build${path}`

  if (!headers['Content-Type']) {
    contentPath = `${__dirname}/build/index.html`
  }

  console.log('contentPath', contentPath)
  console.log('headers', headers)

  fs.readFile(contentPath, (err, data) => {
    if (err) {
      context
        .headers(headers)
        .status(500)
        .fail(err)
      return
    }

    const content = data.toString()

    console.log('content', content)

    context
      .headers(headers)
      .status(200)
      .succeed(content)
  })
}
