export default function MembershipPlans() {
  const plans = [
    {
      duration: "1 Month",
      male: "₹3,000",
      female: "₹2,500",
      couple: "₹5,000",
    },
    {
      duration: "3 Months",
      male: "₹7,000",
      female: "₹6,000",
      couple: "₹12,000",
    },
    {
      duration: "6 Months",
      male: "₹12,000",
      female: "₹10,000",
      couple: "₹18,000",
    },
    {
      duration: "Yearly",
      male: "₹20,000",
      female: "₹16,000",
      couple: "₹28,000",
      featured: true,
    },
  ];

  return (
    <section className=" min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black">
            MEMBERSHIP <span className="text-red-600">PLANS</span>
          </h1>

          <div className="w-32 h-1 bg-red-600 mx-auto mt-4 rounded-full" />

          <p className="text-gray-400 mt-5">
            Choose your plan and level up your fitness.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative
                rounded-3xl
                p-8
                border
                transition
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(255,0,0,.4)]

                ${
                  plan.featured
                    ? "bg-gradient-to-b from-red-900 to-black border-red-600 scale-105"
                    : "bg-[#111] border-gray-800"
                }
              `}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-red-600 px-5 py-2 rounded-bl-2xl font-bold">
                  BEST
                </div>
              )}

              <h2 className="text-3xl font-black mb-8">
                {plan.duration}
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span className="text-gray-400">Male</span>
                  <span className="font-bold text-red-500">
                    {plan.male}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Female</span>
                  <span className="font-bold text-red-500">
                    {plan.female}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Couple</span>
                  <span className="font-bold text-red-500">
                    {plan.couple}
                  </span>
                </div>

              </div>

              <button
                className="
                  w-full
                  mt-10
                  bg-red-600
                  hover:bg-red-700
                  py-4
                  rounded-xl
                  font-bold
                  transition">
                JOIN NOW
              </button>
            </div>
          ))}
        </div>

        {/* Extra Services */}
        <div className="mt-20">

          <h2 className="text-center text-4xl font-black mb-10">
            EXTRA <span className="text-red-600">SERVICES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#111] p-8 rounded-3xl border border-red-600">
              <h3 className="text-2xl font-bold mb-3">
                Personal Training
              </h3>

              <p className="text-gray-400">
                One-on-one guidance with expert trainers.
              </p>

              <div className="mt-5 text-4xl text-red-600 font-black">
                ₹10,000
              </div>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-red-600">
              <h3 className="text-2xl font-bold mb-3">
                Diet Chart
              </h3>

              <p className="text-gray-400">
                Customized diet plan for better results.
              </p>

              <div className="mt-5 text-4xl text-red-600 font-black">
                ₹3,000
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}