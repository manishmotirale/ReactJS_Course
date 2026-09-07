import React, { useState } from "react";

function Button({
  text,
  color = "primary",
  size = "medium",
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl font-semibold transition-all duration-300 shadow-lg
        flex items-center justify-center gap-2 border border-white/20
        
        ${size === "small" ? "text-sm px-4 py-2" : ""}
        ${size === "medium" ? "text-base px-6 py-3" : ""}
        ${size === "large" ? "text-lg px-10 py-4" : ""}

        ${color === "primary" ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white" : ""}
        ${color === "secondary" ? "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white" : ""}
        ${color === "danger" ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white" : ""}
        ${color === "success" ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white" : ""}

        ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "cursor-pointer hover:scale-105 hover:shadow-xl"}
      `}
    >
      {text}
      {!disabled && <span className="text-sm opacity-70">→</span>}
    </button>
  );
}

function BasicProps() {
  const [colorClicks, setColorClicks] = useState(0);
  const [sizeClicks, setSizeClicks] = useState(0);

  return (
    <section className="p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
            📦
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Basic Props</h2>
            <p className="text-gray-600">
              Simple props for component customization
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-8 pl-16">
          Demonstration of props controlling button color, size, and behavior.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Buttons Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                🎨
              </span>
              Different Colors
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                text="Primary"
                color="primary"
                onClick={() => setColorClicks((prev) => prev + 1)}
              />
              <Button
                text="Secondary"
                color="secondary"
                onClick={() => setColorClicks((prev) => prev + 1)}
              />
              <Button
                text="Danger"
                color="danger"
                onClick={() => setColorClicks((prev) => prev + 1)}
              />
              <Button
                text="Success"
                color="success"
                onClick={() => setColorClicks((prev) => prev + 1)}
              />
            </div>
          </div>

          {/* Size Buttons Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                📏
              </span>
              Different Sizes
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                text="Small"
                color="primary"
                size="small"
                onClick={() => setSizeClicks((prev) => prev + 1)}
              />
              <Button
                text="Large"
                color="secondary"
                size="large"
                onClick={() => setSizeClicks((prev) => prev + 1)}
              />
              <Button text="Disabled" color="danger" disabled />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-3">
              Color Button Activity
            </h4>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-blue-600">
                {colorClicks}
              </span>
              <span className="text-blue-400 mb-1">clicks</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${Math.min(colorClicks * 10, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <h4 className="font-semibold text-green-800 mb-3">
              Size Button Activity
            </h4>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-green-600">
                {sizeClicks}
              </span>
              <span className="text-green-400 mb-1">clicks</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${Math.min(sizeClicks * 10, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Click Summary Card */}
        <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-sm">
              📊
            </span>
            Total Activity Summary
          </h4>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-gray-500 text-sm">Color Buttons</p>
              <p className="text-2xl font-bold text-gray-800">{colorClicks}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Size Buttons</p>
              <p className="text-2xl font-bold text-gray-800">{sizeClicks}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Clicks</p>
              <p className="text-2xl font-bold text-blue-600">
                {colorClicks + sizeClicks}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
