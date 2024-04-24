export const changeOpacityOnScroll = (
  target: HTMLElement,
  ProximityToTargetBody: number
) => {
  target.style.opacity = String(ProximityToTargetBody ** 15);
};

export const changePositionOnScroll = (
  target: HTMLElement,
  ProximityToTargetBody: number
) => {
  target.style.position = "relative";
  const direction =
    (([...(target.parentElement?.children || [])].indexOf(target) % 2) - 0.5) *
    2;
  target.style.left = `${
    (1 - ProximityToTargetBody) ** 2 * 1090 * direction
  }px`;
};

export const changeSkewOnScroll = (
  target: HTMLElement,
  ProximityToTargetBody: number
) => {
  const direction =
    (([...(target.parentElement?.children || [])].indexOf(target) % 2) - 0.5) *
    2;
  target.style.transform = `skew(${
    (1 - ProximityToTargetBody) ** 2 * 2000 * direction
  }deg)`;
};

export const changeHeightOnScroll = (
    target: HTMLElement,
    ProximityToTargetBody: number
  ) => {
    target.style.height = `${
      ProximityToTargetBody ** 4 * 700
    }px`;
  };