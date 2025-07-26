"use client";

interface ExportPanelProps {
  onExport: (format: "mp4" | "webm" | "gif") => void;
}

export function ExportPanel({ onExport }: ExportPanelProps) {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold">Export Options</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <button
          onClick={() => onExport("mp4")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Export as MP4
        </button>
        <button
          onClick={() => onExport("webm")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Export as WebM
        </button>
        <button
          onClick={() => onExport("gif")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Export as GIF
        </button>
      </div>
    </div>
  );
}