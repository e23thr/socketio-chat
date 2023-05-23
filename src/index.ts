export * from "./types";
export * from "./payload";
export * from "./helpers";

class Chat {
  constructor() {
    console.log("Chat");
  }
}

if (window) {
  window.addEventListener("load", () => {
    (window as any).ChatClient = new Chat();
  });
}
