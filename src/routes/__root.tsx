import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
    <>
        <main className="flex flex-1 flex-col">
            <Outlet />
        </main>
        <hr />
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{" "}
            <Link to="/workouts" className="[&.active]:font-bold">
                Workouts
            </Link>
        </div>
        <TanStackDevtools
            plugins={[
                {
                    name: "TanStack Router",
                    render: <TanStackRouterDevtools />,
                    defaultOpen: false,
                },
            ]}
        />
    </>
)

export const Route = createRootRoute({ component: RootLayout })
