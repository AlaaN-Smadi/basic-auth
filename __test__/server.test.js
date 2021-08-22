'use strict'

const superTest = require('supertest');
const sever = require('../src/server')

const request = superTest(sever.app)

describe('express server', () => {

    /* ----------------------------------------------------------------------------------------------- 
      Mock Implementation  =>   to avoid problems with logging  data
    ----------------------------------------------------------------------------------------------- */
    let mockVar;
    
    beforeEach(() => {
        mockVar = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        mockVar.mockRestore();
    });

    /* ----------------------------------------------------------------------------------------------- 
      Mock Implementation  =>   to avoid problems with logging  data
    ----------------------------------------------------------------------------------------------- */


    it('200 if the name is in the query string', async () => {
        // arrange
        let method = '/person?name=alaa';
        let status = 200;
        
        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toBe('object');
    });


    it('shoud return 404 on a bad route', async () => {
        // arrange
        let method = '/wrongRoute';
        let status = 404;
        
        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
        
    });


    it('shoud return 404 on a bad method', async () => {
        // arrange
        let method = '/person?name=alaa';
        let status = 404;
        
        // act
        const response = await request.post(method);
        // assert
        expect(response.status).toBe(status);
    });

    it('shoud return 500 if no name in the query string', async () => {
        // arrange
        let method = '/person';
        let status = 500;
        
        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
    });



    

    

});