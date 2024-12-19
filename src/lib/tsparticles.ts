import { IOptions, RecursivePartial } from "@tsparticles/engine";

export const batLogoOptions: RecursivePartial<IOptions> = {
  autoPlay: true,
  clear: true,
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
    url: "/images/misc/batlogo.svg",
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
            value: 150,
          },
        },
        polygon: {
          scale: 0.425,
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

export const nightSkyOptions: RecursivePartial<IOptions> = {
  autoPlay: true,
  clear: true,
  delay: 0,
  fullScreen: true,
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        mix: false,
        opacity: 0,
        size: 0,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: {},
        },
      },
      repulse: {
        distance: 400,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: {},
        },
      },
    },
  },
  particles: {
    color: {
      value: "#fefefe",
    },
    effect: {
      close: true,
      fill: true,
      options: {},
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
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: {
        min: 0.1,
        max: 0.5,
      },
      straight: false,
      vibrate: false,
      warp: false,
    },
    number: {
      limit: {
        mode: "delete",
        value: 0,
      },
      value: 200,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.4,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
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
      value: {
        min: 1,
        max: 3,
      },
    },
    stroke: {
      width: 0,
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          value: 3,
        },
        rate: {
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [
    {
      maxWidth: 640,
      mode: "screen",
      options: {
        particles: {
          number: {
            value: 80,
          },
        },
      },
    },
  ],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  key: "night-sky",
  name: "Night Sky",
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
};
