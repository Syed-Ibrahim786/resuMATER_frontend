import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavLink } from "react-router-dom"

export function RegisterPageUI({ submit, loading, setLoading, error, setError,errorMsg, setErrorMsg, credentials, setCredentials}) {
  return (
    <Card className="w-full max-w-sm bg-surface border-default mx-auto">
      <CardHeader>
        <CardTitle className="text-white" >Create your account</CardTitle>
        <CardDescription>
          Enter details to signup to your account
        </CardDescription>
        <CardAction>
          <Button className="text-primary" variant="link"><NavLink to="/login">Sign In</NavLink></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form className="text-white" onSubmit={(e) => {
          e.preventDefault();
          submit(credentials);
        }}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label className="text-muted" htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="syed-ibrahim"
                required
                onChange={(e) => {
                  setCredentials({...credentials, name:e.target.value})
                 
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-muted" htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setCredentials({...credentials, email:e.target.value})
                 
                }}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center ">
                <Label className="text-muted" htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required onChange={(e) => {
                  setCredentials({...credentials, password:e.target.value})
                 
                }}/>
            </div>
        <Button type="submit" disabled={loading} className="w-full bg-primary hover-bg-primary-dark text-white" >
          
          {loading ? "loading" : "Register"}
        </Button>
          </div>
        </form>
      </CardContent>
            {error && <section className="text-center text-error font-medium">{errorMsg}</section>}

      <CardFooter className="flex-col gap-2">
        {/* <Button variant="outline" className="w-full">
          Login with Google
        </Button> */}
      </CardFooter>
    </Card>
  )
}
