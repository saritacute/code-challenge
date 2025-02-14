export const keyActions = {
  "ArrowUp": "^",
  "ArrowDown": "v",
  "ArrowLeft": "<",
  "ArrowRight": ">",
  "Enter": "x",
} as const;

export const otherActions = {
  "Backspace": "Backspace",
  "Escape": "Escape",
} as const;

export const droneActions = {
  "^": "Up",
  "v": "Down",
  "<": "Left",
  ">": "Right",
  "x": "Capture",
} as const;
