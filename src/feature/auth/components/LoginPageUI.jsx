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

export function LoginPageUI({ submit, loading, setLoading, error, setError,errorMsg, setErrorMsg, credentials, setCredentials}) {
  return (
    <Card className="w-[95%] max-w-sm bg-gradient-card border-default mx-auto mt-20">
      <CardHeader>
        <CardTitle className="text-white">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button className="text-primary" disabled={loading} variant="link"><NavLink to="/register">Sign Up</NavLink></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form className="text-white" autoComplete="off" onSubmit={(e) => {
  e.preventDefault();
    submit(credentials);
}}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label className="text-muted" htmlFor="email">Email</Label>
              <Input
                className="border-default focus:bg-surface"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                autoFocus
                
                onChange={(e) => {
                  setCredentials({...credentials, email:e.target.value})
                 
                }}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-muted" htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-muted"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password"  className="border-default" maxLength="10" onChange={(e) => setCredentials({...credentials, password:e.target.value})} required />
            </div>
            <Button disabled={loading} type="submit" className="w-full bg-primary hover-bg-primary-dark text-white" >
          {loading ? "loading": "Login"}
        </Button>
          </div>
        </form>
      </CardContent>
      {error && <p className="text-center text-error font-medium">{errorMsg}</p>}
      <CardFooter className="flex-col gap-2">
        
        {/* <Button variant="outline" className="w-full">
          Login with Google
        </Button> */}
      </CardFooter>
    </Card>
  )
}
