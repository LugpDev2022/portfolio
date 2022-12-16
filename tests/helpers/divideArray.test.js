import { divideArray } from "../../src/helpers";

const oddArray = ["1", "2", "3"];
const pairArray = ["1", "2", "3", "4"];

describe("tests on divideArray.js", () => {
  test("should return an empty array", () => {
    const resp = divideArray();
    expect(resp).toEqual([]);
  });

  test("should divide the odd array correctly", () => {
    const [firstPart, secondPart] = divideArray(oddArray);

    expect(firstPart).toEqual(["1", "2"]);
    expect(secondPart).toEqual(["3"]);
  });

  test("should divide the pair array correctly", () => {
    pairArray;
    const [firstPart, secondPart] = divideArray(pairArray);

    expect(firstPart).toEqual(["1", "2"]);
    expect(secondPart).toEqual(["3", "4"]);
  });
});
