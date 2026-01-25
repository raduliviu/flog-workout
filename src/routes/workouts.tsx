import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/workouts")({
    component: Workouts,
})

function Workouts() {
    return (
        <>
            <button className="btn" onClick={() => console.log("Creating workout...")}>
                + Create Workout
            </button>
        </>
    )
}
