var data = [{
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
  }];

var layout = {
  barmode: 'stack',
  margin: {
    t: 2
  },
  autosize: true // set autosize to rescale
};



var config = {
  'displayModeBar': false,
   responsive: true
}

Plotly.newPlot('plot-1', data, layout, config);
Plotly.newPlot('plot-2', data, layout, config);



/*
Old way of responsive
// update the layout to expand to the available size
// when the window is resized
window.onresize = function() {
    Plotly.relayout('myDivPlotly', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
};
*/