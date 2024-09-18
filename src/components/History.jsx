const History = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* History Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our History
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, our foundation has been dedicated to serving
              communities through impactful projects and initiatives. Over the
              years, we've grown from a small organization to one that has
              changed thousands of lives. Our story is one of resilience,
              commitment, and continuous efforts to create sustainable change.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is a world where every individual has access to the
              basic resources and opportunities they need to live a fulfilling
              life. We aim to create lasting, positive change in underserved
              communities through education, empowerment, and sustainable
              development projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
