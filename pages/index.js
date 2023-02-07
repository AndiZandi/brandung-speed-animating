import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(204, 0, 0, 0.96)',
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const whiteDiv = (children) => {
    return (
      <motion.div
        style={{ borderRadius: '300px' }}
        animate={{ backgroundColor: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'] }}
        whileHover={{ rotate: 3000, scale: 10 }}
        transition={{ duration: 70 }}
      >
        {children}
      </motion.div>
    );
  };

  const blackDiv = (children) => {
    return (
      <motion.div
        style={{ borderRadius: '300px' }}
        animate={{ backgroundColor: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'] }}
        backgroundColor="black"
        whileHover={{ rotate: -30000, scale: 10 }}
        transition={{ duration: 70 }}
      >
        {children}
      </motion.div>
    );
  };

  const array = [20];

  const bird = () => {
    return (
      <motion.div
        whileHover={{ rotate: 10 }}
        whileTap={{
          rotate: -20,
          borderRadius: '100%',
        }}
      >
        <motion.svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="100"
          viewBox="0 0 1280.000000 640.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="#000000"
          >
            <motion.path
              d="M10025 5179 c-1261 -12 -2286 -39 -2365 -60 -80 -22 -221 -123 -685
-494 -344 -275 -636 -496 -723 -549 -115 -70 -165 -84 -278 -78 -296 14 -612
-94 -962 -329 l-102 -69 -148 10 c-331 22 -782 10 -1102 -31 -625 -79 -1199
-304 -1705 -667 -167 -120 -652 -523 -1375 -1142 -228 -195 -444 -379 -480
-408 -106 -86 -121 -121 -65 -142 22 -8 38 -3 108 36 118 67 240 154 427 304
90 73 169 134 175 137 7 2 15 -2 18 -10 3 -8 19 -19 36 -25 28 -10 40 -6 119
33 48 24 193 116 322 204 1012 691 1310 876 1825 1133 440 221 705 320 1020
383 44 9 91 24 105 33 56 38 668 8 742 -36 15 -9 31 -27 37 -41 5 -14 19 -55
31 -91 49 -142 132 -276 252 -405 66 -71 76 -87 87 -140 17 -80 58 -154 88
-161 28 -7 56 14 73 56 l12 29 49 -30 c56 -35 89 -73 89 -102 0 -12 -23 -62
-52 -111 -52 -92 -74 -175 -49 -190 16 -10 121 19 212 58 96 42 206 108 308
185 42 31 98 69 124 84 l48 26 47 -31 c74 -50 188 -145 221 -185 16 -20 33
-53 36 -74 4 -24 16 -46 32 -58 54 -43 187 -36 227 12 10 12 23 21 28 19 26
-7 78 29 99 69 20 41 21 44 5 73 -10 17 -58 65 -107 106 -80 66 -109 101 -109
130 0 4 21 11 47 15 81 12 167 43 218 80 219 155 552 637 706 1023 107 265
143 542 71 542 -9 0 -51 -28 -92 -61 -284 -233 -517 -385 -810 -528 -173 -85
-176 -86 -251 -86 -62 0 -81 4 -98 19 -23 21 -26 50 -8 83 7 12 129 108 272
214 855 632 1226 857 1642 995 56 19 114 34 130 34 15 0 44 5 63 10 37 11 134
8 980 -30 245 -11 594 -27 775 -35 1242 -56 1989 -54 2183 7 45 14 92 55 92
82 0 18 10 25 54 39 69 22 108 52 104 81 -5 38 -109 45 -798 55 -706 11 -906
11 -1975 0z m-3504 -2529 l46 0 26 -68 c15 -37 27 -70 27 -73 0 -9 -81 11
-120 29 -33 16 -100 92 -100 114 0 7 14 8 38 4 20 -3 58 -6 83 -6z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2 },
                fill: { duration: 1, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
        </motion.svg>
      </motion.div>
    );
  };
  return (
    <main className="main">
      {whiteDiv(
        blackDiv(
          whiteDiv(blackDiv(whiteDiv(blackDiv(whiteDiv(blackDiv(bird()))))))
        )
      )}
    </main>
  );
}
