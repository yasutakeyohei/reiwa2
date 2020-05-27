# 議案第17号 令和2年度小平市一般会計補正予算（第2号）（総務委員会付託）

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
新型コロナウイルス感染症が拡大する中、市内の事業活動や市民生活を守るために、国や東京都の補正予算等を最大限
活用し、市としての緊急対策に取り組むとともに、小・中学校におけるGIGAスクール構想の実施や、当初予算編成後に新たに実施することとなった事業に関する経費等を計上するもの。

歳出歳入それぞれ17億870万9千円を増額。財源は国と都、財政調整基金からの繰入金で対応。

## 主な内訳

<div id="myChart" style="width:100%;height: 350px;"></div>

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
        maxLines: 3,
        textStyle: {
          fontSize: 16
        }
      },
      title: '歳入補正額',
      titleTextStyle: {
          fontSize: 18
      },
      pieSliceText: "value",
      chartArea:{top:30,height:'85%'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('myChart'));
    chart.draw(data, options);
  }
</script>

<script type="text/javascript">
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['国庫負担金', '国庫補助金', '都補助金', '基金繰入金', '雑入'],
    datasets: [{
      data: [39784, 1025547, 507098, 90000, 46280]
    }]
  },
  // Configuration options go here
  options: {}
});
</script>

### 歳入

