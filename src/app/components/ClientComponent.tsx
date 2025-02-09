"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  console.log("Client comp");
  return (
    <div className="rounded p-4 shadow">
      <h2 className="mb-4 text-xl font-bold">Client Component</h2>
      <p className="mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}
