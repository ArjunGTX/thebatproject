import { IOptions, RecursivePartial } from "@tsparticles/engine";

export const batLogoOptions: RecursivePartial<IOptions> = {
  autoPlay: true,
  clear: true,
  defaultThemes: {},
  delay: 0,
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  fullScreen: false,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        mix: false,
        opacity: 2,
        size: 3,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: {},
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      direction: "none",
      drift: 0,
      enable: true,
      outModes: {
        default: "bounce",
        bottom: "bounce",
        left: "bounce",
        right: "bounce",
        top: "bounce",
      },
      random: true,
      size: false,
      speed: 0.55,
    },
    number: {
      limit: {
        mode: "delete",
        value: 0,
      },
      value: 400,
    },
    opacity: {
      value: {
        min: 0.05,
        max: 0.5,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 2,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    reduceDuplicates: false,
    shape: {
      close: true,
      fill: true,
      options: {},
      type: "circle",
    },
    size: {
      value: 1,
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: false,
      distance: 30,
      enable: true,
      frequency: 1,
      opacity: 0.5,
      width: 1,
      warp: false,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
  zLayers: 100,
  key: "polygonMask",
  name: "Polygon Mask",
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  polygon: {
    draw: {
      enable: true,
      stroke: {
        color: {
          value: "#ffffff",
        },
        width: 1,
        opacity: 0.2,
      },
    },
    enable: true,
    inline: {
      arrangement: "equidistant",
    },
    move: {
      radius: 5,
      type: "path",
    },
    scale: 1,
    type: "inline",
    url: "/images/batlogo.svg",
    position: {
      x: 50,
      y: 50,
    },
  },
  responsive: [
    {
      maxWidth: 640,
      mode: "screen",
      options: {
        particles: {
          number: {
            value: 240,
          },
        },
        polygon: {
          scale: 0.4,
        },
      },
    },
    {
      maxWidth: 1800,
      mode: "screen",
      options: {
        particles: {
          number: {
            value: 380,
          },
        },
        polygon: {
          scale: 0.8,
        },
      },
    },
  ],
};
