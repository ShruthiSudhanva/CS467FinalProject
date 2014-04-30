var svg = dimple.newSvg("#timeline", 3000, 600);
      d3.csv("../data/timeline.csv", function (data) {
        /*data = dimple.filterData(data, "Date", [
          "12/3/2013", "3/19/2014", "3/31/2014",
          "01/10/2012", "01/11/2012", "01/12/2012"]);*/
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(100, 30, 2900, 500)
        var x = myChart.addCategoryAxis("x", "Date");
        x.addOrderRule("Date");
        var y = myChart.addCategoryAxis("y", "Username");
        myChart.addMeasureAxis("z", "Price");
        myChart.addSeries("Category", dimple.plot.bubble);
        myChart.addLegend(140, 10, 360, 20, "right");
        myChart.draw();
      });