import { useRef, forwardRef } from "react";

// Input component that accepts a ref prop
const CustomInput = forwardRef(
  ({ label, placeholder, className, icon }, ref) => {
    return (
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm">
            {icon || "📝"}
          </span>
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={`w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
          focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500
          transition-all duration-300 bg-white shadow-sm ${className}`}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            ✏️
          </div>
        </div>
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current || secondInputRef.current) {
      alert(
        `Input value: ${inputRef.current.value} and Second value: ${secondInputRef.current.value}`,
      );
    }
  };

  const clearInput = () => {
    if (inputRef.current || secondInputRef.current) {
      inputRef.current.value = "";
      secondInputRef.current.value = "";
      inputRef.current.focus();
      secondInputRef.current.focus();
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-10 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🔗
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">
                  React Ref Props
                </h3>
                <p className="text-gray-600">
                  Learn how{" "}
                  <span className="font-semibold text-blue-600">useRef</span>{" "}
                  and
                  <span className="font-semibold text-indigo-600">
                    {" "}
                    forwardRef
                  </span>{" "}
                  allow React components to access and control DOM elements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-6 text-white h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  💡
                </span>
                Key Concepts
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <span className="font-bold">useRef</span> stores a reference
                    to a DOM element
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Direct DOM interaction like focusing inputs</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <span className="font-bold">forwardRef</span> passes refs to
                    child components
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span>Perfect for reusable input components</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  🎮
                </span>
                Try It Out
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-200 rounded-lg flex items-center justify-center text-blue-700">
                      1
                    </span>
                    Primary Input
                  </h4>
                  <CustomInput
                    ref={inputRef}
                    label="First Input with Ref"
                    placeholder="Type something..."
                    icon="📌"
                  />
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <h4 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-200 rounded-lg flex items-center justify-center text-purple-700">
                      2
                    </span>
                    Secondary Input
                  </h4>
                  <CustomInput
                    ref={secondInputRef}
                    label="Second Input with Ref"
                    placeholder="Type something else..."
                    icon="🎯"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={focusInput}
                  className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
                >
                  <span>🎯</span> Focus First
                </button>

                <button
                  onClick={focusSecondInput}
                  className="px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
                >
                  <span>🎯</span> Focus Second
                </button>

                <button
                  onClick={getInputValue}
                  className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
                >
                  <span>📋</span> Get Value
                </button>

                <button
                  onClick={clearInput}
                  className="px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
                >
                  <span>🗑️</span> Clear
                </button>
              </div>

              {/* Live Preview Card */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                    ⚡
                  </span>
                  Live Preview
                </h4>
                <p className="text-gray-600 text-sm">
                  Type in the inputs and use the buttons above to interact with
                  them via refs. The focus operations happen instantly without
                  re-rendering!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
