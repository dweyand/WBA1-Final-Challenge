var lineChart = {
  data: [],
  config: {
    secondPath: false,
  }
};

lineChart.initData = function() {

  d3.json('graphdata.json', function(error, data) {
    if(error) {
      throw 'lineChart initData: Fehler beim Laden der Daten.';
    } else {
      lineChart.data = data;
      lineChart.render();
    }
  });

};

lineChart.render = function() {

  d3.select('#chart-container').text('');

  var svgWidth = 768,
      svgHeight = 400,
      svg = d3.select('#chart-container').append('svg').attr('width', svgWidth).attr('height', svgHeight),
      margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = svgWidth - margin.left - margin.right,
      height = svgHeight - margin.bottom - margin.top;

  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var x = d3.scaleLinear().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  var line = d3.line()
    .x(function(d) {return x(d.km); })
    .y(function(d) {return y(d.energyusage); });

  var lineSecond;

  if (this.config.secondPath) {
    lineSecond = d3.line()
      .x(function(d) {return x(d.km); })
      .y(function(d) {return y(d.energyusage); });
  }

    dataLast = this.data[this.data.length - 2];
    data = this.data[this.data.length - 1];

    var compare = dataLast.concat(data);

    x.domain(d3.extent(compare, function(d) { return d.km; }));
    y.domain([0, d3.max(compare, function(d) { return d.energyusage; })]);

    g.append('g').attr('class', 'axis axis-x')
        .attr('transform', 'translate(0, ' + height + ')')
        .call(d3.axisBottom(x).ticks(5));

    g.append('text')
        .attr('class', 'charttextcolor')
        .attr('transform', 'translate(' + (width/2) + ',' + (height + margin.bottom) + ')')
        .style('text-anchor', 'middle')
        .text('Strecke in km');

    g.append('g').attr('class', 'axis axis-y')
        .call(d3.axisLeft(y));

    g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '.71em')
        .attr('class', 'charttextcolor')
        .style('text-anchor','middle')
        .text('Verbrauch in kw/h');

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#0D7A99')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 3)
      .attr('d', line);

    if (this.config.secondPath) {
      g.append('path')
        .datum(dataLast)
        .attr('fill', 'none')
        .attr('stroke', '#FD2F13')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 3)
        .attr('d', lineSecond);
    }



};
