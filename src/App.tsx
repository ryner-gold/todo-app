import './App.css'

function App() {

    return (
        <div className="app-container">
            <header>
                <h1>Two Column Layout Example</h1>
            </header>

            <main className="columns">
                <div className="column__left">
                    <h2>Column A</h2>
                </div>

                <div className="column__right">
                    <h2>Create Task</h2>
                   
                </div>
            </main>
        </div>
    )
}

export default App