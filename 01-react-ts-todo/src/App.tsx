import '@mantine/core/styles.css';
import { Button, MantineProvider } from "@mantine/core"

function App() {

  return (
    <MantineProvider>
      <div>
        <h1>Welcome to the React TypeScript Todo App</h1>
        {/* Other components will go here */}
        <Button color="blue" variant="filled">Click me</Button>
      </div>
    </MantineProvider>
  )
}

export default App
