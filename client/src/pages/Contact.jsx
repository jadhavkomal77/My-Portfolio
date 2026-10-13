// import React, { useState } from "react";
// import {
//   FiArrowUpRight,
//   FiMail,
//   FiPhone,
//   FiGithub,
//   FiSend,
//   FiMapPin,
// } from "react-icons/fi";

// const contactInfo = [
//   {
//     icon: FiMail,
//     label: "Email",
//     value: "komaljadhav2535@gmail.com",
//     href: "mailto:komaljadhav2535@gmail.com",
//   },
//   {
//     icon: FiPhone,
//     label: "Phone",
//     value: "7709171195",
//     href: "tel:+917709171195",
//   },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const mailto = `mailto:komaljadhav2535@gmail.com?subject=${encodeURIComponent(
//       form.subject || "Portfolio Contact"
//     )}&body=${encodeURIComponent(
//       `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
//     )}`;

//     window.location.href = mailto;
//   };

//   return (
//     <section
//       id="contact"
//       className="
//         relative overflow-hidden
//         bg-[#09090b]
//         px-5 py-16
//         text-white
//         sm:px-8 sm:py-20
//         md:px-10
//         lg:px-12 lg:py-24
//       "
//     >
//       {/* ================= BACKGROUND ================= */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Grid */}
//         <div
//           className="
//             absolute inset-0 opacity-[0.025]
//             [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
//             [background-size:70px_70px]
//           "
//         />

//         {/* Orange glow */}
//         <div
//           className="
//             absolute
//             left-[-180px]
//             top-[120px]
//             h-[400px]
//             w-[400px]
//             rounded-full
//             bg-orange-500/[0.055]
//             blur-[130px]
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[-180px]
//             bottom-[-120px]
//             h-[400px]
//             w-[400px]
//             rounded-full
//             bg-orange-500/[0.045]
//             blur-[130px]
//           "
//         />

//         {/* Small dots */}
//         <span className="absolute left-[8%] top-[22%] h-[3px] w-[3px] rounded-full bg-orange-400/70" />
//         <span className="absolute right-[12%] top-[18%] h-[2px] w-[2px] rounded-full bg-white/30" />
//         <span className="absolute left-[30%] bottom-[12%] h-[2px] w-[2px] rounded-full bg-orange-400/60" />
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 mx-auto max-w-[1180px]">

//         <div className="mb-12 text-center">
//   <h2
//     className="
//       text-[40px]
//       font-bold
//       leading-[1.08]
//       tracking-[-0.045em]
//       text-white
//       sm:text-[50px]
//       md:text-[62px]
//     "
//   >
//     <span className="text-orange-500">Contact</span> Us
//   </h2>

//   <p
//     className="
//       mx-auto
//       mt-4
//       max-w-[620px]
//       text-[15px]
//       leading-[1.7]
//       text-white/50
//       sm:text-[17px]
//     "
//   >
//     Have a question, project idea, or simply want to connect?
//     Feel free to reach out.
//   </p>

//   <div className="mx-auto mt-5 h-[4px] w-[58px] bg-orange-500" />
// </div>

//         {/* ================= MAIN GRID ================= */}
//         <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">

//           {/* ================= LEFT SIDE ================= */}
//           <div className="space-y-4">

//             {/* Contact Cards */}
//             {contactInfo.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="
//                     group
//                     relative
//                     flex
//                     items-center
//                     gap-4
//                     overflow-hidden
//                     border
//                     border-white/[0.08]
//                     bg-white/[0.025]
//                     px-5
//                     py-5
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-orange-500/30
//                     hover:bg-white/[0.04]
//                   "
//                 >
//                   {/* Hover line */}
//                   <span
//                     className="
//                       absolute
//                       left-0
//                       top-0
//                       h-full
//                       w-[2px]
//                       bg-orange-500
//                       opacity-0
//                       transition
//                       duration-300
//                       group-hover:opacity-100
//                     "
//                   />

//                   <div
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       shrink-0
//                       items-center
//                       justify-center
//                       border
//                       border-orange-500/20
//                       bg-orange-500/[0.07]
//                       text-orange-500
//                       transition
//                       duration-300
//                       group-hover:bg-orange-500/[0.12]
//                     "
//                   >
//                     <Icon size={20} />
//                   </div>

//                   <div className="min-w-0">
//                     <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
//                       {item.label}
//                     </p>

//                     <p className="mt-1 break-all text-[14px] font-semibold text-white sm:text-[15px]">
//                       {item.value}
//                     </p>
//                   </div>

//                   <FiArrowUpRight
//                     className="
//                       ml-auto
//                       shrink-0
//                       text-white/20
//                       transition
//                       duration-300
//                       group-hover:translate-x-1
//                       group-hover:-translate-y-1
//                       group-hover:text-orange-500
//                     "
//                     size={18}
//                   />
//                 </a>
//               );
//             })}

//             {/* Location */}
//             <div
//               className="
//                 relative
//                 flex
//                 items-center
//                 gap-4
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.025]
//                 px-5
//                 py-5
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-12
//                   w-12
//                   shrink-0
//                   items-center
//                   justify-center
//                   border
//                   border-orange-500/20
//                   bg-orange-500/[0.07]
//                   text-orange-500
//                 "
//               >
//                 <FiMapPin size={20} />
//               </div>

//               <div>
//                 <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
//                   Based in
//                 </p>

//                 <p className="mt-1 text-[14px] font-semibold text-white sm:text-[15px]">
//                   Chhatrapati Sambhajinagar, Maharashtra
//                 </p>
//               </div>
//             </div>

//             {/* ================= GITHUB ================= */}
//             <a
//               href="https://github.com/jadhavkomal77"
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 group
//                 flex
//                 items-center
//                 justify-between
//                 border
//                 border-white/[0.08]
//                 bg-white/[0.025]
//                 px-5
//                 py-4
//                 transition-all
//                 duration-300
//                 hover:border-orange-500/30
//                 hover:bg-white/[0.04]
//               "
//             >
//               <div className="flex items-center gap-4">
//                 <div
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     border
//                     border-white/[0.08]
//                     bg-white/[0.04]
//                     text-white
//                     transition
//                     group-hover:border-orange-500/30
//                     group-hover:text-orange-500
//                   "
//                 >
//                   <FiGithub size={21} />
//                 </div>

//                 <div>
//                   <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
//                     GitHub
//                   </p>

//                   <p className="mt-1 text-[14px] font-semibold text-white">
//                     View my repositories
//                   </p>
//                 </div>
//               </div>

//               <FiArrowUpRight
//                 className="
//                   text-white/30
//                   transition
//                   group-hover:-translate-y-1
//                   group-hover:translate-x-1
//                   group-hover:text-orange-500
//                 "
//                 size={19}
//               />
//             </a>

//             {/* Available */}
//             <div className="flex items-center gap-3 px-1 pt-2">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-50" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
//               </span>

//               <span className="text-[12px] font-medium text-white/50">
//                 Available for freelance projects & collaborations
//               </span>
//             </div>
//           </div>

//           {/* ================= RIGHT FORM ================= */}
//           <div
//             className="
//               relative
//               overflow-hidden
//               border
//               border-white/[0.08]
//               bg-white/[0.025]
//               p-5
//               sm:p-7
//               md:p-8
//             "
//           >
//             {/* Orange corner */}
//             <div
//               className="
//                 absolute
//                 right-0
//                 top-0
//                 h-[70px]
//                 w-[70px]
//                 border-l
//                 border-b
//                 border-orange-500/20
//                 bg-orange-500/[0.025]
//               "
//             />

//             <div className="relative z-10">

//               {/* Form Heading */}
//               <div className="mb-7">
//                 <div className="mb-3 flex items-center gap-2">
//                   <span className="h-[1px] w-6 bg-orange-500" />

//                   <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-500">
//                     Get in touch
//                   </span>
//                 </div>

//                 <h3 className="text-[25px] font-semibold tracking-[-0.03em] text-white">
//                   Let’s make it happen.
//                 </h3>

//                 <p className="mt-2 max-w-[500px] text-[13px] leading-[1.6] text-white/40">
//                   Tell me a little about your project and I’ll get back to
//                   you as soon as possible.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">

//                 {/* Name + Email */}
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                     className="
//                       h-[52px]
//                       w-full
//                       border
//                       border-white/[0.09]
//                       bg-[#0d0d0f]
//                       px-4
//                       text-[13px]
//                       text-white
//                       outline-none
//                       placeholder:text-white/25
//                       transition
//                       focus:border-orange-500/50
//                       focus:bg-[#101012]
//                     "
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="Email address"
//                     required
//                     className="
//                       h-[52px]
//                       w-full
//                       border
//                       border-white/[0.09]
//                       bg-[#0d0d0f]
//                       px-4
//                       text-[13px]
//                       text-white
//                       outline-none
//                       placeholder:text-white/25
//                       transition
//                       focus:border-orange-500/50
//                       focus:bg-[#101012]
//                     "
//                   />
//                 </div>

//                 {/* Subject */}
//                 <input
//                   type="text"
//                   name="subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   placeholder="Project subject"
//                   className="
//                     h-[52px]
//                     w-full
//                     border
//                     border-white/[0.09]
//                     bg-[#0d0d0f]
//                     px-4
//                     text-[13px]
//                     text-white
//                     outline-none
//                     placeholder:text-white/25
//                     transition
//                     focus:border-orange-500/50
//                     focus:bg-[#101012]
//                   "
//                 />

//                 {/* Message */}
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project..."
//                   required
//                   rows={6}
//                   className="
//                     w-full
//                     resize-none
//                     border
//                     border-white/[0.09]
//                     bg-[#0d0d0f]
//                     px-4
//                     py-4
//                     text-[13px]
//                     leading-[1.6]
//                     text-white
//                     outline-none
//                     placeholder:text-white/25
//                     transition
//                     focus:border-orange-500/50
//                     focus:bg-[#101012]
//                   "
//                 />

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="
//                     group
//                     flex
//                     h-[52px]
//                     w-full
//                     items-center
//                     justify-center
//                     gap-3
//                     bg-orange-500
//                     text-[13px]
//                     font-semibold
//                     text-white
//                     transition-all
//                     duration-300
//                     hover:bg-orange-600
//                     hover:shadow-[0_12px_35px_rgba(249,115,22,0.18)]
//                   "
//                 >
//                   Send Message

//                   <FiSend
//                     size={17}
//                     className="
//                       transition
//                       duration-300
//                       group-hover:translate-x-1
//                       group-hover:-translate-y-1
//                     "
//                   />
//                 </button>
//               </form>

//               {/* Bottom note */}
//               <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4">
//                 <p className="text-[10px] leading-[1.5] text-white/25">
//                   Your message will open your default email application.
//                 </p>

//                 <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-orange-500/60 sm:block">
//                   Let’s connect
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= BOTTOM CTA ================= */}
//         <div
//           className="
//             mt-12
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-5
//             border-t
//             border-white/[0.07]
//             pt-7
//             sm:flex-row
//           "
//         >
//           <div>
//             <p className="text-[13px] font-medium text-white/70">
//               Got an idea worth building?
//             </p>

//             <p className="mt-1 text-[11px] text-white/30">
//               Let’s turn it into something people actually enjoy using.
//             </p>
//           </div>

//           <a
//             href="mailto:komaljadhav2535@gmail.com"
//             className="
//               inline-flex
//               items-center
//               gap-2
//               border
//               border-orange-500/40
//               bg-orange-500/[0.06]
//               px-5
//               py-2.5
//               text-[12px]
//               font-semibold
//               text-orange-400
//               transition
//               hover:border-orange-500
//               hover:bg-orange-500
//               hover:text-white
//             "
//           >
//             Get In Touch
//             <FiArrowUpRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef, useState } from "react";

import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiGithub,
  FiSend,
  FiMapPin,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "komaljadhav2535@gmail.com",
    href: "mailto:komaljadhav2535@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "7709171195",
    href: "tel:+917709171195",
  },
];

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return React.cloneElement(children, {
    ref,
    className: `${children.props.className || ""} ${
      show ? "contact-reveal-show" : "contact-reveal-hidden"
    }`,
    style: {
      ...children.props.style,
      "--reveal-delay": `${delay}ms`,
    },
  });
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:komaljadhav2535@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      {/* =========================================================
          ANIMATION CSS
      ========================================================= */}

      <style>{`
        /* =========================================
           REVEAL ANIMATION
        ========================================= */

        .contact-reveal-hidden {
          opacity: 0;
          transform: translateY(35px);
        }

        .contact-reveal-show {
          opacity: 1;
          transform: translateY(0);
          animation: contactReveal 0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay)
            both;
        }

        @keyframes contactReveal {
          0% {
            opacity: 0;
            transform: translateY(35px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================================
           FORM SLIDE
        ========================================= */

        .contact-form-hidden {
          opacity: 0;
          transform: translateX(45px);
        }

        .contact-form-show {
          opacity: 1;
          transform: translateX(0);
          animation: contactFormReveal 0.85s
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay)
            both;
        }

        @keyframes contactFormReveal {
          0% {
            opacity: 0;
            transform: translateX(45px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* =========================================
           BACKGROUND GLOW
        ========================================= */

        @keyframes contactGlowLeft {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.55;
          }

          50% {
            transform: translate3d(25px, -18px, 0) scale(1.08);
            opacity: 0.85;
          }
        }

        @keyframes contactGlowRight {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.45;
          }

          50% {
            transform: translate3d(-25px, 18px, 0) scale(1.08);
            opacity: 0.75;
          }
        }

        /* =========================================
           PARTICLES
        ========================================= */

        @keyframes contactParticle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.35;
          }

          50% {
            transform: translateY(-18px) scale(1.35);
            opacity: 0.9;
          }
        }

        /* =========================================
           ORANGE LINE
        ========================================= */

        @keyframes contactLine {
          0%,
          100% {
            transform: scaleX(1);
            opacity: 0.75;
          }

          50% {
            transform: scaleX(1.18);
            opacity: 1;
          }
        }

        /* =========================================
           FORM CORNER
        ========================================= */

        @keyframes contactCorner {
          0%,
          100% {
            opacity: 0.45;
          }

          50% {
            opacity: 1;
          }
        }

        /* =========================================
           BUTTON
        ========================================= */

        .contact-button-animation {
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background-color 0.25s ease,
            border-color 0.25s ease;
        }

        .contact-button-animation:hover {
          transform: translateY(-2px);
        }

        /* =========================================
           REDUCE MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal-hidden,
          .contact-form-hidden {
            opacity: 1;
            transform: none;
          }

          .contact-reveal-show,
          .contact-form-show {
            animation: none;
          }
        }
      `}</style>

      <section
        id="contact"
        className="
          relative overflow-hidden
          bg-[#09090b]
          px-5 py-16
          text-white
          sm:px-8 sm:py-20
          md:px-10
          lg:px-12 lg:py-24
        "
      >
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Grid */}

          <div
            className="
              absolute inset-0 opacity-[0.025]
              [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />

          {/* Orange glow */}

          <div
            className="
              absolute
              left-[-180px]
              top-[120px]
              h-[400px]
              w-[400px]
              rounded-full
              bg-orange-500/[0.055]
              blur-[130px]
            "
            style={{
              animation: "contactGlowLeft 7s ease-in-out infinite",
            }}
          />

          <div
            className="
              absolute
              right-[-180px]
              bottom-[-120px]
              h-[400px]
              w-[400px]
              rounded-full
              bg-orange-500/[0.045]
              blur-[130px]
            "
            style={{
              animation: "contactGlowRight 8s ease-in-out infinite",
            }}
          />

          {/* Small dots */}

          <span
            className="
              absolute left-[8%] top-[22%]
              h-[3px] w-[3px]
              rounded-full
              bg-orange-400/70
            "
            style={{
              animation: "contactParticle 3s ease-in-out infinite",
            }}
          />

          <span
            className="
              absolute right-[12%] top-[18%]
              h-[2px] w-[2px]
              rounded-full
              bg-white/30
            "
            style={{
              animation: "contactParticle 4s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />

          <span
            className="
              absolute left-[30%] bottom-[12%]
              h-[2px] w-[2px]
              rounded-full
              bg-orange-400/60
            "
            style={{
              animation: "contactParticle 3.5s ease-in-out infinite",
              animationDelay: "1.2s",
            }}
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto max-w-[1180px]">

          {/* ================= HEADING ================= */}

          <Reveal delay={0}>
            <div className="mb-12 text-center">
              <h2
                className="
                  text-[40px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[50px]
                  md:text-[62px]
                "
              >
                <span className="text-orange-500">Contact</span> Us
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[620px]
                  text-[15px]
                  leading-[1.7]
                  text-white/50
                  sm:text-[17px]
                "
              >
                Have a question, project idea, or simply want to connect?
                Feel free to reach out.
              </p>

              <div
                className="mx-auto mt-5 h-[4px] w-[58px] bg-orange-500"
                style={{
                  animation: "contactLine 2s ease-in-out infinite",
                }}
              />
            </div>
          </Reveal>

          {/* ================= MAIN GRID ================= */}

          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">

            {/* ================= LEFT SIDE ================= */}

            <div className="space-y-4">

              {/* Contact Cards */}

              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.label} delay={index * 120}>
                    <a
                      href={item.href}
                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-4
                        overflow-hidden
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-5
                        py-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-orange-500/30
                        hover:bg-white/[0.04]
                      "
                    >
                      {/* Hover line */}

                      <span
                        className="
                          absolute
                          left-0
                          top-0
                          h-full
                          w-[2px]
                          bg-orange-500
                          opacity-0
                          transition
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          border
                          border-orange-500/20
                          bg-orange-500/[0.07]
                          text-orange-500
                          transition
                          duration-300
                          group-hover:bg-orange-500/[0.12]
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
                          {item.label}
                        </p>

                        <p className="mt-1 break-all text-[14px] font-semibold text-white sm:text-[15px]">
                          {item.value}
                        </p>
                      </div>

                      <FiArrowUpRight
                        className="
                          ml-auto
                          shrink-0
                          text-white/20
                          transition
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:text-orange-500
                        "
                        size={18}
                      />
                    </a>
                  </Reveal>
                );
              })}

              {/* Location */}

              <Reveal delay={240}>
                <div
                  className="
                    relative
                    flex
                    items-center
                    gap-4
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-5
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-orange-500/20
                      bg-orange-500/[0.07]
                      text-orange-500
                    "
                  >
                    <FiMapPin size={20} />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
                      Based in
                    </p>

                    <p className="mt-1 text-[14px] font-semibold text-white sm:text-[15px]">
                      Chhatrapati Sambhajinagar, Maharashtra
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* ================= GITHUB ================= */}

              <Reveal delay={320}>
                <a
                  href="https://github.com/jadhavkomal77"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        border
                        border-white/[0.08]
                        bg-white/[0.04]
                        text-white
                        transition
                        group-hover:border-orange-500/30
                        group-hover:text-orange-500
                      "
                    >
                      <FiGithub size={21} />
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                        GitHub
                      </p>

                      <p className="mt-1 text-[14px] font-semibold text-white">
                        View my repositories
                      </p>
                    </div>
                  </div>

                  <FiArrowUpRight
                    className="
                      text-white/30
                      transition
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-orange-500
                    "
                    size={19}
                  />
                </a>
              </Reveal>

              {/* Available */}

              <Reveal delay={400}>
                <div className="flex items-center gap-3 px-1 pt-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-50" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                  </span>

                  <span className="text-[12px] font-medium text-white/50">
                    Available for freelance projects & collaborations
                  </span>
                </div>
              </Reveal>
            </div>

            {/* ================= RIGHT FORM ================= */}

            <Reveal delay={180}>
              <div
                className="
                  relative
                  overflow-hidden
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-5
                  sm:p-7
                  md:p-8
                "
              >
                {/* Orange corner */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-[70px]
                    w-[70px]
                    border-l
                    border-b
                    border-orange-500/20
                    bg-orange-500/[0.025]
                  "
                  style={{
                    animation: "contactCorner 3s ease-in-out infinite",
                  }}
                />

                <div className="relative z-10">

                  {/* Form Heading */}

                  <div className="mb-7">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-[1px] w-6 bg-orange-500" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-500">
                        Get in touch
                      </span>
                    </div>

                    <h3 className="text-[25px] font-semibold tracking-[-0.03em] text-white">
                      Let’s make it happen.
                    </h3>

                    <p className="mt-2 max-w-[500px] text-[13px] leading-[1.6] text-white/40">
                      Tell me a little about your project and I’ll get back to
                      you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name + Email */}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="
                          h-[52px]
                          w-full
                          border
                          border-white/[0.09]
                          bg-[#0d0d0f]
                          px-4
                          text-[13px]
                          text-white
                          outline-none
                          placeholder:text-white/25
                          transition
                          focus:border-orange-500/50
                          focus:bg-[#101012]
                        "
                      />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        required
                        className="
                          h-[52px]
                          w-full
                          border
                          border-white/[0.09]
                          bg-[#0d0d0f]
                          px-4
                          text-[13px]
                          text-white
                          outline-none
                          placeholder:text-white/25
                          transition
                          focus:border-orange-500/50
                          focus:bg-[#101012]
                        "
                      />
                    </div>

                    {/* Subject */}

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project subject"
                      className="
                        h-[52px]
                        w-full
                        border
                        border-white/[0.09]
                        bg-[#0d0d0f]
                        px-4
                        text-[13px]
                        text-white
                        outline-none
                        placeholder:text-white/25
                        transition
                        focus:border-orange-500/50
                        focus:bg-[#101012]
                      "
                    />

                    {/* Message */}

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="
                        w-full
                        resize-none
                        border
                        border-white/[0.09]
                        bg-[#0d0d0f]
                        px-4
                        py-4
                        text-[13px]
                        leading-[1.6]
                        text-white
                        outline-none
                        placeholder:text-white/25
                        transition
                        focus:border-orange-500/50
                        focus:bg-[#101012]
                      "
                    />

                    {/* Submit */}

                    <button
                      type="submit"
                      className="
                        group
                        flex
                        h-[52px]
                        w-full
                        items-center
                        justify-center
                        gap-3
                        bg-orange-500
                        text-[13px]
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-orange-600
                        hover:shadow-[0_12px_35px_rgba(249,115,22,0.18)]
                        contact-button-animation
                      "
                    >
                      Send Message

                      <FiSend
                        size={17}
                        className="
                          transition
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </button>
                  </form>

                  {/* Bottom note */}

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4">
                    <p className="text-[10px] leading-[1.5] text-white/25">
                      Your message will open your default email application.
                    </p>

                    <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-orange-500/60 sm:block">
                      Let’s connect
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        
        </div>
      </section>
    </>
  );
}