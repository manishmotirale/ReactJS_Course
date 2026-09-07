import { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-8 rounded-3xl shadow-2xl w-full ${theme.backgroundColor} ${theme.textColor} relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full filter blur-3xl group-hover:scale-150 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full filter blur-3xl group-hover:scale-150 transition-all duration-700"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-6">
          <div
            className={`w-20 h-20 flex items-center justify-center text-4xl rounded-2xl ${theme.avatarBg} shadow-xl transform group-hover:rotate-6 transition-all duration-500`}
          >
            {user.avatar}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm opacity-90">{user.role}</p>

            <div className="flex items-center gap-2 mt-2">
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full ${theme.badgeBg} font-medium`}
              >
                {user.status}
              </span>
              <span className="text-xs opacity-70">✉️ {user.email}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        {user.stats && (
          <div className="grid grid-cols-3 gap-4 mt-8">
            {Object.entries(user.stats).map(([key, value]) => (
              <div
                key={key}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs uppercase opacity-80 tracking-wider">
                  {key}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          {Object.entries(actions).map(([key, action]) => (
            <button
              key={key}
              onClick={action.onClick}
              className={`${action.className} flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2`}
            >
              {key === "follow" && "👥"}
              {key === "message" && "💬"}
              {key === "hire" && "🤝"}
              {key === "connect" && "🔗"}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComplexProps() {
  const [message, setMessage] = useState("");

  const users = [
    {
      id: 1,
      user: {
        name: "Manish Motirale",
        email: "manish@example.com",
        avatar: "👨‍💻",
        role: "Senior Software Engineer",
        status: "Active",
        stats: {
          posts: 120,
          followers: 500,
          following: 300,
        },
      },
      theme: {
        backgroundColor:
          "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600",
        textColor: "text-white",
        avatarBg: "bg-gradient-to-br from-gray-900 to-gray-800",
        badgeBg: "bg-gradient-to-r from-green-400 to-green-500 text-white",
      },
      actions: {
        follow: {
          label: "Follow",
          onClick: () => setMessage("✨ You are now following Manish"),
          className:
            "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30",
        },
        message: {
          label: "Message",
          onClick: () => setMessage("💬 Opening chat with Manish"),
          className:
            "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30",
        },
      },
    },
    {
      id: 2,
      user: {
        name: "Aarav Sharma",
        email: "aarav@example.com",
        avatar: "🎨",
        role: "Creative Director",
        status: "Online",
        stats: {
          projects: 80,
          clients: 45,
          awards: 12,
        },
      },
      theme: {
        backgroundColor:
          "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500",
        textColor: "text-white",
        avatarBg: "bg-gradient-to-br from-gray-800 to-gray-900",
        badgeBg: "bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900",
      },
      actions: {
        hire: {
          label: "Hire Now",
          onClick: () => setMessage("🤝 Starting hiring process for Aarav"),
          className:
            "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30",
        },
        connect: {
          label: "Connect",
          onClick: () => setMessage("🔗 Connection request sent to Aarav"),
          className:
            "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30",
        },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-10 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Complex Props
        </h1>
        <p className="text-xl text-gray-600">
          Passing Objects, Arrays & Functions as Props
        </p>
      </div>

      {/* Key Points */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Key Points:</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong className="text-purple-600">Object Props:</strong> Pass
                structured data like user profiles with nested properties
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong className="text-purple-600">Theme Objects:</strong>{" "}
                Dynamic styling through configuration objects
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong className="text-purple-600">Function Props:</strong>{" "}
                Pass callbacks and event handlers for interactivity
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                <strong className="text-purple-600">
                  Conditional Rendering:
                </strong>{" "}
                Display content based on prop values
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {users.map((userData) => (
          <UserProfileCard key={userData.id} {...userData} />
        ))}
      </div>

      {/* Message Toast */}
      {message && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
          <span>{message}</span>
          <button
            onClick={() => setMessage("")}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default ComplexProps;
