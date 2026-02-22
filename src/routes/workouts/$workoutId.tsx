import { createFileRoute, Link, useParams } from "@tanstack/react-router"
import { dummyExercises, dummyWorkouts } from "../../dummyData"
import { ArrowBigLeft, Plus } from "lucide-react"
import { useRef, useState } from "react"

export const Route = createFileRoute("/workouts/$workoutId")({
    component: RouteComponent,
})

function RouteComponent() {
    const { workoutId } = useParams({ from: "/workouts/$workoutId" })
    const selectedWorkout = dummyWorkouts.find((workout) => String(workout.id) === workoutId)

    const [exercises, setExercises] = useState([...(selectedWorkout?.exercises || [])])
    const modalRef = useRef<HTMLDialogElement>(null)
    const [exerciseName, setExerciseName] = useState("")

    const handleAddExercise = () => {
        const trimmedName = exerciseName.trim()
        if (!trimmedName) return

        const newId = dummyExercises.length + 1
        const newExercise = { id: newId, name: trimmedName }

        dummyExercises.push(newExercise)
        selectedWorkout?.exercises.push(newExercise)

        setExercises((prev) => [...prev, newExercise])
        setExerciseName("")
        modalRef.current?.close()
    }

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
            <button className="btn" onClick={() => modalRef.current?.showModal()}>
                <Plus />
                Add
            </button>

            <dialog id="addExerciseModal" ref={modalRef} className="modal" onClose={() => setExerciseName("")}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Exercise</h3>
                    <fieldset className="fieldset py-4">
                        <legend className="fieldset-legend">Exercise Name</legend>
                        <input
                            type="text"
                            className="input validator w-full"
                            placeholder="e.g. Barbell Row"
                            value={exerciseName}
                            onChange={(e) => setExerciseName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault()
                                    handleAddExercise()
                                }
                            }}
                            required
                            minLength={3}
                        />
                        <p className="validator-hint">Must be at least 3 characters long</p>
                    </fieldset>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cancel</button>
                        </form>
                        <button
                            disabled={exerciseName.length < 3}
                            className="btn btn-primary"
                            onClick={handleAddExercise}
                        >
                            Add Exercise
                        </button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}
