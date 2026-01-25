import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
    <>
        <main className="flex flex-1 flex-col items-center px-8 py-6 gap-4">
            <Outlet />
        </main>
        <hr />
        <div className="px-8 py-2 flex items-center justify-center gap-2">
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
