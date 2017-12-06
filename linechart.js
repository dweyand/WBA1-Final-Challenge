var svgWidth = 960,
    svgHeight = 500,
    svg = d3.select('#container').append('svg').attr('width', svgWidth).attr('height', svgHeight).style('background-color', 'white'),
    margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = svgWidth - margin.left - margin.right,
    height = svgHeight - margin.bottom - margin.top;

var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var line = d3.line()
  .x(function(d) {return x(d.km); })
  .y(function(d) {return y(d.energyusage); });

d3.json('graphdata.json', function(error, data) {

  console.log(data);
 
  data2 = data[data.length - 2];
  data = data[data.length - 1];
  

  var compare = data2.concat(data);

  x.domain(d3.extent(compare, function(d) { return d.km; }));
  y.domain([0, d3.max(compare, function(d) { return d.energyusage; })]);

  g.append('g').attr('class', 'axis axis-x')
      .attr('transform', 'translate(0, ' + height + ')')
      .call(d3.axisBottom(x).ticks(5));

  g.append("text")
      .attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom) + ")")
      .style("text-anchor", "middle")
      .text("km");

  g.append('g').attr('class', 'axis axis-y')
      .call(d3.axisLeft(y));

  g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", ".71em")
      .style("text-anchor","middle")
      .text("kw/h");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#BC0E57")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 4)
    .attr("d", line);

  g.append("path")
    .datum(data2)
    .attr("fill", "none")
    .attr("stroke", "#BC0E30")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 4)
    .attr("d", line);

});