# 議案第44号 令和2年度小平市一般会計補正予算（第4号）

<i class="fa fa-gavel" aria-hidden="true"></i> 総務委員会付託

<fieldset class="point">
  <legend>
    <h2 class="point"> ポイント </h2>
  </legend>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 総額約16億円＝国から12億＋都から2億＋小平市（市債1億5千万＋一般財源5千万円）</p>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> GIGAスクール構想実現のために約5億1千万円</p>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> エレベーター改修に約1.8億円、自動ドア設置に5.8千万円と、不要不急の費用が大きい</p>
</fieldset>

<fieldset class="sanpi">
  <legend>
    <h2 class="sanpi"> <i class="fa fa-circle-o" aria-hidden="true"></i> 私（安竹洋平）の判断：反対 </h2>
  </legend>
  <p class="sanpi"><i class="fa fa-circle-o" aria-hidden="true"></i> 不要な事業に巨額を投じており、機会を無駄にしている</p>
  <p class="sanpi"><i class="fa fa-circle-o" aria-hidden="true"></i> 職員に責任を押し付ける、市長の不作為によるものと判断</p>
</fieldset>

## 概要


## 解説


### ふらっとビュー ver 0.1
会計書類を見やすくするため、ふらっとビューをつくりました！

歳出の詳細が確認できます。

『款・項・目でまとめない』ボタンを押すと、費目一覧を表示できます。

金額の単位は、市の報告資料と同じ「千円」です。

<div id="grid-container">
  <div class="grid-header" id="grid-header-div" style="width:100%">
    <label>令和2年8月補正予算詳細</label>
    <button id="grouping">款・項・目でまとめない</button>
    <button id="fullscreen">フルスクリーンで表示する</button>
  </div>
  <div id="saisyutu-detail"></div>
</div>

<!-- slickgridはレガシーなのでwebpackなど使えず。 -->
<link rel="stylesheet" href="../css-each/slick.grid.css" type="text/css"/>
<link rel="stylesheet" href="../css-each/jquery-ui.css" type="text/css"/>
<link rel="stylesheet" href="../css-each/slick.pager.css" type="text/css"/>
<link rel="stylesheet" href="../css-each/examples.css" type="text/css"/>
<script src="../js-each/lib/jquery-1.12.4.min.js"></script>
<script src="../js-each/lib/jquery-ui.min.js"></script>

<script src="../js-each/lib/jquery.event.drag-2.3.0.js"></script>
<script src="../js-each/lib/slick.core.js"></script>
<script src="../js-each/lib/slick.formatters.js"></script>
<script src="../js-each/lib/slick.grid.js"></script>
<script src="../js-each/lib/slick.dataview.js"></script>
<script src="../js-each/lib/slick.pager.js"></script>
<script src="../js-each/lib/slick.resizer.js"></script>
<script src="../js-each/lib/slick.groupitemmetadataprovider.js"></script>
<script src="../js-each/lib/slick.autotooltips.js"></script>
<script src="../js-each/lib/slick.cellrangedecorator.js"></script>
<script src="../js-each/lib/slick.cellrangeselector.js"></script>
<script src="../js-each/lib/slick.cellselectionmodel.js"></script>
<script src="../js-each/lib/slick.cellexternalcopymanager.js"></script>
<script src="../js-each/lib/jquery.ui.touch-punch.min.js"></script>
<script src="../js-each/slickgrid-src.js"></script>

### 細かく見る

<div id="sainyu-hosei-summary" style="width:100%;height: 350px; margin-top:50px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '億円', { role: 'annotation' }],
      ['国庫支出金\n国庫補助金',    12.1,   12.1],
      ['都支出金\n都補助金', 1.69,   1.69],
      ['市債',   1.33,   1.33],
      ['国庫支出金\n国庫負担金',    0.508,   0.508],
      ['基金繰入金', 0.500,   0.500],
      ['寄附金', 0.016, 0.016],
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
      title: '歳入補正額',
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
        viewWindow: {
          min: 0,
          max: 14
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('sainyu-hosei-summary'));
    chart.draw(data, options);
  }
</script>

今回は市債を1億3,310万円計上しています。全額GIGAスクールの環境整備に使われます。  
［小学校債］：GIGAスクール環境整備（小学校）：9,320万円  
［中学校債］：GIGAスクール環境整備（中学校）：3,990万円  

<img src="./sisai-detail.png" alt="GIGAスクール構想整備費用詳細" data-zoomable="">

<div id="saisyutu-zaigen-summary" style="width:100%;height: 600px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '国庫支出金', '都支出金', '地方債', 'その他', '一般財源', 'total', { role: 'annotation' }],
      ['教育費', 4.44,  0.494,   1.33, 0.00520, 0.247,   0,   6.52],
      ['総務費', 3.73,  0.0858,  0,    0,       0.00190, 0,   3.82],
      ['衛生費', 2.51,  0.00486, 0,    0,       0.0118,  0,   2.53],
      ['民生費', 0.813, 1.10,    0,    0,       0.174,   0,   2.09],
      ['予備費', 0,     2.00,    0,    0,       0.0647,  0, 0.0647],
      ['土木費', 0.894, 0,       0,    0,       0,       0,  0.894],
      ['商工費', 0.189, 0,       0,    0.0108,  0,       0,  0.200],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      legend: {
        position: 'out',
        alignment: 'end',
      },
      title: '歳出補正額＆財源内訳（億円）',
      titleTextStyle: {
          fontSize: 18
      },
      pieSliceText: "value",
      chartArea:{top:30,height:'75%'},
      isStacked: true,
      hAxis: {
        slantedTextAngle: 60,
        maxTextLines: 3,
      },
      series: {
        5: {
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
        },
      },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('saisyutu-zaigen-summary'));
    chart.draw(data, options);
  }
</script>

今回最も高額なのは教育費の約6億5千万円で、そのうち約5億円が、上記したようにGIGAスクール構想実現のための経費です。市の一般財源から

<div id="kurikosi-meikyo-summary" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '億円', { role: 'annotation' }],
      ['総務費', 1.88,   1.88],
      ['衛生費', 0.342,  0.342],
      ['民生費', 0,      0],
      ['商工費', 0,      0],
      ['土木費', 0,      0],
      ['教育費', 0,      0],
      ['予備費', 0,      0],
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
      title: '歳出のうち繰越明許費（年度内の完了が見込めない分）',
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
        viewWindow: {
          min: 0,
          max: 8
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('kurikosi-meikyo-summary'));
    chart.draw(data, options);
  }
</script>

### それぞれの費用内訳

<div id="kyouiku-hi-uchiwake" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['小学校費：学校管理費',     4.18,   4.18],
      ['中学校費：学校管理費',     1.84,   1.84],
      ['教育指導費',              0.0840, 0.0840],
      ['小学校費：学校保険体育費', 0.0780, 0.0780],
      ['中学校費：学校保険体育費', 0.056,  0.056],
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
      title: '教育費内訳',
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
        format: '#.##千万円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('kyouiku-hi-uchiwake'));
    chart.draw(data, options);
  }
</script>

<div id="soumu-hi-uchiwake" style="width:100%;height: 350px;margin-top:30px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['一般管理費',         1.24,   1.24],
      ['情報システム運営費',   0.967, 0.967],
      ['市民文化会館費',      0.626,  0.626],
      ['安全安心まちづくり費', 0.554, 0.554],
      ['地域振興費',          0.236, 0.236],
      ['諸費',               0.0198, 0.0198],
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
      title: '総務管理費内訳',
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
        format: '#.##千万円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('soumu-hi-uchiwake'));
    chart.draw(data, options);
  }
</script>


<div id="minsei-hi-uchiwake" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['社会福祉総務費',      0.677,   0.677],
      ['保育所運営費',      0.405,  0.405],
      ['児童福祉総務費',      0.311, 0.311],
      ['学童クラブ費', 0.300, 0.300],
      ['児童助成費', 0.2160, 0.2160],
      ['障害者福祉施設管理費', 0.0915, 0.0915],
      ['児童福祉施設管理費', 0.0644, 0.0644],
      ['児童館運営費', 0.0150, 0.0150],
      ['障害者自立支援給付費', 0.0110, 0.0110],
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
      title: '民生費内訳',
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
        format: '#.##千万円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('minsei-hi-uchiwake'));
    chart.draw(data, options);
  }
</script>


<div id="eisei-hi-uchiwake" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['保険衛生総務費',      2.38,   2.38],
      ['保健衛生指導費', 0.0966, 0.0966],
      ['清掃総務費', 0.0148, 0.0148],
      ['塵芥処理費',  0.0342, 0.342],
      ['循環資源推進費',      0.00363,  0.00363],
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
      title: '衛生費内訳',
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
        format: '#.##千万円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('eisei-hi-uchiwake'));
    chart.draw(data, options);
  }
</script>



<div id="syoukou-hi-uchiwake" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['商工振興費',      0.200,   0.200],
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
      title: '商工費内訳',
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
        format: '#.##千万円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('syoukou-hi-uchiwake'));
    chart.draw(data, options);
  }
</script>


<div id="doboku-hi-uchiwake" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['都市計画総務費',      0.571,   0.571],
      ['公園緑地費',      0.323,   0.323],
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
      title: '土木費内訳',
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
        format: '#.##千万円',
        textStyle: {
          fontName: 'UD デジタル 教科書体 N-R',
          fontSize: 18,
        },
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('doboku-hi-uchiwake'));
    chart.draw(data, options);
  }
</script>





## 主な質疑
{{#include ../partials/situgi_hanrei.md}}

### ＠ 本会議


### ＠ 総務委員会
{{#include ../partials/yasutake-speak.md:1}} 総務委員会には、一人会派の会から橋本久雄議員が委員として参加しています。

<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
通知カードなど作らなければ良かったのに。あなたはマイナンバーカード取得できると、その1枚だけで済んだのではと思う。（通知カードをなくす背景は）。（橋本 久雄）
</td></tr></table>

> 通知カードは、平成27年10月のマイナンバー制度施行時に、全国の住民にマイナンバーを通知するものとして送付した。国がデジタル手続法を進め、社会のデジタル化を進める観点から、紙製の通知カードではなく、公的個人認証が搭載されたマイナンバーカードへの移行を促進したいということで通知カードの発行をやめることにした。ただし、今後、生まれた方、海外から転入した方については、通知カードではなく個人番号をの案内通知書を送ることになった。これは証明書の効力はない。（山本 市民課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
これまで再交付はどれくらいあったか。
</td></tr></table>

> 令和元年度は集計中だが800件。平成30年度は1,202件あった。（山本）

<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
通知カードをなくしている場合、どうすれば良いか。
</td></tr></table>

> マイナンバーの記載されている住民票の写しをお取りいただく。（山本）

