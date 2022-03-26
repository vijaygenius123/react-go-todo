import {Box} from '@mantine/core'
import {useQuery} from 'react-query'
import axios from 'axios'

function App() {
    const {data, status, error} = useQuery('todos', async () => {
        const {data} = await axios.get('http://localhost:8080/api/todos')
        return data
    })
    
    if (status === 'loading') {
        return <span>Loading...</span>
    }

    return (
        <Box>
            <h1>Hello World</h1>
            <h2>
                {JSON.stringify(data)}
            </h2>
        </Box>

    )
}

export default App
