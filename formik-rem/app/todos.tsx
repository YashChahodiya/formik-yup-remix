`// app/routes/todos.tsx

import { useLoaderData, useAction } from "@remix-run/node";
import { Form, Submit } from "@remix-run/react";
import { Todo } from "../app/routes/todos"; // Import the data model (if applicable)

export default function TodosList() {
  const todos = useLoaderData<Todo[]>();
  const addTodo = useAction();

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => {}} />
            {todo.text}
          </li>
        ))}
      </ul> 
      <Form method="post" onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="Add a todo" />
        <Submit>Add Todo</Submit>
      </Form>
    </div>
  );
}

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  await addTodo(formData);

  // Handle successful submission (e.g., reset form, refetch data)
};
