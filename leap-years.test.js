import leapYears from "./leap-years";

/*
Acceptance Criteria:
All years divisible by 400 ARE leap years,
All years divisible by 100 but not by 400 are NOT leap years,
All years divisible by 4 but not by 100 ARE leap years,
All years not divisible by 4 are NOT leap years.
*/

describe("leap years", () => {
    it("if divisible by 400, return true", () => {
        expect(leapYears(400)).toBeTruthy();
        expect(leapYears(800)).toBeTruthy();
        expect(leapYears(799)).toBeFalsy();
    });
})