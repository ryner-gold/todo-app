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

                    <div className="form__container">
                        <form className="form">
                            <label className="form__title"> Title:
                                <input name="task-title" id="task-title" placeholder="Input task title"/>
                            </label>
                            <label>
                                Description:
                                <input name="task-description" id="task-description"
                                       placeholder="Input task description"/>
                            </label>
                            <button type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default App