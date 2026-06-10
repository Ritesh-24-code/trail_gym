import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Rights from "./Rights.jsx";
import Hr from "./hr.jsx"
import "./index.css"
import "animate.css"

const Timmings = () => {
  const schedule = [
    { day: "Monday", time: "5:00 AM - 10:00 PM" },
    { day: "Tuesday", time: "5:00 AM - 10:00 PM" },
    { day: "Wednesday", time: "5:00 AM - 10:00 PM" },
    { day: "Thursday", time: "5:00 AM - 10:00 PM" },
    { day: "Friday", time: "5:00 AM - 10:00 PM" },
    { day: "Saturday", time: "6:00 AM - 9:00 PM" },
    { day: "Sunday", time: "7:00 AM - 1:00 PM" },
  ];

  return (
    <>
    <div className="bg-[#0f1113]">
<Header/>
    </div>

      <div className="min-h-screen bg-[#0f1113] text-white px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
            GYM <span className="text-red-600">TIMINGS</span>
          </h1>

          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Train hard, stay consistent, and achieve your fitness goals.
          </p>
        </div>

        {/* Weekly Schedule */}
        <div className="max-w-4xl mx-auto bg-[#181b1f] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="bg-red-600 py-4">
            <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold tracking-widest">
              WEEKLY SCHEDULE
            </h2>
          </div>

          <div className="p-4 sm:p-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-4 border-b border-gray-800 last:border-none"
              >
                <span className="font-semibold text-base sm:text-lg">
                  {item.day}
                </span>

                <span className="text-gray-300 text-sm sm:text-base">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#181b1f] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
            <h3 className="text-red-600 font-bold mb-2 text-lg">
              Morning Batch
            </h3>

            <p className="text-gray-400 text-sm">
              Best for professionals and students who prefer early workouts and
              a fresh start to the day.
            </p>
          </div>

          <div className="bg-[#181b1f] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300">
            <h3 className="text-red-600 font-bold mb-2 text-lg">
              Evening Batch
            </h3>

            <p className="text-gray-400 text-sm">
              Peak training hours with trainers available for guidance and group
              workout sessions.
            </p>
          </div>

          <div className="bg-[#181b1f] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 sm:col-span-2 md:col-span-1">
            <h3 className="text-red-600 font-bold mb-2 text-lg">
              Personal Training
            </h3>

            <p className="text-gray-400 text-sm">
              Flexible one-on-one coaching sessions available by appointment.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to Start Your Fitness Journey?
          </h2>

          <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-xl mx-auto">
            Join our gym today and take the first step towards a stronger,
            healthier lifestyle.
          </p>

        
        </div>
      </div>
<div className="bg-[#0f1113]">
      <Hr/>

      <Footer />
      <Hr/>

      <Rights/>
      <Hr/>

</div>
    </>
  );
};

export default Timmings;