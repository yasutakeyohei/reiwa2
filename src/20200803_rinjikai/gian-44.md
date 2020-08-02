# 議案第44号 令和2年度小平市一般会計補正予算（第4号）

<i class="fa fa-gavel" aria-hidden="true"></i> 総務委員会付託

<fieldset class="point">
  <legend>
    <h2 class="point"> ポイント </h2>
  </legend>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> マイナンバー通知カード廃止に伴い、再交付時に500円を徴収する条例別表上の記述削除</p>
</fieldset>

<fieldset class="sanpi">
  <legend>
    <h2 class="sanpi"> <i class="fa fa-circle-o" aria-hidden="true"></i> 私（安竹洋平）の判断：賛成 </h2>
  </legend>
  <p class="sanpi"><i class="fa fa-circle-o" aria-hidden="true"></i> 通知カード廃止には懸念があるが、今回はそのこととは直接関係がなく、特に問題がない</p>
</fieldset>

## 概要


## 解説
{{#include ../partials/yasutake-speak.md:1}} 

### 歳入と歳出について

<div id="sainyu-hosei-summary" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '億円', { role: 'annotation' }],
      ['国庫支出金\n国庫負担金',    0.508,   0.508],
      ['国庫支出金\n国庫補助金',    12.1,   12.1],
      ['都支出金\n都補助金', 1.69,   1.69],
      ['寄附金', 0.016, 0.016],
      ['基金繰入金', 0.500,   0.500],
      ['市債',   1.33,   1.33],
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

市債（1億3,310万円）の内訳：  
［小学校債］：GIGAスクール環境整備（小学校）：9,320万円  
［中学校債］：GIGAスクール環境整備（中学校）：3,990万円  

<div id="saisyutu-zaigen-summary" style="width:100%;height: 600px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '国庫支出金', '都支出金', '地方債', 'その他', '一般財源', 'total', { role: 'annotation' }],
      ['総務費', 3.73,  0.0858,  0,    0,       0.00190, 0,   3.82],
      ['民生費', 0.813, 1.10,    0,    0,       0.174,   0,   2.09],
      ['衛生費', 2.51,  0.00486, 0,    0,       0.0118,  0,   2.53],
      ['商工費', 0.189, 0,       0,    0.0108,  0,       0,  0.200],
      ['土木費', 0.894, 0,       0,    0,       0,       0,  0.894],
      ['教育費', 4.44,  0.494,   1.33, 0.00520, 0.247,   0,   6.52],
      ['予備費', 0,     2.00,    0,    0,       0.0647,  0, 0.0647],
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


<div id="kurikosi-meikyo-summary" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '億円', { role: 'annotation' }],
      ['総務費', 1.88,   1.88],
      ['民生費', 0,      0],
      ['衛生費', 0.342,  0.342],
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

### 総務費内訳

総務費は全額が「総務管理費」でした。

<div id="soumu-hi-uchiwake" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['一般管理費',         1.24,   1.24],
      ['情報システム運営費',   0.967, 0.967],
      ['安全安心まちづくり費', 0.554, 0.554],
      ['地域振興費',          0.236, 0.236],
      ['市民文化会館費',      0.626,  0.626],
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
      ['障害者福祉施設管理費', 0.0915, 0.0915],
      ['障害者自立支援給付費', 0.0110, 0.0110],
      ['児童福祉総務費',      0.311, 0.311],
      ['保育所運営費',      0.405,  0.405],
      ['児童福祉施設管理費', 0.0644, 0.0644],
      ['児童助成費', 0.2160, 0.2160],
      ['学童クラブ費', 0.300, 0.300],
      ['児童館運営費', 0.0150, 0.0150],
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


<div id="kyouiku-hi-uchiwake" style="width:100%;height: 350px;margin-top:100px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['教育指導費',      0.0840,   0.0840],
      ['小学校費：学校管理費',      4.18,   4.18],
      ['小学校費：学校保険体育費',      0.0780,   0.0780],
      ['中学校費：学校管理費',      1.84,   1.84],
      ['中学校費：学校保険体育費',      0.056,   0.056],
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


<div id="saisyutu-detail"></div>
<script type="text/javascript">
const grid = new gridjs.Grid({
  columns: [
      '款',
      '項',
      '目',
      {
        name: '内容',
        formatter: (cell) => gridjs.html(cell),
        width:'50%'
      },
      {
        name: gridjs.html('金額<br>（千円）')
      }
   ],
   data: [
    ["総務", "総務管理費", "一般管理費", "修繕費", 2420],
    ["総務", "総務管理費", "一般管理費", "庁舎エレベーター改修工事", 121522],
    ["総務", "総務管理費", "一般管理費", "非接触型温度計", 55],
    ["総務", "総務管理費", "情シス運営費", "通信運搬費", 399],
    ["総務", "総務管理費", "情シス運営費", "新住民情報システム・コンビニ交付構築分<br>公共施設予約システム再構築<br>都市計画・建築行政・道路管理情報提供システム構築", 93359],
    ["総務", "総務管理費", "情シス運営費", "Web会議システムサービス使用料", 144],
    ["総務", "総務管理費", "情シス運営費", "公共施設予約システム用端末・プリンタ", 2843],
    ["総務", "総務管理費", "安全安心まちづくり費", "非常用可搬型親局装置", 7590],
    ["総務", "総務管理費", "安全安心まちづくり費", "消耗品費", 30441],
    ["総務", "総務管理費", "安全安心まちづくり費", "災害時テント<br>応急給水等資機材倉庫<br>災害時用ベッド<br>避難所用発電機", 16222],
    ["総務", "総務管理費", "地域振興費", "自動通話録音機", 1166],
    ["総務", "総務管理費", "地域振興費", "地域センター 修繕費", 8616],
    ["総務", "総務管理費", "地域振興費", "地域センター 空調設備", 10107],
    ["総務", "総務管理費", "地域振興費", "元気村 修繕費", 1960],
    ["総務", "総務管理費", "地域振興費", "元気村 空調設備", 2374],
    ["総務", "総務管理費", "地域振興費", "平櫛田中館 除菌消臭器", 515],
    ["総務", "総務管理費", "市民文化会館費", "ルネ小平 維持管理委託", 4798],
    ["総務", "総務管理費", "市民文化会館費", "ルネ小平 自動ドア設計業務委託", 1452],
    ["総務", "総務管理費", "市民文化会館費", "ルネ小平 空調設備改良改修工事<br>ルネ小平 自動ドア設置工事", 56356],
    ["総務", "総務管理費", "諸費", "多摩六都科学館 事業継続支援", 11819],
  ],
  sort: true,
  pagination: true,
  fixedHeader: true,
}).render(document.getElementById("saisyutu-detail"));;
</script>

## 主な質疑
{{#include ../partials/situgi_hanrei.md}}

### ＠ 6月9日 総務委員会
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

