import Data from "../data-helper/data"
import Params from "../data-helper/params";
describe('Pet Tests', () => {

  const data = new Data;
  const params = new Params;
  var url = params.url();
  var id=params.id();

  it('Create Pet', () => {

    cy.request({
      method: 'POST',
      url: url + '/v2/pet',
      body: data.bodyPayload("begie",id)
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Get Pet Info', () => {

    cy.request('GET', url + '/v2/pet/'+id)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update Pet', () => {

    cy.request({
      method: 'PUT',
      url: url + '/v2/pet',
      body: data.updatePayload("belliet",id)
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Delete Pet', () => {

    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/'+id,
      headers: data.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Deleted Pet', () => {

    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/'+id,
      headers: data.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('Search Deleted Pet', () => {
    cy.request({
      method: 'GET',
      url: url + '/v2/pet/'+id,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404) 
      })
  })

  
  
 
  

})