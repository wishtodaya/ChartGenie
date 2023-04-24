document.getElementById("chart-form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const userInput = document.getElementById("user-input").value;
    const prompt=userInput+",只回复生成兼容5.2.1版本ECharts的 options json"
    console.log(prompt);
    const response = await fetch("/generate-chart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await response.json();
  
    if (data.success) {
    console.log(data);
      const chartContainer = document.getElementById("chart-container");
      chartContainer.innerHTML = "";
      const chart = echarts.init(chartContainer);

      chart.setOption(JSON.parse(data.chartConfig));
      console.log(chart);
    } else {
      alert("Error generating chart configuration. Please try again.");
    }
  });
  