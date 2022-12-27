import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../components/kanban.css';
import kanbanData from './kanbanData';
import Card from '../card/Card';

const Kanban = () => {
    const [dataKanban, setkanbanData] = useState(kanbanData);
    const onDragEnd = (result) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId !== destination.droppableId)
        {
            const sourceColIndex=data.findIndex()
        }
    }
    return (
        <div>
            Kanban

        </div>
    )
}

export default Kanban