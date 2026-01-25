import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { Footer } from "./-footer"

const RootLayout = () => (
    <>
        <main className="flex flex-1 flex-col items-center px-8 py-6 pb-20 gap-4">
            <Outlet />
        </main>
        <Footer />
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
