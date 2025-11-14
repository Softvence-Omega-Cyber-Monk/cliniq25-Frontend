// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../store/Slices/AuthSlice/authSlice";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";

// const loginSchema = z.object({
//   email: z.string().email("Invalid email format"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   role: z.enum(["therapist", "individual"], {
//     required_error: "Please select a role",
//   }),
// });

// type LoginFormInputs = z.infer<typeof loginSchema>;

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm<LoginFormInputs>({
//     resolver: zodResolver(loginSchema),
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const selectedRole = watch("role");

//   const onSubmit = (data: LoginFormInputs) => {
//     console.log("Login Data:", data);
//     // Use the role selected in the form
//     dispatch(login({ role: data.role === "therapist" ? "admin" : "user" }));
//     if (data.role === "therapist") {
//       navigate("/dashboard");
//     } else if (data.role === "individual") {
//       navigate("/user-dashboard");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-inter">
//       <div className="flex w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-3xl transition-all duration-500 ease-in-out">
//         <div className="w-full lg:w-[100%] p-8 sm:p-12">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Sign In</h1>
//             <p className="text-base text-gray-500 mt-2">Log in to access your dashboard and sessions.</p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Role Selection */}
//             <div>
//               <Label className="block text-base font-semibold text-gray-800 mb-3">
//                 Account Type
//               </Label>
//               <div className="grid grid-cols-2 gap-4">
//                 {/* Therapist Role Card */}
//                 <label className={`relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-5 transition-all duration-200 ease-in-out ${
//                   selectedRole === "therapist"
//                     ? "border-sky-500 bg-sky-50 shadow-md shadow-sky-100"
//                     : "border-gray-200 hover:border-sky-300 hover:bg-gray-50"
//                 }`}>
//                   <input
//                     type="radio"
//                     value="therapist"
//                     className="absolute opacity-0"
//                     {...register("role")}
//                   />
//                   {/* <UserIcon className={`w-6 h-6 mb-2 ${selectedRole === "therapist" ? "text-sky-600" : "text-gray-400"}`} /> */}
//                   <span className="font-semibold text-gray-800">Admin panel</span>
//                 </label>

//                 {/* Individual Role Card */}
//                 <label className={`relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-5 transition-all duration-200 ease-in-out ${
//                   selectedRole === "individual"
//                     ? "border-sky-500 bg-sky-50 shadow-md shadow-sky-100"
//                     : "border-gray-200 hover:border-sky-300 hover:bg-gray-50"
//                 }`}>
//                   <input
//                     type="radio"
//                     value="individual"
//                     className="absolute opacity-0"
//                     {...register("role")}
//                   />
//                   {/* <HeartIcon className={`w-6 h-6 mb-2 ${selectedRole === "individual" ? "text-sky-600" : "text-gray-400"}`} /> */}
//                   <span className="font-semibold text-gray-800">Individual panel</span>
//                 </label>
//               </div>
//               {errors.role && (
//                 <p className="text-red-500 text-sm mt-2 font-medium">{errors.role.message}</p>
//               )}
//             </div>

//             {/* Email Field */}
//             <div>
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@email.com"
//                 {...register("email")}
//                 className="outline-none"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1 font-medium">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 {...register("password")}
//                  className="outline-none"
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1 font-medium">{errors.password.message}</p>
//               )}
//             </div>

//             {/* Forgot Password Link */}
//             <div className="text-sm text-right">
//               <Link to="/forgot-password" className="font-medium text-sky-600 hover:text-sky-500">
//                 Forgot password?
//               </Link>
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" className="mt-6">
//               Login
//             </Button>

//             {/* Sign Up Link */}
           
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import { useState } from 'react';
import { Role } from '@/components/Authentications/types';
import AuthLayout from '@/components/Authentications/AuthLayout';
import RoleSelection from '@/components/Authentications/RoleSelection';
import SignUpForm from '@/components/Authentications/SignUpForm';
import LoginForm from '@/components/Authentications/LoginForm';

type View = 'ROLE_SELECTION' | 'SIGN_UP' | 'LOGIN';

function App() {
  const [currentView, setCurrentView] = useState<View>('ROLE_SELECTION');
  const [initialRole, setInitialRole] = useState<Role>(Role.INDIVIDUAL);

  const startSignUp = (role: Role) => {
    setInitialRole(role);
    setCurrentView('SIGN_UP');
  };

  const showLogin = () => {
    setCurrentView('LOGIN');
  };

  const showRoleSelection = () => {
    setCurrentView('ROLE_SELECTION');
  };

  const renderView = () => {
    switch (currentView) {
      case 'SIGN_UP':
        return <SignUpForm 
                    initialRole={initialRole} 
                    onSwitchToLogin={showLogin}
                />;
      case 'LOGIN':
        return <LoginForm onSwitchToSignUp={showRoleSelection} />;
      case 'ROLE_SELECTION':
      default:
        return <RoleSelection 
                    onContinue={startSignUp}
                    onSwitchToLogin={showLogin}
                />;
    }
  };

  return (
    <main className=" font-sans">
      <div className="">
        <AuthLayout>
            {renderView()}
        </AuthLayout>
      </div>
    </main>
  );
}

export default App;