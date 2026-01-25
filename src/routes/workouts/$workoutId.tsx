import { createFileRoute, Link, useParams } from "@tanstack/react-router"
import { dummyWorkouts } from "../../dummyData"
import { ArrowBigLeft } from "lucide-react"

export const Route = createFileRoute("/workouts/$workoutId")({
    component: RouteComponent,
})

function RouteComponent() {
    const { workoutId } = useParams({ from: "/workouts/$workoutId" })
    const selectedWorkout = dummyWorkouts.find((workout) => String(workout.id) === workoutId)
    const exercises = selectedWorkout?.exercises || []

    return (
        <>
            <Link className="btn btn-circle" to="..">
                <ArrowBigLeft />
            </Link>
            <h3 className="text-2xl">{selectedWorkout?.name}</h3>
            <span>{selectedWorkout?.description}</span>
            <span>{exercises.length} exercises</span>
            {exercises.map((exercise) => (
                <div key={exercise.id} className="card card-sm bg-base-200 shadow-sm w-full">
                    <div className="card-body">
                        <h4 className="card-title">{exercise.name}</h4>
                    </div>
                </div>
            ))}
        </>
    )
}
