/* global describe it */
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/presentation/app.js'

const expect = chai.expect
chai.use(chaiHttp)

describe('When route /files/list is requested', () => {
  it('should return a list of files', async () => {
    const response = await chai.request(app).get('/files/list')

    expect(response).to.have.status(200)
    expect(response.body.data.files).to.be.an('array')
    expect(response.body.errors.length).to.equal(0)
  })
})
