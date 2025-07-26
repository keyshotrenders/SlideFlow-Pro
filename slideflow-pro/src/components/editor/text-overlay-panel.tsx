"use client";

import { useState } from "react";

interface TextOverlayPanelProps {
  onAddText: (text: string) => void;
}

export function TextOverlayPanel({ onAddText }: TextOverlayPanelProps) {
  const [text, setText] = useState("");

  const handleAddText = () => {
    onAddText(text);
    setText("");
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold">Text Overlay</h3>
      <div className="mt-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter text..."
        />
        <button onClick={handleAddText} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Add Text
        </button>
      </div>
    </div>
  );
}