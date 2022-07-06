
import { writable } from "svelte/store";

export default writable({
  color: {
    primary: '#33b4ff',
    orange: '#ff9933',
    warning: '#ff2317',
    grey: '#b3b3b3'
  },
  space: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem"
  },
  font: {
    default: "sans-serif"
  },
  breakpoints: ["20rem", "48rem", "64rem"]
});
