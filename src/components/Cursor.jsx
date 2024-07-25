import React, { useEffect, useRef } from "react";

import gsap from "gsap";

const Cursor = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef();
  const size = 30;

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };
  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className="relative hidden lg:flex">
      <div
        ref={circle}
        style={{
          backgroundColor: "white",
          width: size,
          height: size,
        }}
        className="top-0 left-0 fixed rounded-full z-[999]"
      />
    </div>
  );
};

export default Cursor;
