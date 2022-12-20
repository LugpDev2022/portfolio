import { render } from "@testing-library/react";
import { Skillset } from "../../src/components";

describe("tests on <Skillset />", () => {
  test("should match snapshot", () => {
    const { container } = render(<Skillset />);
    expect(container).toMatchSnapshot();
  });
});
