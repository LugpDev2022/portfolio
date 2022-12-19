import { fireEvent, render, screen } from "@testing-library/react";
import { AppNavbar } from "../../src/components";
import { AppContext } from "../../src/context";

describe("tests on <AppNavbar />", () => {
  const setIsNavFixed = vi.fn();
  const contextValue = {
    headerHeight: 150,
    isNavFixed: false,
    setIsNavFixed,
  };

  test("should fix the nav", () => {
    render(
      <AppContext.Provider value={contextValue}>
        <AppNavbar />
      </AppContext.Provider>
    );

    fireEvent.scroll(window, { target: { scrollY: 200 } });
    expect(setIsNavFixed).toHaveBeenCalledWith(true);
  });

  test("should not fix the nav", () => {
    render(
      <AppContext.Provider value={contextValue}>
        <AppNavbar />
      </AppContext.Provider>
    );

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(setIsNavFixed).toHaveBeenLastCalledWith(false);
  });

  test("should change the name in the nav", () => {
    render(
      <AppContext.Provider value={{ ...contextValue, isNavFixed: true }}>
        <AppNavbar />
      </AppContext.Provider>
    );

    const name = screen.getByText("Luis Cervantes");
    expect(name).toBeTruthy();
  });
});
