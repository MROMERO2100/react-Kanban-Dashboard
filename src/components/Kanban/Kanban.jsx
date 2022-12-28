import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import kanbanData from '../../kanbanData';
import { useState } from 'react';
import Card  from "../card/Card";
import './Kanban.scss';

const Kanban = () => {
    const [dataKanban, setkanbanData] = useState(kanbanData);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = dataKanban.findIndex((e) => e.id === source.droppableId);
            const destinationColIndex = dataKanban.findIndex((e) => e.id === destination.droppableId);
            
            const sourceCol = dataKanban[sourceColIndex];
            const destinationCol = dataKanban[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];

            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);

            dataKanban[sourceColIndex].tasks = sourceTask;
            dataKanban[destinationColIndex].tasks = destinationTask;

            setkanbanData(dataKanban);
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {dataKanban.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => (
                            <div {...provided.droppableProps}
                                className="kanban__section"
                                ref={provided.innerRef}>
                                <div className="kanban__section__title">{section.title}</div>
                                <div className="kanban__section__content">
                                    {section.tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={
                                                        { ...provided.draggableProps.style, opacity: snapshot.isDragging ? "0.5" : "1" }
                                                    }>
                                                    <Card>{task.title}</Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                     {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    )
}

export default Kanban