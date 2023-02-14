import * as d3 from "https://cdn.skypack.dev/d3@7";

// d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//   .enter().append("p")
//   .text(function(d) { return "I’m number " + d + "!"; });


d3.json("wealth_health.json").then(function(data) {
    console.log(data); // use this to check the data in the console
    const maxIncome = d3.max(data, (d)=>d.income);
    const maxLifeExpectancy = d3.max(data, (d)=> d.lifeExpectancy);

    console.log("maxIncome: ", maxIncome);
    console.log("maxLifeExpectancy ", maxLifeExpectancy);

    const sorted = data.slice().sort((a, b) => d3.descending(a.income, b.income))
    var scale = d3.scaleLinear().domain([0,maxIncome]).range([0,500]);

    d3.select("body").append("svg").attr("style","height: 1800px; width: 1000px;");


    // var incomeScale = d3.scaleLinear().domain([0,maxIncome]).range([0,50]);
    // var lifeScale = d3.scaleLinear().domain([0,maxLifeExpectancy]).range([0,50]);



    // // scatter plot

    // let circles = d3.select("svg")
    // .selectAll("circle")
    // .data(data)
    // .enter();

    // circles.append("circle")
    // // .attr("r",  d => scale(d.income) * 0.1)
    // .attr("r",  d => 3)
    // .attr("cx", d => d.income)
    // .attr("cy", d => d.lifeExpectancy)
    // .style("fill", "#555588")
    // .style("stroke", "#000000")
    // .style("stroke-width", "0.5px");


    //
    // bar graphs
    //
    
    // bar graphs
    let bars = d3.select("svg")
    .selectAll("rect")
    .data(sorted)
    .enter();
    
    // rectangles
    bars.append("rect")
    .attr("width",d => scale(d.income))
    .attr("height", 9)
    .attr("x", 100)
    .attr("y", (d,i) => 10+i * 10)
    .style("fill", "#555588")
    .style("stroke", "#000000")
    .style("stroke-width", "0.5px");

    // text lables
    bars.append("text")
    .text(d => d.name)
    .style("font-size", "10px")
    .style("font-family", "monospace")
    .style("font-family", "sans-serif")
    .attr("x", 10)
    .attr("y", (d,i) => 19+i * 10)
    // 
    

})