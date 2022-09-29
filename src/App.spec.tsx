import { render } from "@testing-library/react";
import App from "./App";

describe("Testando component App", () => {
  it("O componente app deve ser renderizado", () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });

  it("A palavra Hello Word deve aparecer na tela", () => {
    const { getByText } = render(<App />);

    expect(getByText("Hello Word!")).toBeTruthy();
  });
});
