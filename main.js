import "./style.css";
import { NightVision } from "night-vision";
import data from "./data-1.json";

document.querySelector("#app").innerHTML = `
<style>
body {
    background-color: #0c0d0e;
}
</style>
<div id="chart-container"></div>
`;

let chart = new NightVision("chart-container", {
  data,
  autoResize: true,
  colors: {
    back: "#111113",
    grid: "#2e2f3055",
    candleDw: "#0c5b3bff",
    candleUp: "#41a35bff",
    volDw: "#29595555",
    volUp: "#5ba38d3f",
    wickDw: "#0c5b3b88",
    wickUp: "#41a35088"
  }
});

// Refernce for experiments
window.chart = chart;
