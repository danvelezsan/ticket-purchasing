// @scripts
import {
    createMockResponse,
    getMockParams
} from '../../util';

describe('getMockParams', () => {
    test('getMockParams (without sortKey)', () => {
        const call = {
            data: '{"param1":"Param 1","param2":"Param 2"}'
        };
        const result = getMockParams(call);
        const expected = {
            param1: 'Param 1',
            param2: 'Param 2'
        };
        expect(result).toEqual(expected);
    });

    test('getMockParams (with sortKey)', () => {
        const call = {
            data: '{"param1":"Param 1","param2":"Param 2","sortKey":"Description"}'
        };
        const result = getMockParams(call);
        const expected = {
            param1: 'Param 1',
            param2: 'Param 2',
            sortKey: 'description'
        };
        expect(result).toEqual(expected);
    });
});

describe('createMockResponse', () => {
    test('createMockResponse (without data)', () => {
        const response = createMockResponse({});
        const expected = [200, null];
        expect(response).toEqual(expected);
    });

    test('createMockResponse (with data)', () => {
        const body = {
            data: { param: 'Param' }
        };
        const response = createMockResponse(body);
        const expected = [200, body.data];
        expect(response).toEqual(expected);
    });
});
