import { v4 as uuidv4 } from 'uuid';

const kanbanData = [
    {
        id: uuidv4(),
        title: '📝 To DO',
        task: [
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de Html'
            },
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de React'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '📊 In progress',
        task: [
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de Html'
            },
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de React'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '✅ Done',
        task: [
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de Html'
            },
            {
                id: uuidv4(),
                title: 'Inscribirse al Curso de React'
            }
        ]
    }    
]

export default kanbanData;