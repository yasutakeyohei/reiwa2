# 例月現金出納検査（令和2年4月）

{{#include ../partials/yasutake-speak.md:1}} 令和2年4月分の現金収支、現金保管の状況についての検査結果報告。いずれも誤りがないとの結論でした。4月末時点の検査結果をグラフにしてみました。保管金と基金については金額順に並べました。

<div id="syushi" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['', '予算', '収入累計', '支出累計'],
      ['一般会計', 690.9, 17.96, 35.08],
      ['国保特会', 170.0, 1.605, 1.258],
      ['後期特会',  44.70,  3.408,  2.954],
      ['介護特会', 141.7, 0.028, 1.010],
      ['下水道', 0, 64.51, 31.74],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 18,
      chart: {
        title: '令和2年度4月分収支累計（令和2年4月末時点）',
        titleTextStyle: {
            fontName: "UD デジタル 教科書体 N-R",
            fontSize: 18
        },
      },
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      hAxis: {
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      annotations: {
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30, height:'75%'}
    };
    var chart = new google.charts.Bar(document.getElementById('syushi'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
</script>

＊このうち下水道事業は公営企業会計です。


<div id="hokankin" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '億円', { role: 'annotation' }],
      ['一般会計',    28.9,   28.9],
      ['下水道\n会計',   3.28,   3.28],
      ['歳入歳出外現金',   2.02,   2.02],
      ['国保特別会計', 1.35,   1.35],
      ['後期特別会計', 0.953, 0.953],
      ['土地開発基金',   0.700,   0.700],
      ['介護特別会計', 0.518,   0.518],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
        textStyle: {
          fontSize: 16
        },
      },
      title: '保管金（すべて普通預金・令和2年4月末時点）',
      titleTextStyle: {
          fontSize: 18
      },
      series: {
        0: {
            annotations: {
              textStyle: {
                color: 'black',
                fontName: 'UD デジタル 教科書体 N-R',
                fontSize: 18,
              },
            },
        }
      },
      vAxis: {
        format: '#.##億円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('hokankin'));
    chart.draw(data, options);
  }
</script>


<div id="kikin" style="width:100%;height: 600px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '普通預金', '自由金利型（大口）定期', '地方債・社債', 'total', { role: 'annotation' }],
      ['都市計画事業基金',            40.9,  5.00, 0.500,    0.150, 47.4],
      ['財政調整基金',               29.0,    0,      0,   0, 29.0],
      ['公共施設整備基金',            17.2, 3.00,  0.400,   0, 20.6],
      ['下水道事業基金',               11.1,   5.00,   0,    0, 16.07],
      ['介護給付費等準備基金',         8.37,  3.00,    0,     0, 11.4],
      ['職員退職手当基金',            3.40, 3.00,  0.100,   0, 6.50],
      ['国民健康保険事業運営基金',     2.32,  1.70, 0,        0, 4.02],
      ['ごみ減量・リサイクル推進基金',  1.47,  2.00, 0,       0, 3.47],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      legend: {
        position: 'in',
        alignment: 'end',
        textStyle: {
          fontSize: 13
        }
      },
      title: '基金残高・金額順（億円）[続きあり]',
      titleTextStyle: {
          fontSize: 18
      },
      pieSliceText: "value",
      chartArea:{top:30,height:'75%'},
      isStacked: true,
      hAxis: {
        slantedTextAngle: 60,
        maxTextLines: 3,
        textStyle: {
          fontSize: 11
        }
      },
      annotations: {
        textStyle: {fontSize: 10 },
      },
      series: {
        3: {
            annotations: {
              format: '#.##億円',
              textStyle: {
                color: 'black',
                fontName: 'UD デジタル 教科書体 N-R',
                fontSize: 14,
              },
            },
            color: "white",
            visibleInLegend: false
        }
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 55
        },
        format: '#.##億円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      hAxis: {
        textStyle: {
          color: 'black',
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 11,
        },
      },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('kikin'));
    chart.draw(data, options);
  }
</script>


<div id="kikin2" style="width:100%;height: 600px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '普通預金', '自由金利型（大口）定期', '地方債', 'total', { role: 'annotation' }],
      ['国際平和友好交流基金',        0.443, 0.600, 0,       0, 1.04],
      ['緑化基金',                   0.185, 0.700, 0,       0, 0.885],
      ['健康福祉基金',                 0.204,   0.400, 0,    0, 0.604],
      ['東京オリパラ子ども夢・未来基金', 0.528,   0,   0,    0,  0.528],
      ['育英基金',                    0.0724, 0.300, 0,      0, 0.372],
      ['職員研修基金',                0.128,  0.200, 0,      0, 0.328],
      ['文化振興基金',               0.124, 0.100, 0,       0, 0.224],
      ['減債基金',                    0.0480,   0,    0,     0, 0.0480],
      ['森林環境譲与税基金',            0,   0,   0,    0,  0],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      legend: {
        position: 'in',
        alignment: 'end',
        textStyle: {
          fontSize: 13
        }
      },
      title: '基金残高・金額順（億円）[続き]',
      titleTextStyle: {
          fontSize: 18
      },
      pieSliceText: "value",
      chartArea:{top:30,height:'75%'},
      isStacked: true,
      hAxis: {
        slantedTextAngle: 60,
        maxTextLines: 3,
        textStyle: {
          fontSize: 11
        }
      },
      annotations: {
        textStyle: {fontSize: 10 },
      },
      series: {
        3: {
            annotations: {
              format: '#.##億円',
              textStyle: {
                color: 'black',
                fontName: 'UD デジタル 教科書体 N-R',
                fontSize: 14,
              },
            },
            color: "white",
            visibleInLegend: false
        }
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 1.2
        },
        format: '#.##億円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      hAxis: {
        textStyle: {
          color: 'black',
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 11,
        },
      },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('kikin2'));
    chart.draw(data, options);
  }
</script>


{{#include ../partials/yasutake-speak.md:1}} 特に目立った動きはありません。予算に対して4月分の執行分が少ないのは例年の傾向と思われます。