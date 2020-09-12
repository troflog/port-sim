var data = [{
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
  }];

var layout = {
  barmode: 'stack',
  margin: {
    t: 0
  },
  autosize: true // set autosize to rescale
};

var config = {
  'displayModeBar': false
}

Plotly.newPlot('myDivPlotly', data, layout, config);

// update the layout to expand to the available size
// when the window is resized
window.onresize = function() {
    Plotly.relayout('myDivPlotly', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
};
