import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: Index,
})

function Index() {
    return (
        <div className="flex flex-1 items-center justify-center">
            <span className="text-5xl font-bold">Fitness Log</span>
        </div>
    )
}
