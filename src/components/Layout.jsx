import { Outlet } from "react-router"
import { Navbar } from "./Navbar"
import { Button } from "./Button"
import { InputField } from "./InputField"
export const Layout = ()=>{
    return <>
        <nav>
            <Navbar/>
        </nav>
        <main className="bg-slate-50 min-h-dvh">
            <Outlet/>  
            <Button varient={'primary'}>
                Click me
            </Button> 
            <InputField
        id="email"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        value=''
        error=''
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
        </main>
    </>
}