function App() {
    return (
        <>
            <header className="flex items-center justify-center">
                <h1>Flog Workout</h1>
            </header>
            <main className="flex flex-1 items-center justify-center">
                <button onClick={() => console.log("Creating workout...")}>+ Create Workout</button>
            </main>
        </>
    )
}

export default App
