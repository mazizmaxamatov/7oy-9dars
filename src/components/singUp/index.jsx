import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios"


export function SignUpAndSignIn() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        "https://green-shop-backend.onrender.com/api/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7",
        { name, surname, email, password }
      )
      localStorage.setItem("user", JSON.stringify(res.data.data.token))
      alert("Sign up muvaffaqiyatli!")
    } catch (err) {
      console.error(err)
      alert("Sign up xatolikka uchradi.")
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        "https://green-shop-backend.onrender.com/api/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7",
        { email, password }
      )
      localStorage.setItem("user", JSON.stringify(res.data.data.token))
      alert("Tizimga muvaffaqiyatli kirdingiz!")
    } catch (err) {
      console.error(err)
      alert("Login yoki parol noto‘g‘ri.")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">

        <Tabs defaultValue="sign-up" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-up">Register</TabsTrigger>
            <TabsTrigger value="sign-in">Login</TabsTrigger>
          </TabsList>

          {/* SIGN UP */}
          <TabsContent value="sign-up">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <input
                  id="name"
                  value={name}
                  className="col-span-3 border px-2 py-1 rounded"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="surname" className="text-right">Surname</Label>
                <input
                  id="surname"
                  value={surname}
                  className="col-span-3 border px-2 py-1 rounded"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  className="col-span-3 border px-2 py-1 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">Password</Label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  className="col-span-3 border px-2 py-1 rounded"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button type="submit">Sign Up</Button>
            </form>
          </TabsContent>

          {/* SIGN IN */}
          <TabsContent value="sign-in">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  className="col-span-3 border px-2 py-1 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">Password</Label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  className="col-span-3 border px-2 py-1 rounded"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button type="submit">Sign In</Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
























// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import axios from "axios";
// import { useEffect, useState } from "react"


// export function SingUp() {
//     async function SingUp() {
//         e.preventDefault(e);
//         const res = await axios.post( `https://green-shop-backend.onrender.com/api/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`, 
//         { name, surname, email, password }
//     );
//     localStorage.setItem("user",  JSON.stringify(res.data.data.token));
//     localStorage.setItem("user",  JSON.stringify(res.data.data.token));
//     }

//     useEffect(() => {
//         SingUp();
//     }, [])

//     const [name, setName] = useState("");
//     const [surname, setSurname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");



//     return (
//         <Dialog>


//             <DialogTrigger asChild>
//                 <Button variant="outline">Login</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//                 <DialogHeader>
//                     <DialogTitle>Edit profile</DialogTitle>
//                     <DialogDescription>
//                         Make changes to your profile here. Click save when you're done
//                     </DialogDescription>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                     <Tabs defaultValue="account" className="w-[400px]">
//                         <TabsList className="grid w-full grid-cols-2">
//                             <TabsTrigger value="account">Sign Up</TabsTrigger>
//                             <TabsTrigger value="password">Sing In</TabsTrigger>
//                         </TabsList>
//                         <TabsContent value="account">
//                             <form action="" onSubmit={SingUp}>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="name" className="text-right">
//                                         Name
//                                     </Label>
//                                     <input
//                                         id="name"
//                                         value={name}
//                                         className="col-span-3"
//                                         onChange={(e) => setName(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="username" className="text-right">
//                                         Surname
//                                     </Label>
//                                     <input
//                                         id="surname"
//                                         value={surname}
//                                         className="col-span-3"
//                                         onChange={(e) => setSurname(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="username" className="text-right">
//                                         Email
//                                     </Label>
//                                     <input
//                                         id="email"
//                                         value={email}
//                                         className="col-span-3"
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-4 items-center gap-4">
//                                     <Label htmlFor="username" className="text-right">
//                                         Password
//                                     </Label>
//                                     <input
//                                         id="password"
//                                         value={password}
//                                         className="col-span-3"
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                 </div>
//                                <button>Sing up</button>
//                             </form>
//                         </TabsContent>
//                         <TabsContent value="password">
//                             Signin
//                         </TabsContent>
//                     </Tabs>

//                 </div>
//             </DialogContent>
//         </Dialog>
//     )
// }
