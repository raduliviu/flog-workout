export const dummyExercises = [
    {
        id: 1,
        name: "Barbell Back Squat",
    },
    {
        id: 2,
        name: "Barbell Bench Press",
    },
    {
        id: 3,
        name: "Barbell Deadlift",
    },
    {
        id: 4,
        name: "Barbell Overhead Press",
    },
]

export const dummyWorkouts = [
    {
        id: 1,
        name: "Upper Day",
        description: "Focus on upper body strength",
        exercises: [dummyExercises[1], dummyExercises[3]],
    },
    {
        id: 2,
        name: "Lower Day",
        description: "Focus on lower body strength",
        exercises: [dummyExercises[0], dummyExercises[2]],
    },
]
