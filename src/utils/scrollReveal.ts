import ScrollReveal from "scrollreveal";

const scrollReveal = (ref: React.MutableRefObject<any>, delay = 200, viewFactor = 0.25,) => {

  const config = {
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.685, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  ScrollReveal().reveal(ref.current, config);
}

export default scrollReveal;
