import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Rights from "./rights.jsx";
import Hr from "./hr.jsx";
import "./index.css";
import "animate.css";

const Timmings = () => {
  const schedule = [
    { day: "Monday", time: "5:00 AM - 12:00 PM", evening: "4:00 PM - 10:00 PM" },
    { day: "Tuesday", time: "5:00 AM - 12:00 PM", evening: "4:00 PM - 10:00 PM" },
    { day: "Wednesday", time: "5:00 AM - 12:00 PM", evening: "4:00 PM - 10:00 PM" },
    { day: "Thursday", time: "5:00 AM - 12:00 PM", evening: "4:00 PM - 10:00 PM" },
    { day: "Friday", time: "5:00 AM - 12:00 PM", evening: "4:00 PM - 10:00 PM" },
    { day: "Saturday", time: "6:00 AM - 12:00 PM", evening: "4:00 PM - 10:00 PM" },
    { day: "Sunday", time: "OFF", evening: "OFF" },
  ];

  return (
    <>
      <div className="bg-[#0f1113]">
        <Header />
      </div>

      <div className="min-h-screen bg-[#0f1113] text-white px-4 py-14">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
            GYM <span className="text-red-600">TIMINGS</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Train hard, stay consistent, and achieve your fitness goals.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="max-w-5xl mx-auto bg-[#181b1f] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <div className="bg-gradient-to-r from-red-600 to-red-700 py-4">
            <h2 className="text-center text-xl md:text-2xl font-bold tracking-widest">
              WEEKLY SCHEDULE
            </h2>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-3 bg-[#14171a] text-red-500 font-bold text-center py-4 tracking-wider">
            <span>DAY</span>
            <span>MORNING</span>
            <span>EVENING</span>
          </div>

          {/* Table Rows */}
          <div>
            {schedule.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-800 last:border-none hover:bg-[#20252a] transition-all duration-300"
              >
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-3 text-center py-5">
                  <span
                    className={`font-semibold ${
                      item.day === "Sunday"
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  >
                    {item.day}
                  </span>

                  <span className="text-gray-300">{item.time}</span>

                  <span className="text-gray-300">{item.evening}</span>
                </div>

                {/* Mobile */}
                <div className="md:hidden p-4 space-y-2">
                  <h3
                    className={`font-bold text-lg ${
                      item.day === "Sunday"
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  >
                    {item.day}
                  </h3>

                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Morning:
                    </span>{" "}
                    {item.time}
                  </p>

                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Evening:
                    </span>{" "}
                    {item.evening}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#181b1f] p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
            <h3 className="text-red-600 font-bold text-lg mb-2">
              Morning Batch
            </h3>

            <p className="text-gray-400">
              Best for professionals and students who prefer early workouts and
              a productive start to the day.
            </p>
          </div>

          <div className="bg-[#181b1f] p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
            <h3 className="text-red-600 font-bold text-lg mb-2">
              Evening Batch
            </h3>

            <p className="text-gray-400">
              Peak training hours with trainer support and group workout
              sessions.
            </p>
          </div>

          <div className="bg-[#181b1f] p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
            <h3 className="text-red-600 font-bold text-lg mb-2">
              Personal Training
            </h3>

            <p className="text-gray-400">
              One-on-one coaching sessions available with flexible scheduling.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Fitness Journey?
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Join our gym today and take the first step towards a stronger and
            healthier lifestyle.
          </p>
        </div>
      </div>

      <div className="bg-[#0f1113]">
        <Hr />
        <Footer />
        <Hr />
        <Rights />
        <Hr />
      </div>
    </>
  );
};

export default Timmings;
