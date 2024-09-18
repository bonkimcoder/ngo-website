import { useState, useEffect } from "react";

const stats = [
  {
    id: "stats-1",
    value: 1200,
    description: "Lives Changed",
  },
  {
    id: "stats-2",
    value: 50,
    description: "Ongoing Projects",
  },
  {
    id: "stats-3",
    value: 500,
    description: "Volunteers Worldwide",
  },
  {
    id: "stats-4",
    value: 5000,
    description: "Donations Received",
  },
];

const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  console.log(counters);

  useEffect(() => {
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      setCounters((prevCounters) =>
        prevCounters.map((count, index) => {
          const targetValue = stats[index].value;
          const newValue = Math.floor(lerp(0, targetValue, progress));
          return newValue;
        })
      );

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [stats]);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We measure our success by the difference we make in the communities
            we serve.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h4 className="text-5xl font-extrabold text-green-700 mb-4">
                {stat.description == "Donations Received" ? "$" : ""}
                {counters[index]}+
              </h4>
              <p className="text-lg text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
