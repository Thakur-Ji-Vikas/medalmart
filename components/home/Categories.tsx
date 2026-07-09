export default function Categories() {

  const categories = [
    {
      title: "Trophies",
      emoji: "🏆",
      desc: "Premium trophies for every achievement."
    },
    {
      title: "Medals",
      emoji: "🥇",
      desc: "Gold, Silver & Bronze medals."
    },
    {
      title: "Certificates",
      emoji: "📜",
      desc: "Professional certificate printing."
    },
    {
      title: "Shields",
      emoji: "🛡️",
      desc: "Wooden & Acrylic award shields."
    },
    {
      title: "Corporate Awards",
      emoji: "🏅",
      desc: "Recognition for employees & events."
    },
    {
      title: "Custom Awards",
      emoji: "✨",
      desc: "Personalized awards made for you."
    }
  ];

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Shop by Category
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Everything you need to celebrate success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
            >

              <div className="text-5xl mb-5">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}