var svgWidth = 960,
svgHeight = 500,
svg = d3.select('#graph').append('svg').attr('width', svgWidth).attr('height', svgHeight),
margin = {top: 20, right: 20, bottom: 30, left: 40},
width = svgWidth - margin.left - margin.right,
height = svgHeight - margin.bottom - margin.top;

var g = svg.append('g').attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

//var x = d3.scaleBand().range([0, width]).domain(data.map( function(d) { return d.km;} ));
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var line = d3.line()
.x(function(d) {return x(d.km); })
.y(function(d) {return y(d.fahrta); });

var line2 = d3.line()
.x(function(d) {return x(d.km); })
.y(function(d) {return y(d.fahrtb); });

d3.csv("graphdata.csv", function(error, data){
if(error) throw error;   

data.forEach(function(d){
    d.km = +d.km;
    d.fahrta = +d.FahrtA;
    d.fahrtb = +d.FahrtB;
});
    

    

x.domain([0, d3.max(data, function(d) { return d.km;})]);
y.domain([0, d3.max(data, function(d) {return Math.max(d.fahrta, d.fahrtb);})]);

g.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", line);

    g.append("path")
    .data([data])
    .attr("class", "line")
    .style("stroke", "red")
    .attr("d", line2);

g.append('g').attr('class', 'axis axis-x')
.attr('transform', 'translate(0, ' + height + ')')
.call(d3.axisBottom(x));

g.append("text")
.attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom) + ")")
.style("text-anchor", "middle")
.text("km");

g.append('g')
//.attr('class', 'axis axis-y')
.call(d3.axisLeft(y));

g.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0 - margin.left)
.attr("x", 0 - (height / 2))
.attr("dy", ".71em")
.style("text-anchor","middle")
.text("kw/h");


/*g.append("path")
.attr("class", "line")
.attr("d", function(d) {return line(data); })
.attr("fill", "none")
.attr("stroke", "black")
attr("stroke-width", "4px");

//.attr("d", valueline(data));


g.selectAll('.dot').data(data)
.enter().append('circle')
.attr('class', 'dot')
.attr('cx', function(d) { return x(d.km);})
.attr('cy', function(d) { return y(d.energyusage);})
.attr('r', 3); */

});