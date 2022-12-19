import { renderHook } from "@testing-library/react";
import { divideArray } from "../../src/helpers";
import { useProjectModal } from "../../src/hooks";

vi.mock("../../src/helpers/divideArray");
vi.mock("/node_modules/react/index.js", async () => {
  const actual = await vi.importActual("/node_modules/react/index.js");
  return {
    ...actual,
    useContext: () => ({
      projectModalInfo: {
        techStack: [],
      },
      showProjectModal: false,
      handleCloseProjectModal: () => { },
    }),
  };
});

describe("tests on useProjectModal.jsx", () => {
  beforeEach(() => vi.clearAllMocks());

  test("should return the correct values", () => {
    divideArray.mockReturnValue([[], []]);
    const { current } = renderHook(useProjectModal).result;

    expect(current).toEqual({
      techStack: [],
      showProjectModal: false,
      handleCloseProjectModal: expect.any(Function),
      techStackFirstPart: [],
      techStackSecondPart: [],
    });
  });

  test("should call divideArray()", () => {
    divideArray.mockReturnValue([[], []]);
    renderHook(useProjectModal).result;
    expect(divideArray).toHaveBeenCalledWith([]);
  });
});
