import React, { useState } from 'react'
// import Hr from "./hr.jsx"
import "./index.css"
import "animate.css"
const features = [
    { label: "Gym Access", included: true },
    { label: "Basic Equipment", included: true },
    { label: "Locker Room", included: true },
    { label: "1 Group Class", included: true },
    { label: "Personal Trainer", included: false },
];
const CheckIcon = ({ checked }) => (
    <span
        className={`flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 ${checked ? "bg-red-600" : "bg-zinc-700"
            }`}
    >
        {checked ? (
            <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        ) : (
            <svg
                className="w-3 h-3 text-zinc-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        )}
    </span>
);

const pricing = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <div>
                <div>
                    <div className='grid    justify-center items-center align-middle'>
                        <div className='  grid justify-center align-middle items-center text-white  text-center ' >
                            <span className='text-red-600 text-[1rem] ' >
                                PRICING PLANS
                            </span>
                            <span className="text-[2rem]    font-[beba]  tracking-wider ">
                                MEMEBERSHIP PLANS
                            </span>
                            <span className='text-gray-400 text-[1rem]  tracking-wider'>
                                Choose the plan that fits best for you.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='flex  justify-center items-center align-middle flex-wrap'>
                            <div className="  flex items-center justify-center p-6">
                                <div
                                    className="relative w-72 rounded-2xl border border-zinc-800 bg-zinc-900 p-7 flex flex-col gap-6 shadow-2xl transition-transform duration-300"
                                    style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    {/* Subtle top accent line */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />

                                    {/* Plan name */}
                                    <p className="text-zinc-400 text-sm font-semibold tracking-widest uppercase">
                                        Basic Plan
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-end gap-1">
                                        <span className="text-white text-6xl font-black leading-none tracking-tight">
                                            ₹29
                                        </span>
                                        <span className="text-zinc-500 text-sm mb-2 font-medium">/month</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-zinc-800" />

                                    {/* Features */}
                                    <ul className="flex flex-col gap-3">
                                        {features.map((f) => (
                                            <li key={f.label} className="flex items-center gap-3">
                                                <CheckIcon checked={f.included} />
                                                <span
                                                    className={`text-sm font-medium ${f.included ? "text-zinc-200" : "text-zinc-600 line-through"
                                                        }`}
                                                >
                                                    {f.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                   
                                </div>
                            </div>
                            <div className="  flex items-center justify-center p-6">
                                <div
                                    className="relative w-72 rounded-2xl border border-zinc-800 bg-zinc-900 p-7 flex flex-col gap-6 shadow-2xl transition-transform duration-300 hover:scale-105 transition-all"
                                >
                                    {/* Subtle top accent line */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />

                                    {/* Plan name */}
                                    <p className="text-zinc-400 text-sm font-semibold tracking-widest uppercase">
                                        Basic Plan
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-end gap-1">
                                        <span className="text-white text-6xl font-black leading-none tracking-tight">
                                            ₹29
                                        </span>
                                        <span className="text-zinc-500 text-sm mb-2 font-medium">/month</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-zinc-800" />

                                    {/* Features */}
                                    <ul className="flex flex-col gap-3">
                                        {features.map((f) => (
                                            <li key={f.label} className="flex items-center gap-3">
                                                <CheckIcon checked={f.included} />
                                                <span
                                                    className={`text-sm font-medium ${f.included ? "text-zinc-200" : "text-zinc-600 line-through"
                                                        }`}
                                                >
                                                    {f.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                   
                                </div>
                            </div>
                            <div className="  flex items-center justify-center p-6">
                                <div
                                    className="relative w-72 rounded-2xl border border-zinc-800 bg-zinc-900 p-7 flex flex-col gap-6 shadow-2xl transition-transform duration-300 hover:scale-105 transition-all"
                                >
                                    {/* Subtle top accent line */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />

                                    {/* Plan name */}
                                    <p className="text-zinc-400 text-sm font-semibold tracking-widest uppercase">
                                        Basic Plan
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-end gap-1">
                                        <span className="text-white text-6xl font-black leading-none tracking-tight">
                                            ₹29
                                        </span>
                                        <span className="text-zinc-500 text-sm mb-2 font-medium">/month</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-zinc-800" />

                                    {/* Features */}
                                    <ul className="flex flex-col gap-3">
                                        {features.map((f) => (
                                            <li key={f.label} className="flex items-center gap-3">
                                                <CheckIcon checked={f.included} />
                                                <span
                                                    className={`text-sm font-medium ${f.included ? "text-zinc-200" : "text-zinc-600 line-through"
                                                        }`}
                                                >
                                                    {f.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricing
