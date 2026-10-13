import{i as e,n as t,t as n}from"./jsx-runtime-Dk72oS4N.js";import{_ as r,g as i,t as a,v as o}from"./index-8-n2cXp5.js";var s=e(t(),1),c=n();function l(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),a=o(),l=[{name:`Home`,path:`/`},{name:`About`,path:`/about`},{name:`Skills`,path:`/skills`},{name:`Projects`,path:`/projects`},{name:`Contact`,path:`/contact`}],u=e=>e===`/`?a.pathname===`/`:a.pathname.startsWith(e),d=()=>{t(!1)};return(0,s.useEffect)(()=>{let e=()=>{r(window.scrollY>20)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e)}},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`
        /* ================= PAGE LOAD ================= */

        @keyframes navbarLoad {
          0% {
            opacity: 0;
            transform: translateY(-18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoLoad {
          0% {
            opacity: 0;
            transform: translateX(-20px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes navItemLoad {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaLoad {
          0% {
            opacity: 0;
            transform: translateX(15px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ================= SCROLL GLOW ================= */

        @keyframes scrollGlow {
          0%,
          100% {
            opacity: 0.5;
          }

          50% {
            opacity: 0.9;
          }
        }

        /* ================= ORANGE LINE ================= */

        @keyframes navbarLine {
          0% {
            transform: scaleX(0.7);
            opacity: 0.45;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }

          100% {
            transform: scaleX(0.7);
            opacity: 0.45;
          }
        }

        /* ================= MOBILE MENU ================= */

        @keyframes mobileItemReveal {
          0% {
            opacity: 0;
            transform: translateX(-12px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ================= REDUCE MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .navbar-load-animation,
          .navbar-logo-animation,
          .navbar-item-animation,
          .navbar-cta-animation {
            animation: none !important;
          }
        }
      `}),(0,c.jsx)(`header`,{className:`\r
          fixed\r
          left-0\r
          top-0\r
          z-[100]\r
          w-full\r
          overflow-x-hidden\r
        `,style:{animation:`navbarLoad 0.7s cubic-bezier(0.22,1,0.36,1) both`},children:(0,c.jsxs)(`nav`,{className:`
            relative
            w-full
            border-b
            border-orange-500/[0.12]
            bg-[#090909]/95
            backdrop-blur-xl
            transition-all
            duration-500
            ${n?`shadow-[0_8px_35px_rgba(0,0,0,0.22)]`:``}
          `,children:[(0,c.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              inset-0\r
              opacity-[0.035]\r
              [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]\r
              [background-size:55px_55px]\r
            `}),(0,c.jsx)(`div`,{className:`\r
              pointer-events-none\r
              absolute\r
              -left-[100px]\r
              -top-[150px]\r
              h-[300px]\r
              w-[300px]\r
              rounded-full\r
              bg-orange-500/[0.07]\r
              blur-[100px]\r
            `,style:{animation:n?`scrollGlow 3s ease-in-out infinite`:`none`}}),n&&(0,c.jsx)(`div`,{className:`\r
                pointer-events-none\r
                absolute\r
                bottom-[-1px]\r
                left-0\r
                h-[1px]\r
                w-full\r
                origin-left\r
                bg-orange-500/30\r
              `,style:{animation:`navbarLine 2.5s ease-in-out infinite`}}),(0,c.jsxs)(`div`,{className:`\r
              relative\r
              mx-auto\r
              flex\r
              h-[82px]\r
              w-full\r
              max-w-[1500px]\r
              items-center\r
              justify-between\r
              px-4\r
              sm:px-6\r
              lg:px-8\r
              xl:px-10\r
            `,children:[(0,c.jsx)(i,{to:`/`,onClick:d,className:`\r
                group\r
                flex\r
                shrink-0\r
                items-center\r
                select-none\r
                navbar-logo-animation\r
              `,"aria-label":`Komal Jadhav Home`,style:{animation:`logoLoad 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both`},children:(0,c.jsxs)(`div`,{className:`\r
                  flex\r
                  items-center\r
                  gap-[6px]\r
                  transition-transform\r
                  duration-300\r
                  group-hover:scale-[1.015]\r
                `,children:[(0,c.jsxs)(`svg`,{viewBox:`0 0 78 62`,xmlns:`http://www.w3.org/2000/svg`,className:`\r
                    h-[52px]\r
                    w-[64px]\r
                    shrink-0\r
                    overflow-visible\r
                  `,children:[(0,c.jsx)(`path`,{d:`M12 8V48`,fill:`none`,stroke:`#F97316`,strokeWidth:`6.5`,strokeLinecap:`square`}),(0,c.jsx)(`path`,{d:`M16 29L39 8`,fill:`none`,stroke:`#F97316`,strokeWidth:`6.5`,strokeLinecap:`square`,strokeLinejoin:`miter`}),(0,c.jsx)(`path`,{d:`M24 28L41 48`,fill:`none`,stroke:`#FDBA74`,strokeWidth:`6.5`,strokeLinecap:`square`,strokeLinejoin:`miter`}),(0,c.jsx)(`path`,{d:`M51 8V38`,fill:`none`,stroke:`#F97316`,strokeWidth:`6.5`,strokeLinecap:`square`}),(0,c.jsx)(`path`,{d:`\r
                      M51 42\r
                      C51 49 45 53 38 53\r
                      C33 53 29 51 26 47\r
                    `,fill:`none`,stroke:`#F97316`,strokeWidth:`6.5`,strokeLinecap:`round`}),(0,c.jsx)(`path`,{d:`\r
                      M4 53\r
                      C19 57 39 56 55 49\r
                      C64 45 70 40 76 34\r
                    `,fill:`none`,stroke:`#F97316`,strokeWidth:`2.5`,strokeLinecap:`round`}),(0,c.jsx)(`path`,{d:`\r
                      M7 57\r
                      C25 60 45 57 61 49\r
                    `,fill:`none`,stroke:`#FDBA74`,strokeWidth:`1.4`,strokeLinecap:`round`,opacity:`0.75`}),(0,c.jsx)(`circle`,{cx:`67`,cy:`13`,r:`2`,fill:`#F97316`})]}),(0,c.jsxs)(`div`,{className:`\r
                    flex\r
                    flex-col\r
                    justify-center\r
                    leading-none\r
                  `,children:[(0,c.jsxs)(`div`,{className:`\r
                      whitespace-nowrap\r
                      text-[20px]\r
                      font-bold\r
                      tracking-[-0.025em]\r
                    `,style:{fontFamily:`'Inter', 'Helvetica Neue', Arial, sans-serif`},children:[(0,c.jsx)(`span`,{className:`text-white`,children:`Komal`}),(0,c.jsx)(`span`,{className:`\r
                        ml-[5px]\r
                        text-orange-500\r
                      `,children:`Jadhav`})]}),(0,c.jsxs)(`div`,{className:`\r
                      mt-[7px]\r
                      flex\r
                      items-center\r
                      gap-[7px]\r
                    `,children:[(0,c.jsx)(`span`,{className:`\r
                        h-[2px]\r
                        w-[25px]\r
                        shrink-0\r
                        bg-orange-500\r
                        transition-all\r
                        duration-300\r
                        group-hover:w-[32px]\r
                      `}),(0,c.jsx)(`span`,{className:`\r
                        whitespace-nowrap\r
                        text-[7px]\r
                        font-bold\r
                        tracking-[0.21em]\r
                        text-orange-400\r
                      `,style:{fontFamily:`'Inter', 'Helvetica Neue', Arial, sans-serif`},children:`FULL STACK WEB DEVELOPER`})]})]})]})}),(0,c.jsx)(`div`,{className:`\r
                hidden\r
                items-center\r
                gap-6\r
                lg:flex\r
                xl:gap-8\r
              `,children:l.map((e,t)=>{let n=u(e.path);return(0,c.jsxs)(i,{to:e.path,className:`
                      group
                      relative
                      shrink-0
                      px-1
                      py-2
                      text-[14px]
                      font-medium
                      transition-colors
                      duration-300

                      ${n?`text-white`:`text-white/55 hover:text-white`}
                    `,style:{animation:`navItemLoad 0.55s cubic-bezier(0.22,1,0.36,1) ${.25+t*.08}s both`},children:[e.name,(0,c.jsx)(`span`,{className:`
                        absolute
                        bottom-[-1px]
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        bg-orange-500
                        transition-all
                        duration-300

                        ${n?`w-[22px]`:`w-0 group-hover:w-[18px]`}
                      `}),n&&(0,c.jsx)(`span`,{className:`\r
                          absolute\r
                          -right-2\r
                          top-1/2\r
                          h-[3px]\r
                          w-[3px]\r
                          -translate-y-1/2\r
                          rounded-full\r
                          bg-orange-500\r
                        `})]},e.name)})}),(0,c.jsxs)(i,{to:`/contact`,className:`\r
                group\r
                hidden\r
                shrink-0\r
                items-center\r
                gap-3\r
                border\r
                border-orange-500/50\r
                bg-orange-500/[0.06]\r
                px-5\r
                py-[11px]\r
                text-[13px]\r
                font-semibold\r
                text-white\r
                transition-all\r
                duration-300\r
                hover:border-orange-500\r
                hover:bg-orange-500\r
                hover:text-black\r
                hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]\r
                lg:inline-flex\r
              `,style:{animation:`ctaLoad 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both`},children:[`Let's Talk`,(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,className:`\r
                  h-[17px]\r
                  w-[17px]\r
                  transition-transform\r
                  duration-300\r
                  group-hover:translate-x-1\r
                `,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`path`,{d:`M5 12h14`}),(0,c.jsx)(`path`,{d:`m13 6 6 6-6 6`})]})]}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`\r
                flex\r
                h-[42px]\r
                w-[42px]\r
                shrink-0\r
                items-center\r
                justify-center\r
                border\r
                border-white/10\r
                bg-white/[0.035]\r
                text-white\r
                transition\r
                hover:border-orange-500/40\r
                hover:text-orange-500\r
                lg:hidden\r
              `,"aria-label":e?`Close navigation menu`:`Open navigation menu`,style:{animation:`ctaLoad 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both`},children:(0,c.jsxs)(`div`,{className:`flex w-[18px] flex-col gap-[5px]`,children:[(0,c.jsx)(`span`,{className:`
                    h-[2px]
                    w-full
                    bg-current
                    transition-transform
                    duration-300

                    ${e?`translate-y-[7px] rotate-45`:``}
                  `}),(0,c.jsx)(`span`,{className:`
                    h-[2px]
                    w-full
                    bg-current
                    transition-opacity
                    duration-300

                    ${e?`opacity-0`:`opacity-100`}
                  `}),(0,c.jsx)(`span`,{className:`
                    h-[2px]
                    w-full
                    bg-current
                    transition-transform
                    duration-300

                    ${e?`-translate-y-[7px] -rotate-45`:``}
                  `})]})})]}),(0,c.jsx)(`div`,{className:`
              overflow-hidden
              border-t
              border-white/[0.06]
              bg-[#090909]/98
              backdrop-blur-xl
              transition-all
              duration-300
              lg:hidden

              ${e?`max-h-[500px] opacity-100`:`max-h-0 opacity-0`}
            `,children:(0,c.jsx)(`div`,{className:`px-5 py-5 sm:px-8`,children:(0,c.jsxs)(`div`,{className:`flex flex-col`,children:[l.map((t,n)=>{let r=u(t.path);return(0,c.jsxs)(i,{to:t.path,onClick:d,className:`
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/[0.06]
                        py-4
                        text-[14px]
                        font-medium
                        transition

                        ${r?`text-orange-500`:`text-white/60 hover:text-white`}
                      `,style:{animation:e?`mobileItemReveal 0.45s cubic-bezier(0.22,1,0.36,1) ${n*.08}s both`:`none`},children:[(0,c.jsx)(`span`,{children:t.name}),(0,c.jsx)(`span`,{className:`text-[9px] text-white/20`,children:String(n+1).padStart(2,`0`)})]},t.name)}),(0,c.jsxs)(i,{to:`/contact`,onClick:d,className:`\r
                    mt-5\r
                    flex\r
                    items-center\r
                    justify-between\r
                    border\r
                    border-orange-500\r
                    bg-orange-500\r
                    px-5\r
                    py-3\r
                    text-[13px]\r
                    font-semibold\r
                    text-black\r
                    transition\r
                    hover:bg-orange-400\r
                  `,children:[`Let's Talk`,(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`path`,{d:`M5 12h14`}),(0,c.jsx)(`path`,{d:`m13 6 6 6-6 6`})]})]})]})})})]})})]})}function u(){let{hash:e}=o();return(0,s.useEffect)(()=>{if(!e)return;let t=0,n=()=>{let r=document.querySelector(e);if(r){let e=r.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:e-82,behavior:`smooth`});return}t<20&&(t++,setTimeout(n,100))};n()},[e]),null}function d(){return(0,c.jsxs)(`div`,{className:`\r
        min-h-screen\r
        w-full\r
        overflow-x-hidden\r
        bg-[#090909]\r
      `,children:[(0,c.jsx)(l,{}),(0,c.jsx)(u,{}),(0,c.jsx)(`main`,{className:`w-full pt-[82px]`,children:(0,c.jsx)(r,{})}),(0,c.jsx)(a,{})]})}export{d as default};