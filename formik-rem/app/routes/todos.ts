// app/routes/todos.ts

import { json } from "@remix-run/node"; // or cloudflare/deno
import { Todo } from "../todos"; // Import the data model (if applicable)

export async function loader() {
  // Replace with your actual API call logic (e.g., using fetch)
  const url = "https://api.example.com/todos"; // Replace with your API URL

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();

    // Type assertion or data validation if the API response structure is not guaranteed
    const todos: Todo[] = data as Todo[]; // Assuming an array of Todo objects

    return json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Response("Failed to fetch todos", { status: 500 });
  }
}
