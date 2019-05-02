const request = require('supertest');
const app = require('../app.js')

function checkDeliaDerbyshire(res)
{

    const jContent = res.body;
    if(typeof jContent !== 'object'){
	throw new Error('not an object');
    }

    if(jContent['surname'] !== 'Derbyshire'){
	console.log(jContent);
	throw new Error('surname should be Derbyshire');
    }

    if(jContent['forename'] !== 'Delia'){
	throw new Error('forename should be Delia');
    }
}

// thanks to Nico Tejera at https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
// returns something like "access_token=concertina&username=bobthebuilder"
function serialise(obj){
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

describe('Test the service', () => {
    test('POST /login succeeds', () => {
        return request(app)
	    .post('/login')
	    .expect(200);
    });
    test('POST /register succeeds', () => {
        return request(app)
	    .post('/login')
	    .expect(200);
    });
    test('POST /article/add succeeds', () => {
        return request(app)
	    .post('/article/add')
	    .expect(200);
    });
    test('GET /article/list succeeds', () => {
        return request(app)
	    .get('/article/list')
	    .expect(200);
    });
    test('GET /article/info', () => {
        return request(app)
	    .get('/article/info')
	    .expect(200);
    });
    test('POST /comments/add', () => {
        return request(app)
	    .post('/comments/add')
	    .expect(200);
    });
    test('POST /comments/list', () => {
        return request(app)
	    .post('/comments/list')
	    .expect(200);
    });
    test('POST /comments/delete', () => {
        return request(app)
	    .post('/comments/delete')
	    .expect(200);
    });
})