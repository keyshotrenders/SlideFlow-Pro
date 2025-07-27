"use client";

import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Slide } from "@/types";

interface SortableItemProps {
  slide: Slide;
  onClick: () => void;
  onDelete: () => void;
}

export function SortableItem({ slide, onClick, onDelete }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: slide.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className="flex-shrink-0 w-32 h-20 relative rounded-md overflow-hidden cursor-grab"
    >
      <Image
        src={slide.src}
        alt={`Thumbnail ${slide.id}`}
        fill
        style={{ objectFit: "cover" }}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
      >
        X
      </button>
    </div>
  );
}