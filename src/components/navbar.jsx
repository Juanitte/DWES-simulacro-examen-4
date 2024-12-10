import { Logout } from "@/components/forms"
import { logout } from "@/lib/actions"

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-around">
                <a href="/homepage" className="text-decoration-none text-white p-4">
                    Home
                </a>
                <a href="/alumnos-db" className="text-decoration-none text-white p-4">
                    Database
                </a>
                <a href="/api-rest" className="text-decoration-none text-white p-4">
                    API REST
                </a>
                <Logout action={logout}></Logout>
            </div>
        </>
    );
}