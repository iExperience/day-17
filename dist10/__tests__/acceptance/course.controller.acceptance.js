"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('Courses Feature', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await test_helper_1.setupApplication());
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
        testlab_1.expect(response.status).to.equal(200);
        const responseBody = response.body;
        testlab_1.expect(responseBody).to.be.an.Array();
        testlab_1.expect(responseBody.length).to.be.greaterThan(0);
        // if (responseBody.length === 0) {
        //   throw new Error();
        // }
    });
    it('Should create a new Course using POST', async () => {
        const response = await client.post('/courses').send({
            name: 'Full Stack',
        });
        testlab_1.expect(response.status).to.equal(204);
    });
    // describe('Sub-course feature', () => {
    //   it('Does something cool', () => {
    //     return true;
    //   });
    // });
});
//# sourceMappingURL=course.controller.acceptance.js.map