import * as d3 from "https://cdn.skypack.dev/d3@7";

d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
  .text(function(d) { return "I’m number " + d + "!"; });


// d3.json("wealth_health.json").then(function(data) {
//     console.log(data); // use this to check the data in the console
//     const maxIncome = d3.max(data, (d)=>d.income);
//     const sorted = data.slice().sort((a, b) => d3.descending(a.income, b.income))
//     var scale = d3.scaleLinear().domain([0,maxIncome]).range([0,500]);
//     d3.select("body").append("svg").attr("style","height: 1800px; width: 1000px;");
//     let bars = d3.select("svg")
//     .selectAll("rect")
//     .data(sorted)
//     .enter();
//     bars.append("rect")
//     .attr("width",d => scale(d.income))
//     .attr("height", 9)
//     .attr("x", 100)
//     .attr("y", (d,i) => 10+i * 10)
//     .style("fill", "#555588")
//     .style("stroke", "#000000")
//     .style("stroke-width", "0.5px");
// };