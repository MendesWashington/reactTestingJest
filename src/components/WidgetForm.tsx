import { useEffect, useRef, UIEvent, useState, FormEvent } from "react";

export const WidgetForm = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [dialog, setDialog] = useState("");
  const chat = useRef<HTMLDivElement>(null);

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    console.log(event.currentTarget.scrollTop);
    console.log("Tamanho ", event.currentTarget.offsetHeight);
    event.currentTarget.scrollTo(0, event.currentTarget.scrollHeight);
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setMessages((state) => [...state, dialog]);
  }

  useEffect(() => {
    chat.current?.scrollTo(0, chat.current.scrollHeight);
  }, [chat]);

  return (
    <>
      <div
        id="nia"
        className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg"
      >
        <div
          style={{
            border: "3px solid black",
            width: "400px",
            height: "100px",
            overflow: "scroll",
          }}
          ref={chat}
        >
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <p style={{ color: "white" }}>Mensagem</p>
        <form onSubmit={handleSubmit}>
          <input
            className="textArea min-w-[294px] w-full min-h-[50px] text-sm placeholder-zinc-400 text-zinc-900 border-zinc-600 bg-white-50 mb-4"
            placeholder="dialog..."
            onChange={(e) => setDialog(e.target.value)}
          ></input>

          <button
            type="submit"
            className="bg-zinc-300 px-3 h-12 rounded text-zinc-900 hover:bg-neutral-700 flex items-center  transition-colors;"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
