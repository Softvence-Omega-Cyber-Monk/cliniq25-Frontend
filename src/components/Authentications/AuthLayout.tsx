// import React from 'react';
// import logincover from "@/assets/logincover.png"
// interface AuthLayoutProps {
//   children: React.ReactNode;
// }

// const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
//   return (
//     <div className="flex flex-col md:flex-row bg-white min-h-screen">
//       <div className="w-full md:w-5/12 bg-clinic-dark text-white bg-[#0B0D3D] p-8 md:p-12 flex flex-col justify-between relative ">
//         <div className="z-10 text-center">
//             <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">WELCOME TO CLINIQ</h1>
//             <p className="mt-4 text-lg text-gray-300">Reduce administrative burden, amplify patient safety.</p>
//         </div>
//         <div className="mt-8 md:mt-0 flex-grow flex items-end">
//             <img 
//                 src={logincover} 
//                 alt="Group of medical professionals"
//                 className="w-full h-auto object-cover object-bottom"
//             />
//         </div>
//       </div>
//       <div className="w-full md:w-7/12 bg-clinic-light-bg p-8 md:p-12 bg-[#ECEFDE]">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;


import React from "react";
import logincover from "@/assets/logincover.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      
      {/* LEFT SIDE */}
      <div className="w-full md:w-5/12 bg-[#0B0D3D] text-white p-8 md:p-12 flex flex-col relative">
        
        <div className="z-10 text-center mt-[104px]">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            WELCOME TO CLINIQ
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Reduce administrative burden, amplify patient safety.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
          <img
            src={logincover}
            alt="Group of medical professionals"
            className="w-full h-auto object-cover object-bottom"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-7/12 bg-[#ECEFDE]">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;
