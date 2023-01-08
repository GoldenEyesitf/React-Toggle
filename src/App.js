import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="app">hi</div>
  );
}
