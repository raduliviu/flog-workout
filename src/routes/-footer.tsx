import { Link } from "@tanstack/react-router"

export function Footer() {
    return (
        <div className="dock">
            <Link to="/" activeProps={{ className: "dock-active font-bold" }}>
                <span className="dock-label">Home</span>
            </Link>
            <Link to="/workouts" activeProps={{ className: "dock-active font-bold" }}>
                <span className="dock-label">Workouts</span>
            </Link>
        </div>
    )
}
