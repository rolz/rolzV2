// $( document ).ready(function() {
//     console.log( "ready!" );

//     var $win = $(window);
//     var width = $win.width();
//     var height = $win.height()/2;

//     //Animated Line path
//     var svg = d3.select("#viewport")
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("id", "visualization");

//     var data = [ { "x": 1,   "y": 1},
//                  { "x": 2,  "y": 2.5},
//                  { "x": 3,  "y": 1.5},
//                  { "x": 4,  "y": 3},
//                  { "x": 5,  "y": 1},
//                  { "x": 6,  "y": 4}];


//     var x = d3.scale.linear().domain([0, 7]).range([0, width]);
//     var y = d3.scale.linear().domain([0, 7]).range([height,0]);

//     var line = d3.svg.line()
//       .interpolate("cardinal")
//       .x(function(d,i) {
//         return x(d.x);
//       })
//       .y(function(d,i) {
//         return y(d.y);
//       });

//     var button = d3.select("#more-link");

//     // on click draw chart
//     var path;
//     var chartState = false;


//     button.on("click", function(){

//       setTimeout(function() {




//       }, 1000);

//       if (!chartState) {

//         setTimeout(function() {

//           path = svg.append("path")
//             .attr("d", line(data))
//             .attr("stroke", "#fff")
//             .attr("stroke-width", "3")
//             .attr("fill", "none");

//           var totalLength = path.node().getTotalLength();

//           path
//             .attr("stroke-dasharray", totalLength + " " + totalLength)
//             .attr("stroke-dashoffset", totalLength)
//             .transition()
//               .duration(2000)
//               .ease("linear")
//               .attr("stroke-dashoffset", 0);

//           // var points = svg.selectAll(".point")
//           //     .data(data)
//           //   .enter().append("svg:circle")
//           //      .attr("stroke", "#fff")
//           //      .attr("fill", function(d, i) { return "none" })
//           //      .attr("cx", function(d, i) { return x(d.x) })
//           //      .attr("cy", function(d, i) { return y(d.y) })
//           //      .attr("r", function(d, i) { return 10 });

//         }, 1200);

//       } else {
//           console.log(chartState);
//         // remove path - not working can't find path
//         path
//           .transition()
//           .duration(2000)
//           .ease("linear")
//           .attr("stroke-dashoffset", totalLength);

//       };

//       chartState = !chartState;

//     });


// });


