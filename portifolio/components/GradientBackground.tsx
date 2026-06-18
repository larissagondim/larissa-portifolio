'use client';

import { useEffect, useRef } from 'react';

export default function GradientBackground() {
    const interactiveRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;

            if (interactiveRef.current) {
                interactiveRef.current.style.transform = `translate(${Math.round(
                    curX
                )}px, ${Math.round(curY)}px)`;
            }

            requestAnimationFrame(move);
        };

        const handleMouseMove = (e: MouseEvent) => {
            tgX = e.clientX;
            tgY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="absolute inset-0 -z-10 pointer-events-none gradient-bg">
                <svg>
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 18 -8"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>

                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive" ref={interactiveRef}></div>
                </div>
            </div>

            <style jsx>{`
        :global(:root) {
          --color-bg1: rgb(244, 241, 234);
          --color-bg2: rgb(230, 235, 245); 
          
          --color1: 168, 218, 220;  
          --color2: 230, 190, 230; 
          --color3: 255, 210, 215;  
          --color4: 255, 228, 196;  
          --color5: 190, 225, 230; 
          --color-interactive: 200, 210, 255; 
          
          --circle-size: 100%;      
          --blending: screen;      
        }

        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes moveVertical {
          0% { transform: translateY(-30%); }
          50% { transform: translateY(30%); }
          100% { transform: translateY(-30%); }
        }

        @keyframes moveHorizontal {
          0% { transform: translateX(-40%) translateY(-10%); }
          50% { transform: translateX(40%) translateY(10%); }
          100% { transform: translateX(-40%) translateY(-10%); }
        }

        .gradient-bg {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          position: relative;
          background: linear-gradient(
            40deg,
            var(--color-bg1),
            var(--color-bg2)
          );
        }

        svg {
          position: fixed;
          width: 0;
          height: 0;
        }

        .gradients-container {
          width: 100%;
          height: 100%;
          /* Aumentei o blur de 40px para 80px para dar um efeito "aura" muito mais difuso */
          filter: url(#goo) blur(80px); 
        }

        .g1,
        .g2,
        .g3,
        .g4,
        .g5,
        .interactive {
          position: absolute;
          mix-blend-mode: var(--blending);
        }

        .g1 {
          width: var(--circle-size);
          height: var(--circle-size);
          top: calc(50% - var(--circle-size) / 2);
          left: calc(50% - var(--circle-size) / 2);
          background: radial-gradient(
              circle at center,
              rgba(var(--color1), 0.5) 0, /* Opacidade reduzida para suavizar */
              rgba(var(--color1), 0) 60%
            )
            no-repeat;
          animation: moveVertical 30s ease infinite;
        }

        .g2 {
          width: var(--circle-size);
          height: var(--circle-size);
          top: calc(50% - var(--circle-size) / 2);
          left: calc(50% - var(--circle-size) / 2);
          background: radial-gradient(
              circle at center,
              rgba(var(--color2), 0.5) 0,
              rgba(var(--color2), 0) 60%
            )
            no-repeat;
          transform-origin: calc(50% - 300px);
          animation: moveInCircle 25s reverse infinite;
        }

        .g3 {
          width: var(--circle-size);
          height: var(--circle-size);
          top: calc(50% - var(--circle-size) / 2 + 100px);
          left: calc(50% - var(--circle-size) / 2 - 300px);
          background: radial-gradient(
              circle at center,
              rgba(var(--color3), 0.5) 0,
              rgba(var(--color3), 0) 60%
            )
            no-repeat;
          transform-origin: calc(50% + 300px);
          animation: moveInCircle 35s linear infinite;
        }

        .g4 {
          width: var(--circle-size);
          height: var(--circle-size);
          top: calc(50% - var(--circle-size) / 2);
          left: calc(50% - var(--circle-size) / 2);
          background: radial-gradient(
              circle at center,
              rgba(var(--color4), 0.4) 0,
              rgba(var(--color4), 0) 60%
            )
            no-repeat;
          transform-origin: calc(50% - 150px);
          animation: moveHorizontal 35s ease infinite;
        }

        .g5 {
          width: calc(var(--circle-size) * 1.5);
          height: calc(var(--circle-size) * 1.5);
          top: calc(50% - var(--circle-size) / 1.5);
          left: calc(50% - var(--circle-size) / 1.5);
          background: radial-gradient(
              circle at center,
              rgba(var(--color5), 0.4) 0,
              rgba(var(--color5), 0) 60%
            )
            no-repeat;
          transform-origin: calc(50% - 500px) calc(50% + 100px);
          animation: moveInCircle 25s ease infinite;
        }

        .interactive {
          width: 80%;
          height: 80%;
          top: -40%;
          left: -40%;
          background: radial-gradient(
              circle at center,
              rgba(var(--color-interactive), 0.4) 0,
              rgba(var(--color-interactive), 0) 50%
            )
            no-repeat;
        }
      `}</style>
        </>
    );
}