console.log('test');
console.log(d3);

const dataset = [
  { id: 'd1', time: 10, bottleneck: 'false' },
  { id: 'd2', time: 3, bottleneck: 'false' },
  { id: 'd3', time: 12, bottleneck: 'false' },
  { id: 'd4', time: 6, bottleneck: 'false' },
  { id: 'd5', time: 6, bottleneck: 'true' },
  { id: 'd6', time: 15, bottleneck: 'true' },
  { id: 'd7', time: 8, bottleneck: 'false' },
];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth / dataset.length;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d.time*10; 
    })
    .attr("height", function(d) { 
        return d.time*10; 
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d.bottleneck;
    })
    .attr("y", function(d, i) {
        return svgHeight - d.time*10 - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i + barWidth / 4;
    })
    .attr("fill", "#A64C38");

var xScale = d3.scaleLinear()
     .domain([0, 7])
     .range([0, svgWidth]);
          
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset.time)])
    .range([svgHeight, 0]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);
         
svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);
         
var xAxisTranslate = svgHeight - 20;
         
svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate  +")")
    .call(x_axis);