
import React, { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Role } from './types';
import { UserIcon, UsersIcon, ChevronDownIcon } from './Icons';

interface SignUpFormProps {
  initialRole: Role;
  onSwitchToLogin: () => void;
}

type FormData = {
  name: string;
  practiceName?: string;
  countryCode: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptPolicy: boolean;
};

const countries = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
];

const RoleSelector: React.FC<{ 
  selectedRole: Role; 
  onRoleChange: (role: Role) => void;
  disabled?: boolean;
}> = ({ selectedRole, onRoleChange, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const roleData = {
    [Role.PRIVATE_PRACTICE]: { icon: <UsersIcon className="w-5 h-5" />, label: 'PRIVATE PRACTICE' },
    [Role.INDIVIDUAL]: { icon: <UserIcon className="w-5 h-5" />, label: 'INDIVIDUAL' },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (role: Role) => {
    onRoleChange(role);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full flex items-center justify-between text-left px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <span className="mr-3 text-clinic-accent">{roleData[selectedRole].icon}</span>
          {roleData[selectedRole].label}
        </span>
        <ChevronDownIcon 
          className={`w-5 h-5 ml-2 text-gray-400 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1" role="listbox">
            {Object.values(Role).map((role) => (
              <li key={role} role="option">
                <button
                  type="button"
                  onClick={() => handleSelect(role)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center focus:outline-none focus:bg-gray-50"
                >
                  <span className="mr-3 text-gray-500">{roleData[role].icon}</span>
                  {roleData[role].label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CountrySelector: React.FC<{
  selectedCountry: string;
  onCountryChange: (countryCode: string) => void;
  disabled?: boolean;
}> = ({ selectedCountry, onCountryChange, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountryData = countries.find(country => country.code === selectedCountry) || countries[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (countryCode: string) => {
    onCountryChange(countryCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="flex items-center justify-between text-left px-3 py-2 text-sm bg-transparent focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <span className="mr-2">{selectedCountryData.flag}</span>
          <span className="text-gray-700">{selectedCountryData.code}</span>
        </span>
        <ChevronDownIcon 
          className={`w-4 h-4 ml-1 text-gray-400 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <div className="absolute z-20 w-48 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <ul className="py-1" role="listbox">
            {countries.map((country) => (
              <li key={country.code} role="option">
                <button
                  type="button"
                  onClick={() => handleSelect(country.code)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center focus:outline-none focus:bg-gray-50"
                >
                  <span className="mr-2">{country.flag}</span>
                  <span className="mr-2 text-gray-600">{country.code}</span>
                  <span className="text-gray-500 text-xs">{country.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SignUpForm: React.FC<SignUpFormProps> = ({ initialRole, onSwitchToLogin }) => {
  const [currentRole, setCurrentRole] = useState<Role>(initialRole);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    defaultValues: {
      countryCode: '+1'
    }
  });
  
  const password = watch("password");
  const acceptPolicy = watch("acceptPolicy");
  const countryCode = watch("countryCode");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log({ ...data, role: currentRole });
      alert("Account created successfully! Please log in.");
      onSwitchToLogin();
    } catch (error) {
      console.error('Signup error:', error);
      alert("Account creation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCountryChange = (newCountryCode: string) => {
    setValue('countryCode', newCountryCode);
  };

  return (
    <div className="flex flex-col h-full min-h-[600px] mx-4">
          <div className="flex justify-between items-center gap-9 mb-8 mt-4">
            <div>
              {/* <label className="text-sm font-bold text-gray-700 block mb-2">
                Account Type
              </label> */}
              <RoleSelector 
                selectedRole={currentRole} 
                onRoleChange={setCurrentRole}
                disabled={isLoading}
              />
            </div>
            <p className="text-sm">
              Already have an account?{' '}
              <button 
                type="button"
                onClick={onSwitchToLogin} 
                className="font-bold text-clinic-accent hover:underline focus:outline-none focus:ring-2 focus:ring-clinic-accent focus:ring-offset-2 rounded text-[#3FDCBF]"
                disabled={isLoading}
              >
                Sign In
              </button>
            </p>
          </div>
      <div className="flex flex-col justify-center">
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-2">Join us today! Please fill in your details.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-bold text-gray-700 block mb-2">
                Your Name
              </label>
              <input 
                id="name"
                type="text"
                {...register("name", { 
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })} 
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-transparent transition-colors bg-[#fff]"
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={isLoading}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-xs mt-2 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.name.message}
                </p>
              )}
            </div>

            {currentRole === Role.PRIVATE_PRACTICE && (
              <div>
                <label htmlFor="practiceName" className="text-sm font-bold text-gray-700 block mb-2">
                  Private Practice Name
                </label>
                <input 
                  id="practiceName"
                  type="text"
                  {...register("practiceName", { 
                    required: "Practice name is required",
                    minLength: {
                      value: 2,
                      message: "Practice name must be at least 2 characters"
                    }
                  })} 
                  placeholder="Enter your practice name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-transparent transition-colors bg-[#fff]"
                  aria-describedby={errors.practiceName ? "practiceName-error" : undefined}
                  disabled={isLoading}
                />
                {errors.practiceName && (
                  <p id="practiceName-error" className="text-red-500 text-xs mt-2 flex items-center">
                    <span className="mr-1">⚠</span>
                    {errors.practiceName.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="phone" className="text-sm font-bold text-gray-700 block mb-2">
                Phone Number
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-clinic-primary focus-within:border-transparent transition-colors">
                <div className="border-r border-gray-300">
                  <CountrySelector 
                    selectedCountry={countryCode}
                    onCountryChange={handleCountryChange}
                    disabled={isLoading}
                  />
                </div>
                <input 
                  id="phone"
                  type="tel"
                  {...register("phone", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: "Please enter a valid phone number"
                    },
                    minLength: {
                      value: 6,
                      message: "Phone number must be at least 6 digits"
                    }
                  })} 
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border-none rounded-r-lg focus:outline-none focus:ring-0 bg-[#fff]"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  disabled={isLoading}
                />
              </div>
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-xs mt-2 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-bold text-gray-700 block mb-2">
                Email
              </label>
              <input 
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { 
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: "Please enter a valid email address" 
                  } 
                })} 
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-transparent transition-colors bg-[#fff]"
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isLoading}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-2 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-bold text-gray-700 block mb-2">
                Password
              </label>
              <input 
                id="password"
                type="password"
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { 
                    value: 6, 
                    message: "Password must be at least 6 characters" 
                  } 
                })} 
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-transparent transition-colors bg-[#fff]"
                aria-describedby={errors.password ? "password-error" : undefined}
                disabled={isLoading}
              />
              {errors.password && (
                <p id="password-error" className="text-red-500 text-xs mt-2 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.password.message}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-bold text-gray-700 block mb-2">
                Confirm Password
              </label>
              <input 
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", { 
                  required: "Please confirm your password", 
                  validate: value => value === password || "Passwords do not match" 
                })} 
                placeholder="Retype your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinic-primary focus:border-transparent transition-colors bg-[#fff]"
                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                disabled={isLoading}
              />
              {errors.confirmPassword && (
                <p id="confirmPassword-error" className="text-red-500 text-xs mt-2 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            
            <div className="flex items-start space-x-3 pt-2">
              <input 
                id="acceptPolicy"
                type="checkbox"
                {...register("acceptPolicy", { 
                  required: "You must accept the privacy policy to continue" 
                })} 
                className="h-5 w-5 text-clinic-primary border-gray-300 rounded focus:ring-clinic-primary mt-0.5 flex-shrink-0"
                disabled={isLoading}
              />
              <label htmlFor="acceptPolicy" className="text-sm text-gray-600 leading-5">
                I accept the privacy policy. We value your personal information and outline how we collect, use, and protect your data. By using our services, you agree to these terms.
              </label>
            </div>
            {errors.acceptPolicy && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="mr-1">⚠</span>
                {errors.acceptPolicy.message}
              </p>
            )}

            <div className="flex justify-center">
            <button 
              type="submit" 
              disabled={isLoading || !acceptPolicy}
              className="w-full flex items-center justify-center h-[60px] px-10 py-2 bg-[#298CDF] text-white font-bold rounded-[20px] gap-2 hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#298CDF] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
