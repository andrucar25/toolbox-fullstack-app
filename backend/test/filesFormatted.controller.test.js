/* global describe it */
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/presentation/app.js'

const expect = chai.expect
chai.use(chaiHttp)

describe('When route /files/data is requested', () => {
  it('should return a list of an specific parsed file', async () => {
    const response = await chai.request(app).get('/files/data?fileName=test2.csv')

    expect(response).to.have.status(200)
    expect(response.body.data).to.be.an('array')
  })
  it('should return a list of all parsed files', async () => {
    const response = await chai.request(app).get('/files/data')

    expect(response).to.have.status(200)
    expect(response.body.data).to.be.an('array')
  })
  it('should return 404 if file is not found', async () => {
    const response = await chai.request(app).get('/files/data?fileName=testexample.csv')

    expect(response).to.have.status(404)
    expect(response.body.errors).to.be.an('array')
    expect(response.body).to.not.have.property('data')
  })
  it('should return 400 if unknown query param is sent', async () => {
    const response = await chai.request(app).get('/files/data?badParam=value')

    expect(response).to.have.status(400)
    expect(response.body.errors).to.be.an('array')
    expect(response.body).to.not.have.property('data')
  })
})
