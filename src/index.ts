export * from "./types";
export * from "./payload";
export * from "./helpers";

class Chat {
  constructor() {
    console.log("Chat");
  }
}

if (typeof window !== "undefined") {
  console.log("window is defined");
  window.addEventListener("load", () => {
    (window as any).ChatClient = new Chat();
  });
}
