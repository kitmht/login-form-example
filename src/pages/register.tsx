import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Register() {
  return (
    <div className="flex h-screen w-screen select-none items-center justify-center bg-slate-800 text-center text-white">
      <form className="w-2/3 max-w-sm rounded-2xl border border-slate-200/80 bg-slate-200/20 p-5 backdrop-blur-sm">
        <h1 className="mt-8 text-3xl">Register</h1>
        <div className="mt-8 w-full px-2">
          <div className="relative flex items-center border-b">
            <input
              type="email"
              id="email"
              placeholder="email"
              className="peer w-full bg-transparent p-2 placeholder-transparent focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute -top-5 left-0 text-sm text-white transition-all duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-slate-400 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-white"
            >
              email
            </label>
            <EnvelopeIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-8 w-full px-2">
          <div className="relative flex items-center border-b">
            <input
              type="password"
              id="password"
              placeholder="password"
              className="peer w-full bg-transparent p-2 placeholder-transparent focus:outline-none"
            />
            <label
              htmlFor="password"
              className="absolute -top-5 left-0 text-sm text-white transition-all duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-slate-400 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-white"
            >
              password
            </label>
            <LockClosedIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-8 w-full px-2">
          <label className="cursor-pointer transition-all duration-300 hover:text-slate-400">
            <input type="checkbox" className="mx-1 cursor-pointer" />
            Remember me
          </label>
        </div>
        <div className="mt-5">
          <button className="h-10 w-full rounded-3xl bg-slate-200 text-black transition-all duration-300 hover:bg-slate-400 hover:text-white">
            Register
          </button>
        </div>
        <div className="mt-10">
          {'Already have an account?'}
          <Link
            href="/login"
            className="ml-2 cursor-pointer underline transition-all duration-300 hover:text-slate-400"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
