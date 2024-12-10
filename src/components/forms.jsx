import { LogIn, LogOut } from "lucide-react"

export function Login({ action, callbackUrl }) {
    return (
        <>
            <form action={action} className="flex flex-col gap-2">
                <input type='hidden' name='callbackUrl' defaultValue={callbackUrl} />
                <label className="text-sm" htmlFor="username"><i className="fa fa-user" aria-hidden="true"></i> Username</label>
                <input type="text" name="username" id="username" className="max-w-[200px] rounded-sm text-black" />
                <label className="text-sm" htmlFor="password"><i className="fa fa-lock" aria-hidden="true"></i> Password</label>
                <input type="password" name="password" id="password" className="max-w-[200px] rounded-sm text-black" />
                <button type="submit" className="mt-4 max-w-[200px] border border-slate-400 bg-slate-200 text-black rounded-md">
                    <LogIn className="inline p-1"/>Login
                </button>
            </form>
        </>
    );
}

export function Logout({ action }) {
    return (
        <>
            <form action={action} className="flex flex-col gap-2">
                    <button type="submit" className="mt-4 max-w-[200px] border border-slate-400 bg-slate-200 text-black rounded-md">
                        <LogOut className="inline p-1"/>Logout
                    </button>
            </form>
        </>
    );
}