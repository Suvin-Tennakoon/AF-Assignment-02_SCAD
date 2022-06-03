const {submission} = require('./submission.controller');


describe("Submission Tests", () => {
    test('adding 2 new submissions to existing 10 submissions should equal to 12', () => {
        expect(submission.totalSubmissions(10,2)).toBe(12);
    });
})