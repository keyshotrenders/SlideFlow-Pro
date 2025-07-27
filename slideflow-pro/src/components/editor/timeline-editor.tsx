"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Slide } from "@/types";
import { SortableItem } from "./sortable-item";

interface TimelineEditorProps {
  slides: Slide[];
  onReorder: (slides: Slide[]) => void;
  onSelectSlide: (slide: Slide) => void;
  onDeleteSlide: (slideId: string) => void;
}

export function TimelineEditor({
  slides,
  onReorder,
  onSelectSlide,
  onDeleteSlide,
}: TimelineEditorProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = slides.findIndex((slide) => slide.id === active.id);
      const newIndex = slides.findIndex((slide) => slide.id === over.id);
      onReorder(arrayMove(slides, oldIndex, newIndex));
    }
  };

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-24 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-muted-foreground">Your timeline will appear here</p>
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={slides} strategy={horizontalListSortingStrategy}>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
          <div className="flex space-x-4">
            {slides.map((slide) => (
              <SortableItem
                key={slide.id}
                slide={slide}
                onClick={() => onSelectSlide(slide)}
                onDelete={() => onDeleteSlide(slide.id)}
              />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}