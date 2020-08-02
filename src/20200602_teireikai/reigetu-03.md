# 例月現金出納検査（令和2年3月）

{{#include ../partials/yasutake-speak.md:1}} 令和2年2月分、3月分の現金収支、現金保管の状況についての検査結果報告。いずれも誤りがないとの結論でした。3月末時点の検査結果をグラフにしてみました。

<div id="syushi" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['', '予算', '収入累計', '支出累計'],
      ['一般会計', 677.8, 654.2, 604.8],
      ['国保特会', 172.2, 164.6, 161.9],
      ['後期特会',  43.50,  43.33,  42.99],
      ['介護特会', 138.1, 128.8, 124.1],
      ['下水道', 0, 41.91, 37.30],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 18,
      chart: {
        title: '令和元年度3月分収支累計（令和2年3月末時点）',
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
      ['一般会計',    49.2,   49.2],
      ['国保特別会計', 2.66,   2.66],
      ['後期特別会計', 0.543, 0.543],
      ['介護特別会計', 4.69,   4.69],
      ['下水道会計',   4.61,   4.61],
      ['土地開発基金',   0.700,   0.700],
      ['歳入歳出外現金',   1.27,   1.27],
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
      title: '保管金（すべて普通預金・令和2年3月末時点）',
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
      ['項目', '普通預金', '自由金利型（大口）定期', '地方債', 'total', { role: 'annotation' }],
      ['財政調整基金',               29.0,    0,      0,   0, 29.0],
      ['公共施設整備基金',            17.2, 3.00,  0.400,   0, 20.6],
      ['職員退職手当基金',            3.40, 3.00,  0.100,   0, 6.50],
      ['文化振興基金',               0.124, 0.100, 0,       0, 0.224],
      ['緑化基金',                   0.185, 0.700, 0,       0, 0.885],
      ['国際平和友好交流基金',        0.443, 0.600, 0,       0, 1.04],
      ['ごみ減量・リサイクル推進基金',  1.47,  2.00, 0,       0, 3.47],
      ['育英基金',                    0.0724, 0.300, 0,      0, 0.372],
      ['職員研修基金',                0.128,  0.200, 0,      0, 0.328],
      ['国民健康保険事業運営基金',     2.32,  1.70, 0,        0, 4.02],
      ['都市計画事業基金',            41.9,  5.00, 0.500,    0, 47.4],
      ['介護給付費等準備基金',         8.37,  3.00,    0,     0, 11.4],
      ['減債基金',                    0.0480,   0,    0,     0, 0.0480],
      ['健康福祉基金',                 0.244,   0.400, 0,    0, 0.604],
      ['下水道事業基金',               11.1,   5.00,   0,    0, 1.607],
      ['東京オリパラ子ども夢・未来基金', 0.528,   0,   0,    0,  0.528],
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
      title: '基金残高（億円）',
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
      ['財政調整基金',               29.0,    0,      0,   0, 29.0],
      ['公共施設整備基金',            17.2, 3.00,  0.400,   0, 20.6],
      ['職員退職手当基金',            3.40, 3.00,  0.100,   0, 6.50],
      ['文化振興基金',               0.124, 0.100, 0,       0, 0.224],
      ['緑化基金',                   0.185, 0.700, 0,       0, 0.885],
      ['国際平和友好交流基金',        0.443, 0.600, 0,       0, 1.04],
      ['ごみ減量・リサイクル推進基金',  1.47,  2.00, 0,       0, 3.47],
      ['育英基金',                    0.0724, 0.300, 0,      0, 0.372],
      ['職員研修基金',                0.128,  0.200, 0,      0, 0.328],
      ['国民健康保険事業運営基金',     2.32,  1.70, 0,        0, 4.02],
      ['都市計画事業基金',            41.9,  5.00, 0.500,    0, 47.4],
      ['介護給付費等準備基金',         8.37,  3.00,    0,     0, 11.4],
      ['減債基金',                    0.0480,   0,    0,     0, 0.0480],
      ['健康福祉基金',                 0.204,   0.400, 0,    0, 0.604],
      ['下水道事業基金',               11.1,   5.00,   0,    0, 1.607],
      ['東京オリパラ子ども夢・未来基金', 0.528,   0,   0,    0,  0.528],
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
      title: '基金残高・拡大（億円）',
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
          max: 4
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


{{#include ../partials/yasutake-speak.md:1}} パッと見たところ、ごみ減量・リサイクル推進基金が2億円、国際平和友好交流基金が8千万円、それぞれ定期預金に預けている理由が知りたいですね。