import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
    <>
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{" "}
            <Link to="/workouts" className="[&.active]:font-bold">
                Workouts
            </Link>
        </div>
        <hr />
        <main className="flex flex-1 items-center justify-center">
            <Outlet />
        </main>
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
