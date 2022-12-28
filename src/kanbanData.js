import { v4 as uuidv4 } from 'uuid';

const kanbanData = [
    {
        id: uuidv4(),
        title: '📝 To DO',
        tasks: [
            {
                id: uuidv4(),
                title: 'Aprender Vue.js'
            },
            {
                id: uuidv4(),
                title: 'Aprender Python'
            },
            {
                id: uuidv4(),
                title: 'Aprender PHP'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '📊 In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Profundizando sobre React'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '✅ Done',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso de JavaScript'
            }
        ]
    }    
]

export default kanbanData;