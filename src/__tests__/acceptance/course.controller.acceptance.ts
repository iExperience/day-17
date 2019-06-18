import {Day17Application} from '../..';
import {Client, expect} from '@loopback/testlab';
import {setupApplication} from './test-helper';

describe('Courses Feature', () => {
  let app: Day17Application;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('Should return a list of courses via GET', async () => {
    // Ensure there is data to test against
    await client.post('/courses').send({
      name: 'Full Stack',
    });

    const response = await client.get('/courses');
    expect(response.status).to.equal(200);

    const responseBody = response.body;
    expect(responseBody).to.be.an.Array();
    expect(responseBody.length).to.be.greaterThan(0);

    // if (responseBody.length === 0) {
    //   throw new Error();
    // }
  });

  it('Should create a new Course using POST', async () => {
    const response = await client.post('/courses').send({
      name: 'Full Stack',
    });
    expect(response.status).to.equal(204);
  });

  // describe('Sub-course feature', () => {
  //   it('Does something cool', () => {
  //     return true;
  //   });
  // });
});
