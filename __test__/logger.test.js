const { describe, beforeEach, afterEach } = require('@jest/globals')
const loggerMiddleware = require('../src/middleware/logger');

describe('Logger MiddleWare', () => {
    let mockVar;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        mockVar = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        mockVar.mockRestore();
    });


    it('Should Log To The Console', () => {
        loggerMiddleware(req, res, next);

        expect(mockVar).toHaveBeenCalled();
    });

    it('Should Move To The Next Middle Ware', () => {
        
        loggerMiddleware(req, res, next);
        
        expect(next).toHaveBeenCalledWith();
    });

})