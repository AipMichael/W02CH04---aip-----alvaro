const alpia = new SkylabArray {}

describe("this method (.empujar) pushes any received value and includes it in the object shared and returns the number of elements inside", function () {
    test("when method receives 5, it should return 'it should'", () => {

        //Arrange
        const n1 = 5;
        const expected = 1;
        //Act
        const result = alpia.empujar(5);
        // Assert
        expect(result).toBe(expected);
    });
}