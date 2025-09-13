import heroShot from '../assets/react.svg'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Final Year Project Showcase
            </h1>
            <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed">
              We offer and develop Final Year Projects — built on your own idea — across Web Development, App Development, AI/ML, and Ethical Hacking.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#showcase" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105">
                Browse Categories
              </a>
              <a href="/projects" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition-all duration-300 transform hover:scale-105">
                View Projects
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Animated Background Elements */}
            <div className="absolute -inset-6 -z-10 rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white animate-pulse" />
            <div className="absolute -top-10 -left-8 h-24 w-24 rounded-full border border-neutral-200 animate-bounce" style={{animationDuration: '3s'}} />
            <div className="absolute -bottom-12 -right-10 h-28 w-28 rounded-full border border-neutral-200 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
            
            {/* Floating Code Elements */}
            <div className="absolute top-20 -right-4 text-xs text-neutral-400 font-mono animate-float" style={{animationDuration: '6s'}}>
              &lt;React /&gt;
            </div>
            <div className="absolute bottom-32 -left-6 text-xs text-neutral-400 font-mono animate-float" style={{animationDuration: '8s', animationDelay: '2s'}}>
              {`{ AI }`}
            </div>
            <div className="absolute top-1/2 -right-8 text-xs text-neutral-400 font-mono animate-float" style={{animationDuration: '7s', animationDelay: '1.5s'}}>
              Python
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              {/* Main Project Preview Card */}
              <div className="relative rounded-3xl border border-neutral-200 bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 bg-gradient-to-r from-neutral-50 to-white">
                  <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '1s'}} />
                  <span className="ml-2 text-xs font-medium text-neutral-500">Project Preview</span>
                </div>
                <div className="grid grid-cols-4 gap-0">
                  <div className="col-span-3 p-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-video rounded-lg border border-neutral-200 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 group hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                        <img src={heroShot} alt="Project preview" className="h-full w-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div className="aspect-video rounded-lg border border-neutral-200 bg-gradient-to-br from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 transition-all duration-300 animate-pulse" style={{animationDuration: '2s'}} />
                      <div className="aspect-video rounded-lg border border-neutral-200 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 animate-pulse" style={{animationDuration: '2.5s'}} />
                      <div className="aspect-video rounded-lg border border-neutral-200 bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300 animate-pulse" style={{animationDuration: '3s'}} />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-2 rounded bg-gradient-to-r from-neutral-900 to-neutral-700 animate-pulse" />
                      <div className="h-2 rounded bg-neutral-200 hover:bg-neutral-300 transition-colors duration-300" />
                      <div className="h-2 rounded bg-neutral-200 hover:bg-neutral-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="col-span-1 border-l border-neutral-200 p-5 bg-gradient-to-b from-neutral-50 to-white">
                    <div className="space-y-2">
                      <div className="h-2 w-24 rounded bg-gradient-to-r from-neutral-900 to-neutral-700 animate-pulse" />
                      <div className="h-2 w-16 rounded bg-neutral-200 hover:bg-neutral-300 transition-colors duration-300" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-10 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:bg-neutral-50" />
                      <div className="h-10 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:bg-neutral-50" />
                      <div className="h-10 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:bg-neutral-50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Features Card */}
              <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-sm bg-gradient-to-r from-green-500 to-blue-500 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-neutral-800">What we offer</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-700">
                  <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg>
                    <span>End‑to‑end development</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h8M8 12h8M8 17h5"/></svg>
                    <span>Source code & README</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 4h9l3 3v13H6z"/></svg>
                    <span>Report & PPT</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-orange-500 group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2"/></svg>
                    <span>Guidance & reviews</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-red-500 group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h10M4 17h7"/></svg>
                    <span>Deployment help</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-neutral-900 transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-indigo-500 group-hover:scale-110 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h10v10H7z"/></svg>
                    <span>IEEE/APA references</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero


