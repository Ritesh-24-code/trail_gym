import { useState } from "react";
import Bg from"./assets/contacts_bg.png"

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.03.768-1.926 1.793-2.043A49.02 49.02 0 0112 4c2.713 0 5.38.22 7.957.295 1.025.117 1.793 1.013 1.793 2.043v1.382a2.25 2.25 0 01-.659 1.591l-3.573 3.573a2.25 2.25 0 00-.659 1.591v1.613a2.25 2.25 0 01-1.172 1.981l-2.25 1.125a2.25 2.25 0 01-2.634-.48L6.34 13.01a2.25 2.25 0 00-1.591-.659H3.41A2.25 2.25 0 011.16 10.1V8.338z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const contactInfo = [
  {
    icon: <PhoneIcon />,
    label: "PHONE",
    lines: ["+91 9057904545"],
  },
  {
    icon: <MailIcon />,
    label: "EMAIL",
    lines: ["levelupfitnessstyle@gmail.com"],
  },
  {
    icon: <PinIcon />,
    label: "ADDRESS",
    lines: ["opp. MCDONALD'S, Bhiwadi, Rajasthan 301019","5RW6+P9 Bhiwadi, Rajasthan"],
  },
  {
    icon: <ClockIcon />,
    label: "HOURS",
    lines: ["Mon - Sat:-","Morning: 5:00 AM – 12:00 PM", "Evening: 4:00 PM – 10:00 PM","Sunday – OFF"],
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 max-md:p-5 max-md:min-h-fit"
      style={{ background: "" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600&display=swap');
        .contact-root { font-family: 'Barlow', sans-serif; }
        .contact-heading { font-family: 'Barlow Condensed', sans-serif; }
        .input-field {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          color: #e5e5e5;
          outline: none;
          transition: border-color 0.2s;
          font-family: 'Barlow', sans-serif;
        }
        .input-field::placeholder { color: #555; }
        .input-field:focus { border-color: #dc2626; }
        .send-btn {
          background: #dc2626;
          transition: background 0.2s, transform 0.15s;
        }
        .send-btn:hover { background: #b91c1c; transform: scale(1.02); }
        .send-btn:active { transform: scale(0.98); }
        .watermark {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 7rem;
          color: #ffffff06;
          letter-spacing: 0.05em;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
      `}</style>

      <div
        className="contact-root w-full max-w-5xl rounded-2xl overflow-hidden relative"
        style={{ background: "" }} id='contacts'
      >
        {/* Watermark */}
        <div className=" flex justify-center align-middle items-center  grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Panel */}
          <div className="grid justify-center align-middle items-center  gap-60 max-md:gap-10 p-10 max-md:p-0" >
            {/* Label */}
            <div className="grid  justify-center items-center align-middle gap-5 text-center p-5">
              <p className="text-red-600 text-xs font-semibold tracking-widest uppercase  text-[1.5rem]">
                Contact Us
              </p>
              <h2
                className="contact-heading text-white uppercase leading-none"
                style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "0.02em" }}
              >
                Get In Touch
              </h2>
            </div>

            {/* Contact Info */}
            <div className="flex max-md:grid gap-6 mt-2">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 ">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-zinc-500 text-md font-semibold tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-zinc-200 text-md font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
