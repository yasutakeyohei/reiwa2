# 議案第41号 小平市立学童クラブ条例の一部を改正する条例

<i class="fa fa-gavel" aria-hidden="true"></i> 厚生委員会付託

<fieldset class="point">
  <legend>
    <h2 class="point"> ポイント </h2>
  </legend>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 八小と十二小の学童クラブが増設される</p>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 条例に新規学童クラブの情報を追加し、既存学童クラブの名称を変更する</p>
</fieldset>

<fieldset class="sanpi">
  <legend>
    <h2 class="sanpi"> <!--<i class="fa fa-circle-o" aria-hidden="true"></i>--><i class="fa fa-question-circle hitori" aria-hidden="true"></i> 私（安竹洋平）の判断：賛成 </h2>
  </legend>
  <p class="sanpi"><i class="fa fa-question-circle hitori" aria-hidden="true"></i> 名称の追加・変更であり、特に問題なし</p>
</fieldset>

## 概要
{{#include ../partials/yasutake-speak.md}} 小平市立八小学童クラブ及び小平市立十二小学童クラブの入会児童数の増加に対応するため、新たな学童クラブを開設します。それに伴い、小平市立学童クラブ条例にそれら建物に関する情報を追加し、もともとあった学童クラブの名称を『～小学童クラブ第一』に変更するという改正です。

**新設する学童クラブ**
<table style="margin:0">
    <thead>
        <tr>
            <td>名称</td>
            <td>定員（人）</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>八小学童クラブ第二</td>
            <td>60</td>
        </tr>
        <tr>
            <td>八小学童クラブ第三</td>
            <td>60</td>
        </tr>
        <tr>
            <td>十二小学童クラブ第二</td>
            <td>40</td>
        </tr>
        <tr>
            <td>十二小学童クラブ第三</td>
            <td>40</td>
        </tr>
    </tbody>
</table>

同時に既存の名称を以下のように変更する。
- 八小学童クラブ → 八小学童クラブ 第一
- 十二小学童クラブ → 十二小学童クラブ 第一

<table class="additional">
  <tr>
    <td colspan=2>施行期日等</td>
  </tr>
  <tr>
    <td>該当条項</td>
    <td><a href="https://www.city.kodaira.tokyo.jp/reiki/reiki_honbun/g135RG00000206.html#e000000194">小平市立学童クラブ条例 別表第1（第2条関係）</a></td>
  </tr>
  <tr>
    <td>施行期日</td>
    <td>令和3年4月1日<br>ただし以下の事項は令和3年4月1日前においても行える。<br>・学童クラブ入会のため市長の承認を受けること<br>・学童クラブ利用のため、指定管理者の承認を受けること</td>
  </tr>
</table>

## 主な質疑
{{#include ../partials/situgi_hanrei.md}}

### ＠ 6月2日 本会議

<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
なぜ今回一気に大人数の学童クラブ2つ分（八小：合計120人分、十二小：合計80人分）を作らなければならなかったのか。（橋本 久雄）
</td></tr></table>

> 入会率も高まっている。八小は周辺の就学前児童数が増えてきた。減っている学童クラブも一部あるものの、前回と比べて今回全体で入会が129名増えている。それに対応したもの。（伊藤 子ども家庭部長）

{{#include ../partials/yasutake-speak.md}} 上記二つの小学校について、学童クラブの入会児童数と定員をグラフで示すと以下のようになります。これまでは入会児童数と定員数の乖離が大きく、実質的に待機児童がいるような状況でした。今回の増設で、この二つの学童クラブに関しては一定の余裕ができることになります。

<div id="hassyo-jidosu" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', '年度');
    data.addColumn('number', '入会児童数');
    data.addColumn({type:'number', role:'annotation'})
    data.addColumn('number', '定員数');
    data.addRows([
        ['0',         null, 0, 40],
        ['平成30年度', 90,   90, null],
        ['令和元年度', 128,  128, null],
        ['令和2年度',  141,  141, 40],
        ['令和3年度', null, 0, 160],
    ]);
    var options = {
      displayAnnotations: true,
      fontName: "UD デジタル 教科書体 N-R",
      hAxis: {
        viewWindow: {
          min: 1,
          max: 5
        }
      },
      vAxis: {
        title: "人数",
        viewWindow: {
          min: 0,
          max: 200
        }
      },
      isStacked: true,
      interpolateNulls: true,
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
        textStyle: {
          fontSize: 16
        }
      },
      seriesType: 'bars',
      series: {
        1: { type: 'line' }
      },
      title: '八小学童クラブ入会児童数推移',
      titleTextStyle: {
          fontSize: 18
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('hassyo-jidosu'));
    chart.draw(data, options);
  }
</script>


<div id="junisyo-jidosu" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', '年度');
    data.addColumn('number', '入会児童数');
    data.addColumn({type:'number', role:'annotation'})
    data.addColumn('number', '定員数');
    data.addRows([
        ['0',         null, 0,   40],
        ['平成30年度', 96,   96,  null],
        ['令和元年度', 94,   94,  null],
        ['令和2年度',  117,  117, 40],
        ['令和3年度',  null, 0,   120],
    ]);
    var options = {
      displayAnnotations: true,
      fontName: "UD デジタル 教科書体 N-R",
      hAxis: {
        viewWindow: {
          min: 1,
          max: 5
        }
      },
      vAxis: {
        title: "人数",
        viewWindow: {
          min: 0,
          max: 200
        }
      },
      isStacked: true,
      interpolateNulls: true,
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
        textStyle: {
          fontSize: 16
        }
      },
      seriesType: 'bars',
      series: {
        0: { color: 'orange' },
        1: { type: 'line' }
      },
      title: '十二小学童クラブ入会児童数推移',
      titleTextStyle: {
          fontSize: 18
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('junisyo-jidosu'));
    chart.draw(data, options);
  }
</script>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
完成までの対応は。どこで受け入れるか。（橋本 久雄）
</td></tr></table>

> 他のクラブと同様に、学校施設内で余裕教室を借りて運営する。（伊藤 子ども家庭部長）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
大方針としては待機がいる限り作っていくということか。5年後10年後どれくらい増えると推計して今回の増設になっているか。（伊藤 央）
</td></tr></table>

> 学童クラブの全体計画として、今年3月に『[第2期こども子育て支援事業計画](https://www.city.kodaira.tokyo.jp/kurashi/080/080735.html)』を策定している。その中で、ニーズ調査を踏まえ、令和2年度～6年度までの見込みを出している。爆発的に増えることはないものの、入会率が高まっており、学童クラブの確保方策として考えているのは、令和2年度で36か所であるのを、令和6年度で45か所まで増やすことは必要と見込んでいる。小平市の最優先課題として、小学校1～3年生は待機児童を出さないということに取り組んでいる。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
民間の学童クラブをどのように捉えているか。民設民営には統一的な見解はないということでよいか。（伊藤 央）
</td></tr></table>

> 学童クラブに入りたい子はまず公設で見ていく。習い事や塾のようなことをして欲しいという保護者からの要望や、学区域にかかわらず通勤経路上で預けたいなど、様々な要望がある。それらに答えられる民設の学童クラブについては、保護者ご自身の考えで選んで頂きたい。多様なニーズに応えることは市の大切な政策。民間の学童クラブが追加されて、全体の待機児童の数がどうなるかは、やってみないと分からない。（伊藤 子ども家庭部長）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
小平市では学童と保育所の再現のない増設が財政を逼迫させているという認識、財政面から考えて市の学童、保育所含めて保育の方向性はどうか。（伊藤 央）
</td></tr></table>

> 保育の需要が大きくなり、財政に影響を与えていることは認識している。社会情勢として、働いている方々のニーズには応える必要がある。財源を活用したり、少子化の流れも踏まえながら、保育をどう提供するか考えていく。（伊藤 子ども家庭部長）

### ＠ 6月11日 厚生委員会
{{#include ../partials/yasutake-speak.md}} 厚生委員会には、一人会派の会からは、私（安竹洋平）が委員として参加しています。