import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { WidgetForm } from "./WidgetForm";

describe("Teste do component WidgetForm", () => {
  it("O componente Widget deve ser renderizado", () => {
    const { getByPlaceholderText, getByText } = render(<WidgetForm />);

    const inputElement = getByPlaceholderText("dialog...");
    const addButton = getByText("Enviar");

    useEvent.type(inputElement, "novo")
    useEvent.click(addButton);

    expect(getByText("novo")).toBeInTheDocument();
  });
});
