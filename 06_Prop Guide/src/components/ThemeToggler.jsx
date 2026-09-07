import { createContext, useContext, useState } from "react";

/* =========================
   Create Context
========================= */

const ThemeContext = createContext();

/* =========================
   Theme Provider Component
========================= */

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/* =========================
   Custom Hook
========================= */

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

/* =========================
   Toggle Button
========================= */

function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 shadow-lg flex items-center gap-2
      ${
        isDark
          ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-600 hover:shadow-gray-900/50"
          : "bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 border border-yellow-300 hover:shadow-yellow-500/50"
      }`}
    >
      <span className="text-xl">{isDark ? "🌙" : "☀️"}</span>
      {isDark ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

/* =========================
   Reusable Card
========================= */

function Card({ children, className = "" }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border
      ${
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 border-gray-700"
          : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border-gray-200"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================
   StatCard Component
========================= */

function StatCard({ icon, label, value, trend }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-4 rounded-xl ${isDark ? "bg-gray-700/50" : "bg-white"} border ${isDark ? "border-gray-600" : "border-gray-100"}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        {trend && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${trend > 0 ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="text-sm opacity-70">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

/* =========================
   FeatureCard Component
========================= */

function FeatureCard({ icon, title, description }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-4 rounded-xl ${isDark ? "bg-gray-700/30" : "bg-gray-50"} border ${isDark ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  );
}

/* =========================
   Main Page
========================= */

function ThemeToggler() {
  const { theme, isDark } = useTheme();
  const [clickCount, setClickCount] = useState(0);
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div
      className={`min-h-screen p-10 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${isDark ? "bg-gray-800" : "bg-white"} shadow-xl`}
            >
              🎨
            </div>
            <h1 className="text-3xl font-bold">Theme Toggler</h1>
          </div>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"} ml-2`}>
            This page demonstrates theme switching using the React Context API.
          </p>
        </div>

        <ThemeToggleButton />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {["profile", "stats", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300
              ${
                activeTab === tab
                  ? isDark
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDark
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* USER INFO CARD */}
        <Card className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${isDark ? "bg-gray-700" : "bg-blue-100"}`}
            >
              😎
            </div>
            <div>
              <h2 className="text-xl font-bold">Manish Motirale</h2>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                manish@example.com
              </p>
              <span
                className={`inline-block mt-1 px-3 py-1 text-xs rounded-full ${isDark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-700"}`}
              >
                🟢 Active
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                💼
              </span>
              <span>Senior Developer at Tech Corp</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                📍
              </span>
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                🎂
              </span>
              <span>Joined March 2024</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105
              ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Edit Profile
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105
              ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              Settings
            </button>
          </div>
        </Card>

        {/* STATISTICS CARD */}
        <Card className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
            >
              📊
            </span>
            Statistics
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <StatCard
              icon="🖱️"
              label="Total Clicks"
              value={clickCount}
              trend={12}
            />
            <StatCard
              icon="🎨"
              label="Current Theme"
              value={theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              trend={-5}
            />
          </div>

          <div
            className={`p-4 rounded-xl ${isDark ? "bg-gray-700/30" : "bg-gray-50"} border ${isDark ? "border-gray-700" : "border-gray-200"}`}
          >
            <p className="flex justify-between items-center">
              <span>Status:</span>
              <span className="text-green-500 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </span>
            </p>
            <p className="flex justify-between items-center mt-2">
              <span>Last Active:</span>
              <span>Just now</span>
            </p>
          </div>
        </Card>
      </div>

      {/* INTERACTIVE DEMO CARD */}
      <Card className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
              >
                🎮
              </span>
              Interactive Demo
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Click the button below to interact with the application and see
              how components react to theme changes.
            </p>
          </div>

          <button
            onClick={() => setClickCount(clickCount + 1)}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:rotate-2 shadow-xl flex items-center gap-3
              ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
              }`}
          >
            <span className="text-2xl">🎯</span>
            Click Me! ({clickCount})
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Interaction Progress</span>
            <span>{Math.min(clickCount * 10, 100)}%</span>
          </div>
          <div
            className={`w-full h-3 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
          >
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gradient-to-r from-orange-500 to-pink-500"
              }`}
              style={{ width: `${Math.min(clickCount * 10, 100)}%` }}
            ></div>
          </div>
        </div>
      </Card>

      {/* CONTEXT API INFO CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon="🎭"
          title="createContext()"
          description="Creates a new context container that holds the global state"
        />
        <FeatureCard
          icon="📦"
          title="Provider"
          description="Wraps components and supplies data to all children"
        />
        <FeatureCard
          icon="⚡"
          title="useContext()"
          description="Hook that allows components to consume context data"
        />
      </div>

      {/* Detailed Explanation Card */}
      <Card className="mt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
          >
            ℹ️
          </span>
          About React Context API
        </h2>

        <p className="mb-3">
          The{" "}
          <strong className={isDark ? "text-blue-400" : "text-blue-600"}>
            React Context API
          </strong>{" "}
          is used to share data between components without passing props
          manually at every level.
        </p>

        <p className="mb-4">
          It is commonly used for global state like themes, authentication,
          language preferences, and user settings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-xl ${isDark ? "bg-gray-700/30" : "bg-blue-50"} border ${isDark ? "border-gray-700" : "border-blue-100"}`}
          >
            <div className="font-mono text-sm mb-2">ThemeContext.js</div>
            <pre
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {`const ThemeContext = 
  createContext();`}
            </pre>
          </div>

          <div
            className={`p-4 rounded-xl ${isDark ? "bg-gray-700/30" : "bg-green-50"} border ${isDark ? "border-gray-700" : "border-green-100"}`}
          >
            <div className="font-mono text-sm mb-2">ThemeProvider</div>
            <pre
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {`<ThemeContext.Provider
  value={value}>
  {children}
</ThemeContext.Provider>`}
            </pre>
          </div>

          <div
            className={`p-4 rounded-xl ${isDark ? "bg-gray-700/30" : "bg-purple-50"} border ${isDark ? "border-gray-700" : "border-purple-100"}`}
          >
            <div className="font-mono text-sm mb-2">useTheme()</div>
            <pre
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {`const { isDark } = 
  useTheme();`}
            </pre>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ThemeToggler;
