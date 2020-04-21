'use strict'

const fs = require('fs')
const fsPromises = fs.promises
//const mime = require('mime-types')


module.exports = async (event, context) => {
  const {method, path} = event

  console.log('Method: ', method)
  console.log('Path: ', path)

  if (method !== 'GET') {
    context.status(400).fail('Bad Request')
    return
  }

  const headers = {'Content-Type': ''}

  /*
  if (path !== '/') {
    console.log('PATH MIME: ', path, mime.lookup(path))
    headers['Content-Type'] = mime.lookup(path)
  }
  */

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

  // /home/app/function/build${path}
  let contentPath = `${__dirname}/build${path}`

  if (!headers['Content-Type']) {
    contentPath = `${__dirname}/build/index.html`
  }

  try {
    const data = await fsPromises.readFile(contentPath)
    const content = data.toString()

     context
      .headers(headers)
      .status(200)
      .succeed(content)
  } catch (err) {
    console.log('err', err)
  }
}