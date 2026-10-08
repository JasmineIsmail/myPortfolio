import { FaTerminal } from "react-icons/fa";
const About = () => {
  return (
    <section
      id="about"
      className="bg-blue-950 px-4 py-14 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">

        {/* About Text */}
        <div className="w-full max-w-3xl lg:w-3/5">
          <h2 className="mb-8 text-3xl font-extrabold text-center sm:text-4xl">
            Get to know Me
          </h2>

          <p className="mb-4 text-base sm:text-lg">
            Passionate B.Tech graduate skilled in building scalable,
            responsive web applications.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            My technical journey expanded after practical hands-on
            application during my internship at Xman Technology
            Solutions, Kannur.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            I thrive on translating complex user requirements into crisp,
            responsive user experiences. Whether it's crafting scalable
            backend REST APIs using Node.js & Express or designing sleek,
            reactive UI components with React & Tailwind CSS, I maintain
            a high standard for clean code architecture and performance
            optimization.
          </p>
        </div>

        {/* Profile Decorative Visual */}
        <div className="flex w-full justify-center lg:w-2/5 lg:justify-end">
          <div className="group relative w-full max-w-xl">

            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative rounded-3xl bg-slate-900 p-4 sm:p-8 lg:p-10">

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                <span className="text-xs text-slate-500 font-mono">
                  jasmine.js
                </span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 py-4 text-slate-300">
                <p className="text-purple-400">
                  <span className="text-indigo-400">const</span> developer = &#123;
                </p>

                <p className="pl-4">
                  name: <span className="text-amber-300">'Jasmine Ismail'</span>,
                </p>

                <p className="pl-4">
                  role: <span className="text-amber-300">'MERN Developer'</span>,
                </p>

                <p className="pl-4">
                  degree: <span className="text-amber-300">'B.Tech ECE Graduate'</span>,
                </p>

                <p className="pl-4">
                  location: <span className="text-amber-300">'Kannur, Kerala, India'</span>,
                </p>

                <p className="pl-4">
                  passionate: <span className="text-cyan-400">true</span>
                </p>

                <p className="text-purple-400">&#125;;</p>
              </div>

              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaTerminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-300">
                    Status: Ready to Code
                  </span>
                </div>

                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About