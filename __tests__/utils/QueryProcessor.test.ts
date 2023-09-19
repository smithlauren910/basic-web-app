import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return sum', () => {
        const query = "	What is 4 plus 39?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("43");
    });

    test('should return primes', () => {
        const query = "Which of the following numbers are primes: 63, 83, 79, 53, 77?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("63");
    });
    
});