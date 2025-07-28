import ThemeToggle from "@/components/ThemeToggle";

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
        <a className="text-xl">daisyUI</a>
      </div>
      <div className="flex items-center gap-4 pr-8">
        <ThemeToggle/>
      </div>
    </div>
      <header className="font-bold">
        Hello world!
      </header>
      <div className="hero bg-base-200 min-h-screen px-4">
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
            <button className="btn btn-primary">Take me there!</button>
          </div>
        </div>
      </div>
    </>
  );
}
