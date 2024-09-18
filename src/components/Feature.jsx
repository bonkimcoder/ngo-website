import { FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";
const Feature = () => {
  const features = [
    {
      icon: <FaHandsHelping className="text-5xl text-green-700 mb-4" />,
      title: "Community Support",
      description:
        "Empowering local communities through education, healthcare, and livelihood programs.",
    },
    {
      icon: <FaLeaf className="text-5xl text-green-700 mb-4" />,
      title: "Environmental Sustainability",
      description:
        "Promoting sustainable practices and conservation efforts to protect the environment.",
    },
    {
      icon: <FaUsers className="text-5xl text-green-700 mb-4" />,
      title: "Volunteer Network",
      description:
        "Join our global network of volunteers dedicated to creating lasting change in underserved areas.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Key Initiatives
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to transforming lives through impactful
            initiatives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow  duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
