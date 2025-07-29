"use client";

import ThemeToggle from "@/components/ThemeToggle";

import { Instagram } from 'lucide-react';
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none pl-8">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="text-xl">Ayesha's Projects</a>
        </div>
        <div className="flex items-center gap-4 pr-8">
          <ThemeToggle/>
        </div>
      </div>
      <div className="hero bg-base-100 min-h-screen px-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src = "https://media2.giphy.com/media/oebD5alsVBFKg/source.gif"
            // src="https://i.pinimg.com/originals/08/5f/03/085f036aa0707d484ad1c2e2eb7bdb8f.gif"
            className="w-56 rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <p className="py-6">
              This is my second website. Below you can find different mini-projects I am working on!
            </p>
            <a href="#instagram-followers" className="btn btn-primary rounded">Take me there!</a>
          </div>
        </div>
      </div>
      <div>
        <section id="instagram-followers" className="min-h-screen bg-base-200 py-4 py-4">
          <div className="hero min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <div className="flex gap-4 justify-center items-center">
                  <Instagram className="w-8 h-8 top-[-1px]"/>
                  <h1 className="text-3xl font-bold"> Instagram Followers </h1>
                </div>
                <p className="py-6">
                  honestly i'm sick of people egoing me and unfollowing without removing me.
                  i made this simple script to figure out who i follow that doesn't follow me back.
                  give it a try.
                </p>
                <Link
                  href="/instagram-followers"
                  className="btn btn-primary rounded"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
