'use strict'

import test from 'ava'
import uuid from 'uuid-base62'
import micro from 'micro'
// test-listen herramineta para probar microessevicionsc on micro
import listen from 'test-listen'
// request promise modulo que me permite hacer http con promesas
import request from 'request-promise'
import pictures from '../pictures'
import fixtures from '../fixtures'

test('GET /:id', async t => {
  let image = fixtures.getImage()
  // con micro creamos un servidor para el test
  // hace una respuesta completamente asincrona que hay que resolver con async await
  let srv = micro(pictures)

  // con listen retorna una url con el server y el puerto
  let url = await listen(srv)
  // con request obtenemos la respuesta
  let body = await request({ url: `${url}/${image.publicId}`, json: true })
  t.deepEqual(body, { image })
})

// con .TODO nos permite declarar la prueba sin necesidad de terner que implementarla
test.todo('POST /')
test.todo('POST /:id/like')
