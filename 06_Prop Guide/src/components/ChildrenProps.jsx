function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
  };

  const headerColors = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600",
    red: "bg-gradient-to-r from-red-500 to-red-600",
  };

  const iconColors = {
    blue: "👤",
    green: "📊",
    purple: "🏆",
    red: "⚠️",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:rotate-1`}
    >
      {/* Card Header */}
      {title && (
        <div
          className={`${headerColors[color]} px-6 py-4 flex items-center gap-3`}
        >
          <span className="text-2xl filter drop-shadow">
            {iconColors[color]}
          </span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 text-gray-700 space-y-3">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-6",
    horizontal: "flex flex-wrap gap-6 justify-center",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-start gap-3">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ChildrenProps() {
  return (
    <section className="p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200">
      {/* Section Header */}
      <div className="mb-10 text-center relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        <div className="inline-block p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-4">
          <span className="text-4xl filter drop-shadow">👶</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Children Props
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The <strong className="text-purple-600">children prop</strong> allows
          you to pass JSX content inside a component. This enables flexible and
          reusable component structures.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <InfoCard
          icon="🎯"
          title="Composition"
          description="Build complex UIs by composing simple components"
        />
        <InfoCard
          icon="🔄"
          title="Reusability"
          description="Create flexible layouts with the same component"
        />
        <InfoCard
          icon="✨"
          title="Flexibility"
          description="Pass any JSX content as children"
        />
      </div>

      <div className="space-y-10">
        {/* Cards Example */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
              🃏
            </span>
            Card Component with Children
          </h3>

          <Container layout="grid">
            {/* Card 1 */}
            <Card title="User Profile" color="blue">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  👨
                </div>
                <div>
                  <p className="font-bold">Manish Motirale</p>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✉️</span> manish@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500">💼</span> 5 years experience
                </p>
              </div>

              <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                View Full Profile
              </button>
            </Card>

            {/* Card 2 */}
            <Card title="Statistics" color="green">
              <div className="grid grid-cols-3 gap-3 text-center mb-3">
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xl font-bold text-green-600">12</p>
                  <p className="text-xs text-gray-600">Projects</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xl font-bold text-green-600">2</p>
                  <p className="text-xs text-gray-600">Years</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xl font-bold text-green-600">8</p>
                  <p className="text-xs text-gray-600">Skills</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Technologies:</span> React,
                Node.js, Tailwind CSS, TypeScript
              </p>

              <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                View Detailed Stats
              </button>
            </Card>

            {/* Card 3 */}
            <Card title="Achievements" color="purple">
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg">
                  <span className="text-yellow-500">🏆</span>
                  <span className="text-sm">Completed React Course</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg">
                  <span className="text-blue-500">🚀</span>
                  <span className="text-sm">Built 10+ Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg">
                  <span className="text-green-500">📜</span>
                  <span className="text-sm">Internship Certified</span>
                </div>
              </div>

              <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                View All Achievements
              </button>
            </Card>

            {/* Card 4 - Extra card for demonstration */}
            <Card title="Recent Activity" color="red">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    🔔
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      New comment on your post
                    </p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    ⭐
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Repository starred</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                View All Activity
              </button>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;
