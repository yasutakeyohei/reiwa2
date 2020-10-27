{{first:2020-9-9}}
# 例月現金出納検査（令和2年5,6月）

{{#include ../partials/yasutake-speak.md:1}} 令和2年5,6月分の現金収支、現金保管の状況についての検査結果報告。いずれも誤りがないとの結論でした。6月末時点の検査結果をグラフにしてみました。保管金と基金については金額順に並べました。

## 予算現額推移
一般会計は約700億円で推移していましたが、5月に定額給付金の補正予算が入り900億円規模になりました。その他は変化がありません。

<div id="yosan-gengaku" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart', 'line']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '一般会計');
    data.addColumn('number', '国保特会');
    data.addColumn('number', '後期高医特会');
    data.addColumn('number', '介護保険特会');
    data.addRows([
      ["H31\n4月",  663.5, 168.7, 43.49, 135.5],
      ["R1\n5月",  663.5, 168.7, 43.49, 135.5],
      ["R1\n6月",  665.8, 168.7, 43.49, 135.5],
      ["R1\n7月",  665.8, 168.7, 43.49, 135.5],
      ["R1\n8月",  665.8, 168.7, 43.49, 135.5],
      ["R1\n9月",  685.4, 170.2, 43.76, 138.1],
      ["R1\n10月", 685.4, 170.2, 43.76, 138.1],
      ["R1\n11月", 685.4, 170.2, 43.76, 138.1],
      ["R1\n12月", 688.9, 170.2, 43.76, 138.1],
      ["R2\n1月",  688.7, 170.2, 43.76, 138.1],
      ["R2\n2月",  688.7, 170.2, 43.76, 138.1],
      ["R2\n3月",  677.8, 172.2, 43.4,  138.1],
      ["R2\n4月",  690.9, 170,	 44.7,  141.7],
      ["R2\n5月",  906.2, 170,	 44.7,  141.7],
      ["R2\n6月",  908.7, 170,	 44.7,  141.7]     
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      chart: {
        title: '予算現額推移',
        titleTextStyle: {
            fontSize: 18
        },
      },
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
    };
    var chart = new google.visualization.LineChart(document.getElementById('yosan-gengaku'));
    chart.draw(data, options);
  }
</script>

## 収入と支出

### 一般会計

<div id="ippan-syunyu-syusyutu" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '一般会計・収入');
    data.addColumn('number', '一般会計・支出');
    data.addRows([
      ["H31\n4月",17.62, 32.08],
      ["R1\n5月", 48.85, 34.12],
      ["R1\n6月", 108.1, 55.61],
      ["R1\n7月", 35.92, 49.5],
      ["R1\n8月", 50.43, 50.98],
      ["R1\n9月", 57.36, 48.72],
      ["R1\n10月",26.88, 63.18],
      ["R1\n11月",37.15, 33.05],
      ["R1\n12月", 35.3, 63.92],
      ["R2\n1月", 53.85, 45.84],
      ["R2\n2月", 25.97, 47.85],
      ["R2\n3月", 156.8, 79.9],
      ["R2\n4月", 17.96, 35.08],
      ["R2\n5月", 146.1, 39.04],
      ["R2\n6月", 217.7, 211.1]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('ippan-syunyu-syusyutu'));
    chart.draw(data, options);
  }
</script>

### 国民健康保険特別会計

<div id="kokuho-syunyu-syusyutu" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '国保特会・収入');
    data.addColumn('number', '国保特会・支出');
    data.addRows([
      ["H31\n4月",1.566, 1.175],
      ["R1\n5月", 9.304, 9.185],
      ["R1\n6月", 10.77, 9.415],
      ["R1\n7月", 12.08, 8.874],
      ["R1\n8月", 24.14, 16.24],
      ["R1\n9月", 14.39, 16.74],
      ["R1\n10月",13.85, 17.13],
      ["R1\n11月",12.74, 16.12],
      ["R1\n12月",23.99, 24.12],
      ["R2\n1月", 13.25, 9.585],
      ["R2\n2月", 12.08, 16.08],
      ["R2\n3月", 16.44, 17.28],
      ["R2\n4月", 1.605, 1.258],
      ["R2\n5月", 9.223, 9.1],
      ["R2\n6月", 9.68, 8.736]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('kokuho-syunyu-syusyutu'));
    chart.draw(data, options);
  }
</script>

### 後期高齢者医療保険特別会計

<div id="kouki-syunyu-syusyutu" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '後期高医特会・収入');
    data.addColumn('number', '後期高医特会・支出');
    data.addRows([
      ["H31\n4月",3.407, 2.919],
      ["R1\n5月", 2.197, 2.206],
      ["R1\n6月", 2.832, 2.177],
      ["R1\n7月", 2.511, 2.223],
      ["R1\n8月", 2.1, 2.248],
      ["R1\n9月", 3.057, 2.281],
      ["R1\n10月",3.48, 4.075],
      ["R1\n11月",4.175, 4.159],
      ["R1\n12月",3.688, 4.18],
      ["R2\n1月", 4.842, 4.447],
      ["R2\n2月", 3.887, 4.266],
      ["R2\n3月", 7.053, 7.803],
      ["R2\n4月", 3.408, 2.954],
      ["R2\n5月", 2.108, 2.205],
      ["R2\n6月", 2.891, 2.264]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('kouki-syunyu-syusyutu'));
    chart.draw(data, options);
  }
</script>

### 介護保険特別会計

<div id="kaigo-syunyu-syusyutu" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '介護保険特会・収入');
    data.addColumn('number', '介護保険特会・支出');
    data.addRows([
      ["H31\n4月",0.02409, 0.9843],
      ["R1\n5月", 12.7, 10.83],
      ["R1\n6月", 8.778, 10.48],
      ["R1\n7月", 19.62, 11.3],
      ["R1\n8月", 6.703, 10.39],
      ["R1\n9月", 11.11, 10.89],
      ["R1\n10月",13.9, 11.73],
      ["R1\n11月",10.71, 10.51],
      ["R1\n12月",6.554, 11.19],
      ["R2\n1月", 16.79, 11.65],
      ["R2\n2月", 6.634, 10.98],
      ["R2\n3月", 15.32, 13.19],
      ["R2\n4月", 0.02818, 1.01],
      ["R2\n5月", 12.94, 11.37],
      ["R2\n6月", 14.98, 10.64]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('kaigo-syunyu-syusyutu'));
    chart.draw(data, options);
  }
</script>

### 下水道特別会計

<div id="gesuido-syunyu-syusyutu" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '下水道特会・収入');
    data.addColumn('number', '下水道特会・支出');
    data.addRows([
      ["H31\n4月",1.749, 3.495],
      ["R1\n5月", 2.2, 1.043],
      ["R1\n6月", 2.236, 0.6382],
      ["R1\n7月", 1.843, 6.203],
      ["R1\n8月", 8.839, 1.038],
      ["R1\n9月", 1.685, 4.667],
      ["R1\n10月",1.97, 2.896],
      ["R1\n11月",1.756, 0.8465],
      ["R1\n12月",1.823, 0.6599],
      ["R2\n1月", 1.752, 3.868],
      ["R2\n2月", 1.946, 1.335],
      ["R2\n3月", 9.713, 10.61],
      ["R2\n4月", 1.84, 3.174],
      ["R2\n5月", 5.184, 0.9301],
      ["R2\n6月", 2.054, 1.265]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('gesuido-syunyu-syusyutu'));
    chart.draw(data, options);
  }
</script>

## 収入と支出の累計差
各会計について、月末残高の、収入累計から支出累計を引いた値をグラフにしました。この額がマイナスの場合、（月末時点で）他の会計や基金から資金融通が必要になっていることを示します。また逆に大きくプラスが続いているようだと、予定していた市民サービスが消化できていない、という可能性もあります。

### 一般会計（累計収入 - 累計支出）
昨年度の2月に約27億円のマイナスになっています。運転資金としてこのくらいの余裕は持っておく必要がある、ということと思います。かなりの額ですが、後述するように、資金融通できる基金残高が約130億円あるので今のところ問題ありません。

<div id="ippan-ruikei-sa" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '一般会計');
    data.addRows([
      ["H31\n4月", -14.46],
      ["R1\n5月", 0.2748],
      ["R1\n6月", 52.73],
      ["R1\n7月", 39.15],
      ["R1\n8月", 38.6],
      ["R1\n9月", 47.24],
      ["R1\n10月", 10.94],
      ["R1\n11月", 15.03],
      ["R1\n12月", -13.59],
      ["R2\n1月", -5.57],
      ["R2\n2月", -27.45],
      ["R2\n3月", 49.47],
      ["R2\n4月", -17.12],
      ["R2\n5月", 89.97],
      ["R2\n6月", 96.56]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('ippan-ruikei-sa'));
    chart.draw(data, options);
  }
</script>

### その他会計（累計収入 - 累計支出）
特に目立った動きはありません。

<div id="ruikei-sa" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '国保特会');
    data.addColumn('number', '後期高医特会');
    data.addColumn('number', '介護保険特会');
    data.addColumn('number', '下水道事業会計');
    data.addRows([
      ["H31\n4月", 0.3907, 0.4886, -0.9602, 2.656],
      ["R1\n5月", 0.5097, 0.4794, 0.9055, 3.813],
      ["R1\n6月", 1.864, 1.134, -0.7962, 5.41],
      ["R1\n7月", 5.066, 1.423, 7.523, 1.051],
      ["R1\n8月", 2.96, 1.275, 3.836, 8.852],
      ["R1\n9月", 10.61, 2.051, 4.053, 5.871],
      ["R1\n10月", 7.329, 1.456, 6.222, 4.946],
      ["R1\n11月", 3.947, 1.472, 6.414, 5.855],
      ["R1\n12月", 3.818, 0.9787, 1.778, 7.018],
      ["R2\n1月", 7.485, 1.373, 6.916, 4.902],
      ["R2\n2月", 3.488, 0.9937, 2.564, 5.513],
      ["R2\n3月", 2.656, 0.2429, 4.693, 4.611],
      ["R2\n4月", 0.347, 0.4533, -0.9819, 3.277],
      ["R2\n5月", 0.4706, 0.3564, 0.5851, 7.531],
      ["R2\n6月", 1.414, 0.9838, 4.926, 8.32]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      seriesType: 'bars'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('ruikei-sa'));
    chart.draw(data, options);
  }
</script>

＊このうち下水道事業は公営企業会計です。

## 基金残高

### 全体

<div id="kikin" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '都市計画事業基金');
    data.addColumn('number', '財政調整基金');
    data.addColumn('number', '公共施設基金');
    data.addColumn('number', '下水道基金');
    data.addColumn('number', '介護給付費等準備基金');
    data.addColumn('number', '職員退職手当基金');
    data.addColumn('number', 'ごみ減量・リサイクル推進基金');
    data.addColumn('number', '国民健康保険事業運営基金');
    data.addColumn('number', '国際平和友好交流基金');
    data.addColumn('number', '緑化基金');
    data.addColumn('number', '健康福祉基金');
    data.addColumn('number', '土地開発基金');
    data.addColumn('number', '東京オリパラ子ども夢・未来基金');
    data.addColumn('number', '育英基金');
    data.addColumn('number', '職員研修基金');
    data.addColumn('number', '文化振興基金');
    data.addColumn('number', '減債基金');
    data.addColumn('number', '森林環境譲与税基金');
    data.addRows([
      ["H31\n4月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n5月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n6月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n7月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n8月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n9月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n10月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n11月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n12月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R2\n1月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R2\n2月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.6996, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R2\n3月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0],
      ["R2\n4月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0],
      ["R2\n5月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0],
      ["R2\n6月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        }
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      isStacked: true
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('kikin'));
    chart.draw(data, options);
  }
</script>

### 上部拡大

<div id="kikin2" style="width:100%;height: 450px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', '年月');
    data.addColumn('number', '都市計画事業基金');
    data.addColumn('number', '財政調整基金');
    data.addColumn('number', '公共施設基金');
    data.addColumn('number', '下水道基金');
    data.addColumn('number', '介護給付費等準備基金');
    data.addColumn('number', '職員退職手当基金');
    data.addColumn('number', 'ごみ減量・リサイクル推進基金');
    data.addColumn('number', '国民健康保険事業運営基金');
    data.addColumn('number', '国際平和友好交流基金');
    data.addColumn('number', '緑化基金');
    data.addColumn('number', '健康福祉基金');
    data.addColumn('number', '土地開発基金');
    data.addColumn('number', '東京オリパラ子ども夢・未来基金');
    data.addColumn('number', '育英基金');
    data.addColumn('number', '職員研修基金');
    data.addColumn('number', '文化振興基金');
    data.addColumn('number', '減債基金');
    data.addColumn('number', '森林環境譲与税基金');
    data.addRows([
      ["H314\n月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n5月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n6月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n7月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n8月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n9月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n10月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n11月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R1\n12月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R2\n1月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.2196, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R2\n2月", 39.21, 30.17, 22.19, 13.57, 11.88, 7.667, 3.931, 3.516, 1.072, 0.946, 0.674, 0.6996, 0.5, 0.3665, 0.3305, 0.2542, 0.048, 0],
      ["R2\n3月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0],
      ["R2\n4月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0],
      ["R2\n5月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0],
      ["R2\n6月", 47.44, 29.01, 20.59, 16.07, 11.37, 6.502, 3.469, 4.016, 1.043, 0.8845, 0.6044, 0.6996, 0.5281, 0.3724, 0.3279, 0.2235, 0.04801, 0]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 14,
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontSize: 16,
        },
        viewWindow: {
          min: 125,
          max: 145
        },
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
      legend: {
        position: 'top',
      },
      width: '100%',
      isStacked: true
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('kikin2'));
    chart.draw(data, options);
  }
</script>


特に大きな動きはありません。