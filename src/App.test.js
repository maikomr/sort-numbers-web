import { fireEvent, render } from "@testing-library/react";
import App from "./App";

jest.mock("./NumbersApi");

describe("App", () => {
  it("should render default state", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should render valid format", () => {
    const { container, getByTestId } = render(<App />);
    fireEvent.change(getByTestId("input"), { target: { value: "5,3,2,5" } });
    expect(container).toMatchSnapshot();
  });
});
