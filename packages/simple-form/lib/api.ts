import { Client } from "@gadget-client/simple-ticket-example";

export const api = new Client({
  authenticationMode: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});
