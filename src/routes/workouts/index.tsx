import { createFileRoute, Link } from "@tanstack/react-router"
import { Eye, Play } from "lucide-react"
import { dummyWorkouts } from "../../dummyData"

export const Route = createFileRoute("/workouts/")({
    component: Workouts,
})

function Workouts() {
    return (
        <div className="items-center justify-center flex flex-col p-4 gap-4">
            <button className="btn" onClick={() => console.log("Creating workout...")}>
                + Create Workout
            </button>

            {dummyWorkouts.map((workout) => (
                <div key={workout.id} className="card w-[80dvw] bg-base-200 card-sm shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{workout.name}</h2>
                        <p>{workout.description}</p>
                        <div className="card-actions justify-end">
                            <Link
                                className="btn btn-circle btn-info"
                                to="/workouts/$workoutId"
                                params={{ workoutId: String(workout.id) }}
                            >
                                <Eye className="size-5" />
                            </Link>

                            <button className="btn btn-circle btn-primary">
                                <Play className="size-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
