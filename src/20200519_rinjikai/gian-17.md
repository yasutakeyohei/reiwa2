# 議案第17号 令和2年度小平市一般会計補正予算（第2号）

<i class="fa fa-gavel" aria-hidden="true"></i> 総務委員会付託

<fieldset class="point">
  <legend>
    <h2 class="point"> ポイント </h2>
  </legend>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 特別定額給付金と給付にかかる事務費用のみに関する補正予算</p>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> （給付金10万円ｘ19万6000人）＋（事務費用2億円）＝約198億円、すべて国庫から</p>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 事務処理等委託 約1.5億円、情シス改修 約3,700万円、コールセンター委託 約1,800万円</p>
</fieldset>

<fieldset class="sanpi">
  <legend>
    <h2 class="sanpi"> <i class="fa fa-circle-o" aria-hidden="true"></i> 私（安竹洋平）の判断：賛成 </h2>
  </legend>
  <p class="sanpi"><i class="fa fa-circle-o" aria-hidden="true"></i> 以下の問題はあるものの、急を要することでもあり、反対するほどではなく賛成</p>
  <p class="sanpi"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 緊急事態宣言が再実施されるケースも想定した内容になっているか不明</p>
  <p class="sanpi"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 専決処分にしたことで給付が早まったのかが不明瞭</p>
</fieldset>

## 概要
新型コロナウイルス感染症が拡大する中、市内の事業活動や市民生活を守るために、国や東京都の補正予算等を最大限活用し、市としての緊急対策に取り組むとともに、小・中学校におけるGIGAスクール構想の実施や、当初予算編成後に新たに実施することとなった事業に関する経費等を計上するもの。

歳出歳入それぞれ17億870万9千円を増額。財源は国と都、財政調整基金からの繰入金で対応。[詳細は配布資料を参照。](20200519_令和2年5月小平市議会臨時会資料.pdf)

## 主な内訳

<div id="sainyu" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '金額（千円）', { role: 'annotation' }],
      ['国庫負担金', 39784, 39784],
      ['国庫補助金', 1025547, 1025547],
      ['都補助金', 507098, 507098],
      ['基金繰入金', 90000, 90000],
      ['雑入', 46280, 46280]
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
        textStyle: {
          fontSize: 16
        }
      },
      title: '歳入予算補正額',
      titleTextStyle: {
          fontSize: 18
      },
      pieSliceText: "value",
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('sainyu'));
    chart.draw(data, options);
  }
</script>


<div id="saisyutu1" style="width:100%;height: 600px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '国庫支出金', '都支出金', 'その他', '一般財源', 'total', { role: 'annotation' }],
      ['小平市中小企業等支援給付金', 306177, 157571, 0, 36252, 0, 500000],
      ['小学生用タブレット', 300000, 200000, 0, 0, 0, 500000],
      ['子育て世帯への臨時特別給付金', 227459, 0, 0, -2899, 0, 224560],
      ['中学生用タブレット', 120000, 80000, 0, 0, 0, 200000],
      ['住居確保給付金等', 39784, 0, 0, 13262, 0, 53046],
      ['小学校給食費補償金', 0, 0, 35795,　9836, 0, 45631],
      ['介護事業所業務継続支援', 40000, 0, 0, 0, 0, 40000],
      ['育児パッケージ', 0, 23030, 0, 0, 0, 23030],
      ['家庭学習用モバイルルーター等', 0, 19000, 0, 500, 0, 19500],
      ['ルネ小平運営事業', 0, 0, 0, 19385, 0, 19385],
      ['情報システム管理・運営', 19328, 0, 0, 0, 0, 19328],
      ['都市農地保全支援', 0, 16060, 0, 3212, 0, 19272],
      ['中学校給食費補償金', 0, 0, 10185, 678, 0, 10863],
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
      title: '歳出予算補正額（金額順・千円）',
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
        4: {
            annotations: {
              textStyle: {color: 'black' },
            },
            color: "white",
            visibleInLegend: false
        }
      },
      vAxis: {
        viewWindow: {
          min: -3000,
          max: 550000
        }
      }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('saisyutu1'));
    chart.draw(data, options);
  }
</script>
