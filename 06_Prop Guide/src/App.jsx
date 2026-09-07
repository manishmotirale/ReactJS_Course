import "./App.css";

import BasicProps from "./components/BasicProps";
import RefProps from "./components/RefProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler";

/* =========================
   Navigation
========================= */

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Context", icon: "🎨" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-2xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="flex justify-center flex-wrap gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-500 hover:to-purple-600 active:scale-95 border border-white/20"
            >
              <span className="mr-2 text-lg filter drop-shadow">
                {section.icon}
              </span>
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* =========================
   Main App Content
========================= */

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800"
      }`}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* HEADER */}
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
            <div className="w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          </div>
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            React Props Explained
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React with
            interactive examples
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div
              className={`p-6 rounded-2xl ${isDark ? "bg-gray-800/50" : "bg-white/70"} backdrop-blur-sm shadow-xl border ${isDark ? "border-gray-700" : "border-white/50"}`}
            >
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-lg">5+ Components</h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Interactive examples
              </p>
            </div>
            <div
              className={`p-6 rounded-2xl ${isDark ? "bg-gray-800/50" : "bg-white/70"} backdrop-blur-sm shadow-xl border ${isDark ? "border-gray-700" : "border-white/50"}`}
            >
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-bold text-lg">Real-world Patterns</h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Production ready code
              </p>
            </div>
            <div
              className={`p-6 rounded-2xl ${isDark ? "bg-gray-800/50" : "bg-white/70"} backdrop-blur-sm shadow-xl border ${isDark ? "border-gray-700" : "border-white/50"}`}
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg">Theme Support</h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Light/Dark mode
              </p>
            </div>
          </div>
        </header>

        {/* SECTIONS */}
        <div className="space-y-24">
          <section id="basic" className="scroll-mt-24">
            <BasicProps />
          </section>

          <section id="children" className="scroll-mt-24">
            <ChildrenProps />
          </section>

          <section id="ref" className="scroll-mt-24">
            <RefProps />
          </section>

          <section id="complex" className="scroll-mt-24">
            <ComplexProps />
          </section>

          <section id="theme" className="scroll-mt-24">
            <ThemeToggler />
          </section>
        </div>

        {/* FOOTER */}
        <footer
          className={`mt-24 text-center pb-8 pt-12 border-t ${
            isDark
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <div className="flex justify-center gap-6 mb-4">
            <span className="text-2xl hover:scale-110 transition-transform cursor-default">
              ⚛️
            </span>
            <span className="text-2xl hover:scale-110 transition-transform cursor-default">
              🎨
            </span>
            <span className="text-2xl hover:scale-110 transition-transform cursor-default">
              🚀
            </span>
          </div>

          <p>
            Made with 💖 using Bun, Vite, React and Tailwind CSS By{" "}
            <a
              href="https://www.linkedin.com/in/manish-motirale"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium transition-colors ${
                isDark
                  ? "hover:text-blue-400 text-gray-300"
                  : "hover:text-blue-600 text-gray-800"
              }`}
            >
              Manish Motirale
            </a>
          </p>

          <p className="text-sm mt-2 opacity-60">
            © 2026 React Props Explained. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

/* =========================
   Root App
========================= */

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
