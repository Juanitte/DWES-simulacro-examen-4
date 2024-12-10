import { Logout } from "@/components/forms"
import { logout } from "@/lib/actions"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-around">
                <Link href="/homepage" className="text-decoration-none text-white p-4">
                    Inicio
                </Link>
                <Link href="/alumnos-db" className="text-decoration-none text-white p-4">
                    Alumnos BBDD
                </Link>
                <Link href="/alumnos-api" className="text-decoration-none text-white p-4">
                    Alumnos API REST
                </Link>
                <Link href="/profesores-db" className="text-decoration-none text-white p-4">
                    Profesores Database
                </Link>
                <Link href="/profesores-api" className="text-decoration-none text-white p-4">
                    Profesores API REST
                </Link>
                <Logout action={logout}></Logout>
            </div>
        </>
    );
}