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
    {
        id: 5,
        name: "Seated Leg Curls",
    },
    { id: 6, name: "Seated Leg Extensions" },
    { id: 7, name: "Dumbbell Bicep Curls" },
    { id: 8, name: "Dumbbell Tricep Extensions" },
    { id: 9, name: "Cable Ab Crunches" },
    { id: 10, name: "Hanging Leg Raises" },
    { id: 11, name: "Decline Ab Crunches" },
    { id: 12, name: "Reverse Ab Crunches" },
]

export const dummyWorkouts = [
    {
        id: 1,
        name: "Upper Day A",
        description: "Focus on upper body strength",
        exercises: [dummyExercises[1], dummyExercises[3]],
    },
    {
        id: 2,
        name: "Lower Day A",
        description: "Focus on lower body strength",
        exercises: [dummyExercises[0], dummyExercises[2]],
    },
    {
        id: 3,
        name: "Upper Day B",
        description: "Focus on upper body hypertrophy",
        exercises: [dummyExercises[6], dummyExercises[7]],
    },
    {
        id: 4,
        name: "Lower Day B",
        description: "Focus on lower body hypertrophy",
        exercises: [dummyExercises[4], dummyExercises[5]],
    },
    {
        id: 5,
        name: "Core Workout",
        description: "Focus on core strength",
        exercises: [dummyExercises[8], dummyExercises[9]],
    },
    {
        id: 6,
        name: "Advanced Core Workout",
        description: "Intense core training session",
        exercises: [dummyExercises[10], dummyExercises[11]],
    },
]
