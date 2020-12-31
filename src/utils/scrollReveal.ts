import ScrollReveal from "scrollreveal";

const scrollReveal = (ref: React.MutableRefObject<any>) => {
  const config = {
    mobile: true,
    reset: false,
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: 200,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.685, 0.045, 0.355, 1)',
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }

  const sr = ScrollReveal()
  sr.reveal(ref.current, config);
}

export default scrollReveal;
