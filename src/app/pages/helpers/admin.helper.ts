

// let
//   su,
//   ye,
//   ko,
//   d1 = [],
//   d2 = [],
//   d3 = [],
//   graph,
//   i, m, y,
//   a, aa, ab, ac, ad, ae, af, ag, ah;
//
//   y = ye*12;
//
//   m = 0;
//
// for (i = ye; i> 0; i--) {
//   m = m+i;
// };
//
// for (i = y; i> 0; i--) {
//   d1.push([i, su/y]);
//   if(i> 0 ){
// aa = su/ye*ko;
// a = aa/12;
// b = (su*1/(m))/12;
// }
// if(i> 12 ){
//   b = (su*2/(m))/12;
//   ab = (su-a+)/ye*ko;
//   a = ab/12;
// }
// d2.push([i, a]);
// d3.push([i, b]);
// }
// graph = Flotr.draw(
//   container,[
//     {data:d1, label:'Линейныйметод', lines: {show: true}, points: {show:
//           true}},
//     {data:d2, label:'Методуменьшаемогоостатка', lines: {show: true},
//       points: {show: true}},
//     {data:d3, label:'Посуммечиселлетсрокаполезногоиспользования', lines:
//         {show: true}, points: {show: true}},
//   ],{
//     grid:{
//       backgroundColor: 'white',
//       inorVerticalLines: true
//     },
//     HtmlText: false,
//     legend: {
//       position: 'nw'
//     },
//     mouse : {
//       track : true,
//       lineColor : 'purple',
//       relative : true,
//       position : 'ne',
//       sensibility : 1,
//       trackDecimals : 2,
//       trackFormatter : function (o) { return '' + o.x +'; ' + o.y; }
//     }
//   });
// this.CurrentExample = function (operation) {
//   var
//     format = $('#image-download input:radio[name=format]:checked').val();
//   if (Flotr.isIE&&Flotr.isIE< 9) {
//     alert(
//       "Your browser doesn't allow you to get a bitmap image from the plot, " +
//       "you can only get a VML image that you can use in Microsoft Office.<br
//       />"
//     );
//   }
//   if (operation == 'to-image') {
//     graph.download.saveImage(format, null, null, true)
//   } else if (operation == 'download') {
//     graph.download.saveImage(format);
//   } else if (operation == 'reset') {
//     graph.download.restoreCanvas();
//   }
// };
// return graph;
// })();
// }, false);
