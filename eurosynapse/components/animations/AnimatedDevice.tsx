"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedDeviceProps {
  className?: string;
}

const AnimatedDevice = ({ className = "" }: AnimatedDeviceProps) => {
  const [isOn, setIsOn] = useState(false);
  const [eyesVisible, setEyesVisible] = useState(true);
  const [screenText, setScreenText] = useState("$ ");
  const [progress, setProgress] = useState(0);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const startTyping = (texts: string[]) => {
    let wait = 750;

    setScreenText("$ ");
    setProgress(0);

    texts.forEach((text) => {
      wait += 750;
      for (let i = 0; i < text.length; i++) {
        const timer = setTimeout(() => {
          setScreenText((prev) => prev + text[i]);
        }, wait);
        timersRef.current.push(timer);
        wait += 50 + Math.floor(Math.random() * 50);
      }

      wait += 750;

      const timer = setTimeout(() => {
        setScreenText((prev) => prev + "\n$ ");
      }, wait);
      timersRef.current.push(timer);
    });

    // Esperar 1 segundo después de que termine de escribir
    wait += 1000;

    // Iniciar la barra de progreso (5 segundos)
    const progressTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2; // Incrementa 2% cada 100ms = 5 segundos total
        });
      }, 100);

      // Limpiar después de 5 segundos y apagar el monitor
      const shutdownTimer = setTimeout(() => {
        clearInterval(progressInterval);
        setIsOn(false);
        setEyesVisible(true);
        setScreenText("");
        setProgress(0);
      }, 5000);

      timersRef.current.push(shutdownTimer as unknown as NodeJS.Timeout);
    }, wait);

    timersRef.current.push(progressTimer);
  };

  const handlePowerButton = () => {
    const newState = !isOn;
    setIsOn(newState);

    if (newState) {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
      setEyesVisible(false);
      startTyping([
        "joke_generator.exe",
        "",
        "Loading joke database...",
        "",
        "Q: Why do programmers prefer dark mode?",
        "",
        "A: Because light attracts bugs!"
      ]);
    } else {
      setEyesVisible(true);
      setScreenText("");
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
    }
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <style jsx>{`
        @keyframes blinkEye {
          0%, 80% { transform: translateY(0); }
          80%, 100% { transform: translateY(-90%); }
        }

        @keyframes blink {
          0%, 19% { background: #ed9940; }
          20%, 99% { background: #333; }
        }

        .eye::before {
          animation: blinkEye 2s ease infinite alternate;
        }

        .power-led.standby {
          animation: blink 2s infinite ease-out;
        }
      `}</style>

      <div className="computer-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'scale(0.85)'
      }}>
        {/* Monitor */}
        <div className="monitor" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          alignItems: 'center',
          width: '500px',
          height: '450px',
          background: 'linear-gradient(to bottom, #d3ccbc, #ccc5b3)',
          borderRadius: '5px',
          boxShadow: '2px -2px 30px #493e2a33 inset, -2px -2px 30px #493e2a33 inset, 1px -1px 1px #493e2a33 inset, -1px -1px 1px #493e2a33 inset, 0 2px 30px #ddd inset'
        }}>
          {/* Shadow sides */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: '130px',
            width: '63px',
            height: '40px',
            background: 'linear-gradient(to right, #0004 65%, #0008 80%)'
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: '130px',
            width: '63px',
            height: '40px',
            background: 'linear-gradient(to right, #0004 65%, #0008 80%)',
            transform: 'rotate(180deg)'
          }} />

          {/* Monitor Inner */}
          <div style={{
            width: '375px',
            height: '315px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000',
            border: '15px solid #b7b19b',
            borderTop: '15px solid #908e7a',
            borderBottom: '15px solid #d7d4c1'
          }}>
            {/* Screen Container */}
            <div style={{
              width: '360px',
              height: '306px',
              background: '#222',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '3px solid #000',
              boxShadow: '10px 10px 20px 14px #0008 inset, -10px -10px 20px 14px #0008 inset',
              position: 'relative'
            }}>
              {/* Eyes */}
              <div style={{
                width: '300px',
                height: '100px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                transition: 'opacity 0.5s',
                opacity: eyesVisible ? 1 : 0,
                zIndex: 1
              }}>
                {[0, 1].map((i) => (
                  <div key={i} className="eye" style={{
                    width: '50px',
                    height: '50px',
                    background: '#000',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'translate(0, 25px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      content: '',
                      display: 'block',
                      background: '#333',
                      width: '100%',
                      height: '110%',
                      position: 'absolute',
                      top: 0,
                      zIndex: 5
                    }} />
                    <div style={{
                      content: '',
                      display: 'block',
                      background: '#333',
                      width: '100%',
                      height: '10%',
                      position: 'absolute',
                      bottom: 0,
                      zIndex: 5
                    }} />
                    <div style={{
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      background: '#ccc',
                      transform: 'translate(10px, -5px)'
                    }} />
                  </div>
                ))}
              </div>

              {/* Screen Text */}
              <div style={{
                width: '100%',
                fontFamily: 'monospace',
                fontSize: '16px',
                color: '#00ff00',
                textShadow: '0 0 10px rgba(0,255,0,0.7), 0 0 20px rgba(0,255,0,0.5)',
                padding: '10px 20px',
                boxSizing: 'border-box',
                position: 'absolute',
                top: 0,
                zIndex: 5,
                transition: 'opacity 0.5s',
                opacity: isOn && screenText ? 1 : 0,
                whiteSpace: 'pre-wrap',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                {screenText}
              </div>

              {/* Progress Bar */}
              {isOn && progress > 0 && (
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  height: '8px',
                  background: '#001100',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '1px solid #00ff00',
                  boxShadow: '0 0 10px rgba(0,255,0,0.3)',
                  zIndex: 10
                }}>
                  <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #00ff00, #00aa00)',
                    boxShadow: '0 0 10px rgba(0,255,0,0.8)',
                    transition: 'width 0.1s linear'
                  }} />
                </div>
              )}
            </div>
          </div>

          {/* Monitor Bottom with Power Button and LED */}
          <div style={{
            width: '100%',
            height: '50px',
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translate(150px, 0)'
          }}>
            {/* Power Switch */}
            <div style={{
              width: '38px',
              height: '38px',
              background: 'linear-gradient(to bottom, #908e7a, #d7d4c1)',
              borderRadius: '50%',
              marginRight: '6px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }} onClick={handlePowerButton}>
              <div style={{
                width: '24px',
                height: '24px',
                border: '2px solid #555',
                borderRadius: '50%',
                background: '#cac1b2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  border: '3px solid #888',
                  borderRadius: '50%',
                  clipPath: 'polygon(15% 0, 0 0, 0 102%, 102% 100%, 102% 0, 85% 0, 50% 50%)'
                }} />
                <div style={{
                  width: '4px',
                  height: '10px',
                  borderRadius: '1px',
                  borderLeft: '3px solid #888',
                  position: 'absolute',
                  transform: 'translate(2px, -4px)'
                }} />
              </div>
            </div>

            {/* Power LED */}
            <motion.div
              className={`power-led ${!isOn ? 'standby' : ''}`}
              style={{
                width: '9px',
                height: '9px',
                background: isOn ? '#5cef11' : '#333',
                borderRadius: '50%',
                border: '1px solid #908e7a',
                boxShadow: isOn ? '0 0 1px 1px #2228 inset' : '0 0 1px 1px #2228 inset'
              }}
              animate={isOn ? {
                opacity: 1
              } : {}}
            />
          </div>
        </div>

        {/* Monitor Base */}
        <div style={{
          width: '375px',
          height: '45px',
          background: 'linear-gradient(to bottom, #d3ccbc, #ccc5b3)',
          overflow: 'hidden',
          borderRadius: '0 0 3px 3px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '30px',
            background: '#0007',
            filter: 'blur(8px)',
            transform: 'translate(0, -10px)',
            position: 'absolute',
            top: 0,
            zIndex: 5
          }} />

          {/* Wheels */}
          <div style={{
            width: '125px',
            height: '20px',
            display: 'flex',
            gap: '8px',
            transform: 'translateY(-26px)'
          }}>
            {[0, 1].map((i) => (
              <div key={i} style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#d7d4c1',
                boxShadow: '0 1px 5px #0009',
                transform: 'translate(95px, 0)'
              }} />
            ))}
          </div>
        </div>

        {/* Monitor Holder */}
        <div style={{
          width: '300px',
          perspective: '280px',
          position: 'relative',
          zIndex: -1,
          transform: 'translateY(-10px)'
        }}>
          <div style={{
            width: '100%',
            height: '90px',
            background: 'linear-gradient(to top, #b7b19b 5%, #6e6d5f 40%)',
            boxShadow: '0 -10px 20px #0007 inset',
            transform: 'rotateX(44deg) translateY(-33px)',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              width: '225px',
              height: '100px',
              background: 'linear-gradient(to top, #b7b19b 1%, #908e7a 15%)',
              borderRadius: '50%',
              boxShadow: '0 -2px 20px #000a inset',
              transform: 'translate(0, -55px)'
            }} />

            <div style={{
              width: '225px',
              height: '100px',
              borderRadius: '28% 28% 50% 50%',
              background: '#0001',
              boxShadow: '0 -2px 10px #0004 inset',
              position: 'absolute',
              zIndex: -1,
              transform: 'translate(0, -32px)'
            }} />

            <div style={{
              width: '225px',
              height: '100px',
              borderRadius: '28% 28% 50% 50%',
              background: '#908e7a',
              boxShadow: '0 -12px 10px #fff4 inset, 0 -6px 10px #0001 inset',
              position: 'absolute',
              zIndex: 0,
              transform: 'translate(0, -54px)'
            }} />
          </div>

          <div style={{
            width: '310px',
            height: '20px',
            background: '#d7d4c1',
            transform: 'translate(-5px, -36px)'
          }} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedDevice;
