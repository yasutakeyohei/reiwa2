# 議案第47号 令和2年度小平市一般会計補正予算（第5号）
（作成中）

<i class="fa fa-gavel" aria-hidden="true"></i> 総務委員会付託

<!--

<fieldset class="point">
  <legend>
    <h2 class="point"> ポイント </h2>
  </legend>
  <p class="point">✔ 総額約億円 ＝ 国億 ＋ 都億 ＋ 小平市 ( 市債億 ＋ 一般財源億円 )</p>
  <p class="point">✔ </p>
  <p class="point">✔ </p>
  <p class="point">✔ </p>
  <p class="point">✔ </p>
  <p class="point">✔ </p>
  <p class="point">✔ </p>
</fieldset>

<fieldset class="sanpi">
  <legend>
    <h2 class="sanpi">❌⭕️ 私（安竹洋平）の判断： </h2>
  </legend>
  <p class="sanpi NG">❌ </p>
  <p class="sanpi OK">⭕️ </p>
</fieldset>

## 目次
- [概要](#概要)
- [解説](#解説)
  - [補正予算を分析する](#補正予算を分析する)
    - [👁️‍🗨️ふらっとビューア予算歳出 ver 1.0](#ふらっとビューア予算歳出-ver-10)
    - [ふらっとビューアで予算詳細を見る](#ふらっとビューアで予算詳細を見る)
    - [それぞれの費用内訳](#それぞれの費用内訳)
      - [教育費](#教育費)、[総務費](#総務費)、[民生費](#民生費)、[衛生費](#衛生費)、[商工費](#商工費)、[土木費](#土木費)
- [主な質疑（発言順）](#主な質疑発言順)
  - [＠ 本会議](#-本会議)
  - [＠ 総務委員会](#-総務委員会)
    - [総務委員会での賛否](#総務委員会での賛否)
- [本会議でのやり取り](#本会議でのやり取り)
  - [原案に対する討論](#原案に対する討論)
  - [原案に対する賛否](#原案に対する賛否)

## 概要

-->

<details>
<summary>市長報告（クリックで開きます）</summary>

> 今回の補正予算は、昨年度の決済をもとに、繰越金、及び返還金の整理等を行うとともに、歳入においては、普通交付税、及び臨時財政対策債が当初の見込みを上回りましたので増額いたします。
>
>また、これに伴い確保される財源を活用し、市の喫緊の課題である保育園待機児童の解消などに取り組むほか、基金積立金を増額し､財政基盤の安定化を図るものです。
>
>歳出の主な内容ですが、待機児童の解消に向けまして、来年度に新規開設する私立保育園1園の建築補助を行うほか、3歳未満の多胎児がいる家庭への移動支援として、子ども商品券を配付いたします。
>
>また、定期巡回・随時対応型訪問介護看護、認知症高齢者グループホーム、小規模多機能型居宅介護の施設整備等にかかる補助金を増額するほか、用水路、道路、及び公園などの維持管理費を増額するとともに、新小平駅前公衆喫煙所の移設工事などを行います。
>
>そのほか、昨年度の都市計画税の余剰分を都市計画事業基金に積み立てるとともに、繰越金の増に伴い財政調整基金の積立額を増額し、歳入においては、財政調整基金繰入金を減額いたします。
>
>補正予算の規模といたしましては、歳入歳出それぞれ17億7千796万6千円を増額し、歳入歳出予算の総額をそれぞれ942億5千434万5千円とするものです。
>
>財源構成といたしましては、事業の実施に伴い、国、都支出金、及び地方債を補正するとともに、繰越金、普通交付税、及び臨時財政対策債、特別会計繰入金を増額いたします。

</details>


## 解説

### 🕵補正予算を分析する


まず歳入です。金額順に並べると以下のようになります。最も大きいのは前年度の繰越金で、前年度の繰入金確定によるものです。

<div id="sainyu-hosei-summary" style="width:100%;height: 350px; margin-top:50px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '億円', { role: 'annotation' }],
      ['繰越金', 11.3,   11.3],
      ['地方\n交付税',    3.91,   3.91],
      ['市債',   2.30,   2.30],
      ['国庫\n支出金',    2.05,   2.05],
      ['都\n支出金', 0.221,   0.221],
      ['諸収入', 0.0014, 0.0014],
      ['財産\n収入', -0.0040,   -0.0040],
      ['使用料',    -0.028,   -0.028],
      ['繰入金', -2.00,   -2.00],
    ]);
    var options = {
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 16,
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
      },
      title: '歳入補正額',
      vAxis: {
        format: '#.##億円',
        viewWindow: {
          min: -3,
          max: 14
        },
      },
      chartArea:{top:30, left:80, height:'75%', width: '85%'},
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('sainyu-hosei-summary'));
    chart.draw(data, options);
  }
</script>

次に、歳出を財源を含めて金額順に並べると以下のようになります。それぞれの内訳は以下で説明します。

<div id="saisyutu-zaigen-summary" style="width:100%;height: 600px;margin-top:50px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['項目', '使用料及び手数料', '国庫支出金', '都支出金', '諸収入', '地方債', 'その他', '一般財源', '総計', { role: 'annotation' }],
      ['総務費', -0.0280,         0.394,       0,         0.0199,   0.105,    -0.00400, 11.4,      0,       11.9],
      ['民生費', 0,               1.930,       0.484,     0,        0.361,    0,        4.12,      0,       6.90],
      ['衛生費', 0,               0,           0.0751,    0,        0,        0,        0.0674,    0,       0.142],
      ['予備費', 0,               0,           0,         0,        0,        0,        0.0559,    0,       0.0559],
      ['消防費', 0,               0.00062,     0.00126,   0,        0,        0,        0.00001,   0,       0.00189],
      ['商工費', 0,               0,           -0.0060,   0,        0,        0,        -0.0102,   0,       -0.0162],
      ['農業費', 0,               0,           -0.0060,   0,        0,        0,        -0.0207,   0,       -0.0267],
      ['議会費', 0,               0,           0,         0,        0,        0,        -0.0349,   0,       -0.0349],
      ['土木費', 0,               -0.278,      -0.199,    0,        0,        0,        0.123,     0,       -0.354],
      ['教育費', 0,               0,           -0.127,    -0.0185,  0.0590,   -0.528,   -0.174,    0,       -0.789],
    ]);
    var options = {
      title: '歳出補正額＆財源内訳（億円）',
      colors: ['#ffd1d1', '#9a0079', '#35a16b', '#edc58f', '#faf500', '#87e7b0', '#0041ff', '#000' ],
      fontName: "UD デジタル 教科書体 N-R",
      fontSize: 16,
      isStacked: true,
      legend: {
        position: 'right',
        alignment: 'start',
        textStyle: {
          fontSize: 14,
        },
      },
      hAxis: {
        slantedTextAngle: 60,
        maxTextLines: 3,
      },
      series: {
        7: {
          annotations: {
            format: '#.##億円',
          },
          color: "black",
          visibleInLegend: false
        }
      },
      vAxis: {
        format: '#.##億円',
        viewWindow: {
          min: -1,
          max: 13
        },
      },
      chartArea:{top:30, left:80, height:'75%', width: '65%'},
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('saisyutu-zaigen-summary'));
    chart.draw(data, options);
  }
</script>


#### 👁️‍🗨️ふらっとビューア（予算歳出） ver 1.0.1

ふらっとビューアを使って歳出の詳細を見ていきます。<a href="../20200803_rinjikai/gian-44.md##ふらっとビューア予算歳出-ver-10">使い方はこちらに記載しました</a>。

<div id="grid-container">
  <div class="grid-header" id="grid-header-div" style="width:100%">
    <label>令和2年9月補正予算（第5号）詳細</label>
    <button id="grouping">款・項・目でまとめない</button>
    <button id="fullscreen">フルスクリーンで表示する</button>
  </div>
  <div id="saisyutu-detail"></div>
</div>

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
<script src="../js-each/20200908.js"></script>
<script src="../js-each/slickgrid-src.js"></script>



#### それぞれの費用内訳

##### 総務費

<img src="./images/soumuhi-detail.png" alt="ふらっとビューア・総務費詳細" data-zoomable="" style="z-index:999">

都市計画事業基金に約6.0億円、財政調整基金に約5.7億円を積み立てています。これにより、予算額が以下のように補正されます。

<table class="simple">
<tr><th>都市計画事業基金</th><td>約2.0億円 → 約8.0億円</td></tr>
<tr><th>財政調整基金</th><td>約5.0億円 → 約11億円</td></tr>
</table>

<br>
<div class="tips">

<strong>都市計画税</strong>は土地や家屋を所有している人に課税される税金です。徴収した都市計画税の用途は地方税法に定められており、「都市計画事業」または「土地区画整理事業」にしか使えません。これらの事業を行うことで土地や家屋の利用価値が増大するので「都市計画税を払う人に受益がある」という論理が背景にあります。

> <a href="https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=325AC0000000226#8088">地方税法 第七百二条（都市計画税の課税客体等）</a>
> 
> <span class="highlight">市町村は、都市計画法に基づいて行う都市計画事業又は土地区画整理法に基づいて行う土地区画整理事業に要する費用に充てるため</span>、当該市町村の区域で都市計画法第五条の規定により都市計画区域として指定されたもの（略）のうち同法第七条第一項に規定する市街化区域（略）内に所在する土地及び家屋に対し、その価格を課税標準として、当該土地又は家屋の所有者に都市計画税を課することができる。～略～


また、課税の可否や課税水準は、市町村が自主的に設定できます。自治体によっては都市計画税を特別会計に入れることもあります。小平市では都市計画税を一般会計に入れていますが、以下の図に示すように、事業に使わなかった剰余分を「都市計画事業基金」に積み立てることで一般財源と区別しています。

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="502px" viewBox="-0.5 -0.5 502 641" content="&lt;mxfile host=&quot;b9149630-d154-42ba-a615-4c97128e6196&quot; modified=&quot;2020-09-23T15:50:23.661Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.49.1 Chrome/83.0.4103.122 Electron/9.2.1 Safari/537.36&quot; etag=&quot;XojKp6c8teNu2jHViQI8&quot; version=&quot;13.1.3&quot;&gt;&lt;diagram id=&quot;6hGFLwfOUW9BJ-s0fimq&quot; name=&quot;Page-1&quot;&gt;&lt;mxGraphModel dx=&quot;1103&quot; dy=&quot;391&quot; grid=&quot;1&quot; gridSize=&quot;10&quot; guides=&quot;1&quot; tooltips=&quot;1&quot; connect=&quot;1&quot; arrows=&quot;1&quot; fold=&quot;1&quot; page=&quot;1&quot; pageScale=&quot;1&quot; pageWidth=&quot;827&quot; pageHeight=&quot;1169&quot; math=&quot;0&quot; shadow=&quot;0&quot;&gt;&lt;root&gt;&lt;mxCell id=&quot;0&quot;/&gt;&lt;mxCell id=&quot;1&quot; parent=&quot;0&quot;/&gt;&lt;mxCell id=&quot;2&quot; value=&quot;国や都の補助金&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;150&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;17&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; parent=&quot;1&quot; source=&quot;3&quot; target=&quot;16&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;3&quot; value=&quot;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;dashed=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;60&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;4&quot; value=&quot;地方債&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;190&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;5&quot; value=&quot;一般財源&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;230&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;6&quot; value=&quot;その他&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;270&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;7&quot; value=&quot;都市計画事業費&amp;lt;br&amp;gt;・&amp;lt;br&amp;gt;土地区画整理事業費&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;220&quot; y=&quot;100&quot; width=&quot;120&quot; height=&quot;136&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;8&quot; value=&quot;上記事業のための&amp;lt;br&amp;gt;地方債償還等&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;220&quot; y=&quot;246&quot; width=&quot;120&quot; height=&quot;54&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;14&quot; value=&quot;都市計画税&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;100&quot; width=&quot;120&quot; height=&quot;43&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;16&quot; value=&quot;都市計画事業基金に&amp;lt;br&amp;gt;積み立て&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;strokeWidth=2;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;380&quot; y=&quot;60&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;18&quot; value=&quot;余った分&quot; style=&quot;text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;120&quot; y=&quot;60&quot; width=&quot;120&quot; height=&quot;20&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;20&quot; value=&quot;&quot; style=&quot;shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;rotation=-180;size=0;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;160&quot; y=&quot;100&quot; width=&quot;10&quot; height=&quot;200&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;19&quot; value=&quot;&quot; style=&quot;shape=flexArrow;endArrow=classic;html=1;endWidth=20;endSize=6.67;width=28;fillColor=none;&quot; parent=&quot;1&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;170&quot; y=&quot;204.76&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;210&quot; y=&quot;205&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;26&quot; value=&quot;国や都の補助金&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;190&quot; y=&quot;490&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;27&quot; value=&quot;地方債&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;190&quot; y=&quot;530&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;28&quot; value=&quot;一般財源&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;190&quot; y=&quot;570&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;29&quot; value=&quot;その他&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;190&quot; y=&quot;610&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;30&quot; value=&quot;都市計画事業費&amp;lt;br&amp;gt;・&amp;lt;br&amp;gt;土地区画整理事業費&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;380&quot; y=&quot;400&quot; width=&quot;120&quot; height=&quot;170&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;31&quot; value=&quot;上記事業のための&amp;lt;br&amp;gt;地方債償還等&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;380&quot; y=&quot;580&quot; width=&quot;120&quot; height=&quot;54&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;32&quot; value=&quot;都市計画税&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;190&quot; y=&quot;450&quot; width=&quot;120&quot; height=&quot;33&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;33&quot; value=&quot;&quot; style=&quot;shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;rotation=-180;size=0;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;320&quot; y=&quot;400&quot; width=&quot;10&quot; height=&quot;240&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;34&quot; value=&quot;&quot; style=&quot;shape=flexArrow;endArrow=classic;html=1;endWidth=20;endSize=6.67;width=28;fillColor=none;&quot; parent=&quot;1&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;330.0000000000001&quot; y=&quot;519.6600000000001&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;370.0000000000001&quot; y=&quot;519.9000000000001&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;44&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;35&quot; target=&quot;37&quot;&gt;&lt;mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;35&quot; value=&quot;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;dashed=1;strokeWidth=2;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;400&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;36&quot; value=&quot;都市計画事業基金&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;strokeWidth=2;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;30&quot; y=&quot;440&quot; width=&quot;120&quot; height=&quot;170&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;37&quot; value=&quot;都市計画事業基金の&amp;lt;br&amp;gt;取り崩し&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;strokeWidth=2;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;190&quot; y=&quot;400&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;39&quot; value=&quot;都市計画税が余る → 基金に積み立て&quot; style=&quot;text;strokeColor=none;fillColor=none;html=1;fontSize=24;fontStyle=1;verticalAlign=middle;align=left;dashed=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;410&quot; height=&quot;40&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;42&quot; value=&quot;都市計画税が足りない → 基金の取り崩し&quot; style=&quot;text;strokeColor=none;fillColor=none;html=1;fontSize=24;fontStyle=1;verticalAlign=middle;align=left;dashed=1;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry y=&quot;340&quot; width=&quot;470&quot; height=&quot;40&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;/root&gt;&lt;/mxGraphModel&gt;&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://app.diagrams.net/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:641px;"><defs/><g><rect x="30" y="150" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 165px; margin-left: 31px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">国や都の補助金</div></div></div></foreignObject><text x="90" y="169" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">国や都の補助金</text></switch></g><path d="M 150 80 L 373.63 80" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 378.88 80 L 371.88 83.5 L 373.63 80 L 371.88 76.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="30" y="60" width="120" height="40" fill="#ffffff" stroke="#000000" stroke-dasharray="3 3" pointer-events="all"/><rect x="30" y="190" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 205px; margin-left: 31px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">地方債</div></div></div></foreignObject><text x="90" y="209" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">地方債</text></switch></g><rect x="30" y="230" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 245px; margin-left: 31px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">一般財源</div></div></div></foreignObject><text x="90" y="249" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">一般財源</text></switch></g><rect x="30" y="270" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 285px; margin-left: 31px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">その他</div></div></div></foreignObject><text x="90" y="289" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">その他</text></switch></g><rect x="220" y="100" width="120" height="136" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 168px; margin-left: 221px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画事業費<br />・<br />土地区画整理事業費</div></div></div></foreignObject><text x="280" y="172" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画事業費・土地区画整理事業費...</text></switch></g><rect x="220" y="246" width="120" height="54" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 273px; margin-left: 221px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">上記事業のための<br />地方債償還等</div></div></div></foreignObject><text x="280" y="277" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">上記事業のための&#xa;地方債償還等</text></switch></g><rect x="30" y="100" width="120" height="43" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 122px; margin-left: 31px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画税</div></div></div></foreignObject><text x="90" y="125" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画税</text></switch></g><rect x="380" y="60" width="120" height="40" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 80px; margin-left: 381px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画事業基金に<br />積み立て</div></div></div></foreignObject><text x="440" y="84" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画事業基金に&#xa;積み立て</text></switch></g><rect x="120" y="60" width="120" height="20" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 70px; margin-left: 121px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">余った分</div></div></div></foreignObject><text x="180" y="74" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">余った分</text></switch></g><path d="M 170 100 L 165 100 Q 160 100 160 110 L 160 190 Q 160 200 160 210 L 160 290 Q 160 300 165 300 L 170 300" fill="none" stroke="#000000" stroke-miterlimit="10" transform="rotate(-180,165,200)" pointer-events="all"/><path d="M 170.42 218.76 L 170.58 190.76 L 188.57 190.87 L 188.64 180.37 L 209.5 205 L 188.34 229.37 L 188.41 218.87 Z" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"/><rect x="190" y="490" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 505px; margin-left: 191px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">国や都の補助金</div></div></div></foreignObject><text x="250" y="509" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">国や都の補助金</text></switch></g><rect x="190" y="530" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 545px; margin-left: 191px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">地方債</div></div></div></foreignObject><text x="250" y="549" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">地方債</text></switch></g><rect x="190" y="570" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 585px; margin-left: 191px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">一般財源</div></div></div></foreignObject><text x="250" y="589" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">一般財源</text></switch></g><rect x="190" y="610" width="120" height="30" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 625px; margin-left: 191px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">その他</div></div></div></foreignObject><text x="250" y="629" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">その他</text></switch></g><rect x="380" y="400" width="120" height="170" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 485px; margin-left: 381px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画事業費<br />・<br />土地区画整理事業費</div></div></div></foreignObject><text x="440" y="489" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画事業費・土地区画整理事業費...</text></switch></g><rect x="380" y="580" width="120" height="54" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 607px; margin-left: 381px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">上記事業のための<br />地方債償還等</div></div></div></foreignObject><text x="440" y="611" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">上記事業のための&#xa;地方債償還等</text></switch></g><rect x="190" y="450" width="120" height="33" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 467px; margin-left: 191px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画税</div></div></div></foreignObject><text x="250" y="470" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画税</text></switch></g><path d="M 330 400 L 325 400 Q 320 400 320 410 L 320 510 Q 320 520 320 530 L 320 630 Q 320 640 325 640 L 330 640" fill="none" stroke="#000000" stroke-miterlimit="10" transform="rotate(-180,325,520)" pointer-events="all"/><path d="M 330.42 533.66 L 330.58 505.66 L 348.57 505.77 L 348.64 495.27 L 369.5 519.9 L 348.34 544.27 L 348.41 533.77 Z" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"/><path d="M 150 420 L 183.63 420" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 188.88 420 L 181.88 423.5 L 183.63 420 L 181.88 416.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="30" y="400" width="120" height="40" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="6 6" pointer-events="all"/><rect x="30" y="440" width="120" height="170" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 525px; margin-left: 31px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画事業基金</div></div></div></foreignObject><text x="90" y="529" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画事業基金</text></switch></g><rect x="190" y="400" width="120" height="40" fill="#ffffff" stroke="#000000" stroke-width="2" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 420px; margin-left: 191px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">都市計画事業基金の<br />取り崩し</div></div></div></foreignObject><text x="250" y="424" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">都市計画事業基金の&#xa;取り崩し</text></switch></g><rect x="0" y="0" width="410" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 1px; height: 1px; padding-top: 20px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: left; "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap; ">都市計画税が余る → 基金に積み立て</div></div></div></foreignObject><text x="2" y="27" fill="#000000" font-family="Helvetica" font-size="24px" font-weight="bold">都市計画税が余る → 基金に積み立て</text></switch></g><rect x="0" y="340" width="470" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 1px; height: 1px; padding-top: 360px; margin-left: 2px;"><div style="box-sizing: border-box; font-size: 0; text-align: left; "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap; ">都市計画税が足りない → 基金の取り崩し</div></div></div></foreignObject><text x="2" y="367" fill="#000000" font-family="Helvetica" font-size="24px" font-weight="bold">都市計画税が足りない → 基金の取り崩し</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

都市計画税の全体像については、こちらに分かりやすくまとめられています。  
[📄 自治の窓 都市計画税の課税について](http://www.masse.or.jp/ikkrwebBrowse/material/files/200807_p30.pdf)

</div>


なお、小平市における令和元年度の都市計画税と都市計画（事業）費は以下の通りです。

<table class="simple">
<tr><th>都市計画税</th><td>当初予算約 23 億円 → 決算はこれから</td></tr>
<tr><th>都市計画費</th><td>当初予算約 24 億円 → 第4号補正で約 20 億円へ → 決算はこれから</td></tr>
</table>

つまり現時点で、

都市計画税 - 都市計画費 = 約 3 億円


ですので、この分が丸々残っているのだろうという風に推察できます。




次に、財政調整基金約 5.7 億円の積み立て分については、地方財政法の第七条にある「決算の余剰金はその半分を積み立てなくてはならない」というルールに従った積み立て分です。

<div class="tips">

<strong>財政調整基金</strong>については、<a href="https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=323AC0000000109#100">地方財政法第7条（剰余金）</a>に定められている通り、決算で剰余金が出た場合はその半分を積み立てる必要があります。

> <strong><a href="https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=323AC0000000109#100">地方財政法 第七条（剰余金）</a></strong>
>
> 地方公共団体は、<span class="highlight">各会計年度において歳入歳出の決算上剰余金を生じた場合においては、当該剰余金のうち二分の一を下らない金額は、これを剰余金を生じた翌翌年度までに、積み立て、又は償還期限を繰り上げて行なう地方債の償還の財源に充てなければならない。</span>
>
>２　第四条の三第二項及び第三項並びに第四条の四の規定は、前項の規定により積み立てた金額について準用する。
>
>３　前条の公営企業について、歳入歳出の決算上剰余金を生じた場合においては、第一項の規定にかかわらず、議会の議決を経て、その全部又は一部を一般会計又は他の特別会計に繰り入れることができる。
>
>４　第一項及び前項の剰余金の計算については、政令でこれを定める。

なお、この条文には以下のことも書かれています。  
- 翌年度に全額を積み立てる必要はなく、翌翌年度までに積み立てれば良い
- 公営企業会計の余剰金については、議決があれば積み立てなくて良い

小平市の場合、公営企業会計を行っているのは下水道会計です。下水道事業は、利用者の下水道使用料と、市の一般会計から繰り入れているお金で実施しています。下水道会計の剰余分について、利用者からの料金に関する剰余分は下水道基金に積み立て、それ以外の一般会計から繰り入れた分については一般会計へ戻します。

</div>


（その他の費用については作成中）



<!--
<div class="redbox">

- 当初、耐用年数が過ぎた場合はどうするつもりだったか
- 今後エレベーターをどうする予定か

</div>

<strong>情報システム運営費</strong>は電算関係業務委託関係に約9,700万円計上しており、内訳は次の通りです（その他項目に及ぶところもあり、合計は9,700万円になっていません）。

<table class="simple">
<tr><th>事業</th><th>金額（円）</th></tr>
<tr><td>公共施設予約システム利用対象施設拡大 <br>(地域センター、ルネこだいらを追加し再構築）</td><td>約4,900万円</td></tr>
<tr><td>証明書コンビニ交付に向けたシステム構築</td><td>約3,400万円</td></tr>
<tr><td>都市計画、建築行政、道路管理にかかる地図情報等の<br>インターネット公開に向けたシステム構築</td><td>約1,400万円</td></tr>
</table>

今の時代、予約システム開発に約4,900万円も投じるとは、にわかには信じられません😨。キャッシュレス決済機能も持たせるということですが、詳しい人なら高校生でも開発できる内容と思います。私に発注してくれるなら、アプリも対応して6か月納期の400万円程度で請け負いたい😋それでも高いくらいです。予約画面などはシンプルでいいのですから、4,900万円という金額は本当に法外だと思います。また、キャッシュレス決済ということは、公民館の使用料100%減免措置撤廃の動きと絡んでいるはずです（減免措置撤廃反対といつも主張している共産党からは特に質問がありませんでした）。特に精査が必要な事業であり、今後の一般質問等で追求していきます。これは不要とまでは言いませんが、「異常にお金がかかりすぎている事業」ということになります。

<div class="redbox">

- 予約システムの詳細（器具貸出など拡張性は）、予算の根拠は
- このシステムの利用で年間どれくらいの収入アップを目指しているのか
- 予約の手続きが減ることで職員数を減らすことなどがあるのか

</div>

<strong>市民文化会館（ルネこだいら）費</strong>は、ルネこだいらの空調設備改修に約4,900万円、入口の一か所を自動ドアにするために約900万円の支出です。空調設備の改修は、コロナ禍に対応するためのものかと思ったら、主に故障していた部品を交換するためということです。つまり、ツケ払いの事業です。ルネこだいらは文化的なイベントを行う際には良い施設と思いますが、毎年非常に多くのコストがかかる金食い虫であり、ルネこだいら自体を精査する必要があると考えています。

<div class="redbox">

- ルネこだいらを解剖して調査する

</div>

<strong>安全安心まちづくり費</strong>は、防災施設及び備蓄品の整備事業ということで、消耗品や、災害時テント⛺、応急給水等資機材倉朧、災害時ベッド、避難所用発電機等に合計約4,700万円かけています。コロナ禍というよりは災害用のような気がしますが、それでも臨時交付金が使えるのですね。そう考えるとかなり自由度が高い交付金なのではないかと思います。これはまぁ良いでしょう。

<strong>地域振興費</strong>は、地域センターと元気村おがわ東の空調設備及び修繕費に合計約2,300万円かかっています。また平櫛田中彫刻美術館の除菌消臭器に約52万円予算計上していますが、これについては、なぜ臨時交付金ではなく一般財源から19万円を支出しているのか気になります。こちらもツケ払い、もしくは不要不急の事業だと思います。


<div id="kyouiku-hi-uchiwake" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['費目', '億円', { role: 'annotation' }],
      ['小学校費：学校管理費',     4.26,   4.26],
      ['中学校費：学校管理費',     1.90,   1.90],
      ['保健体育費',              0.200, 0.200],
      ['教育総務費',              0.0840, 0.0840],
      ['社会教育費',              0.0782, 0.0782],
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

小学校費は、上記したGIGAスクールのタブレット以外に、小学校再開に伴う感染症対策・学習補償等支援事業、小学校移動教室運営事業（約780万円）があります。移動教室については本当に実施するのか、今後検討だそうです。以下の図で、分類が分かりやすくなるように赤枠を付けてみましたが、逆に見にくくなっているかもです💦。  
<img src="./syogakko-hi.png" alt="ふらっとビューア・小学校費詳細" data-zoomable="">

中学校費も小学校費と同様です。移動教室のバス・自動車借上料が小学校の10分の1未満という点は気になります。  
<img src="./chugakko-hi.png" alt="ふらっとビューア・中学校費詳細" data-zoomable="">

保健体育費は、市民総合体育館の事業継続支援に約1,600万円と、給食の器具費です。事業継続支援の内容が気になるところです。
<img src="./hoken-taiiku.png" alt="ふらっとビューア・保健体育費詳細" data-zoomable="">



##### 民生費

<div id="minsei-hi-uchiwake" style="width:100%;height: 350px;margin-top:50px;margin-bottom:30px;"></div>
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

<img src="./kosodate-sienka-hi.png" alt="ふらっとビューア・民生費（子育て支援課）詳細" data-zoomable="" style="z-index:999">

<strong>民生費の子育て支援課分について</strong>は、至極まっとうな内容だと思います。学童クラブ指導員の負担増に応じた給与の支給や、児童養護施設等退所者支援給付金で、足りているのかは分かりませんが、無駄はないと思います。唯一ひっかかるとしたら電動自転車くらいのものですが、スタッフの労力と耐用年数を考えると、これは良い投資でしょう。

<img src="./minseihi-other.png" alt="ふらっとビューア・民生費（子育て支援課以外）詳細" data-zoomable="" style="z-index:999">

<strong>民生費の子育て支援課以外の分について</strong>は、住居確保給付金に約6,800万円、市立及び民間の保育施設等臨時休園等に対する支援事業、包括支援事業に合計で約7,100万円、たいよう福祉センターとあおぞら福祉センターの庁用器具費に880万円というのは内容が気になるところですが、特に問題はなさそうです。


##### 衛生費

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

<img src="./eiseihi-detail.png" alt="ふらっとビューア・衛生費詳細" data-zoomable="" style="z-index:999">

<strong>保険衛生費</strong>は、昭和病院の負担金が約1.8億円、健康センターのエレベーター改修が約5,700万円。先ほど述べたように、昭和病院の負担金については精査が必要です。エレベーターの改修は主に老朽化が激しくなっていることに対応ということですから、ツケ払いの事業ということです。それ以外は特に問題のない予算だと思います。

<div class="redbox">

- 昭和病院の負担金に関する契約等詳細
- 今後この状況が継続する際の負担に関する取り決めと決定の経緯
- 全体的に病院の外来・入院者数減による国保費用の減と比較してどうか

</div>

##### 商工費

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

<img src="./syoukouhi-detail.png" alt="ふらっとビューア・商工費詳細" data-zoomable="" style="z-index:999">

<strong>商工費</strong>は約2千万円となっていますが、家賃支援で確保していた約2.5億円を地域消費活性化事業として「キャッシュレス購入へのポイント付与 (市内店舖等で30%ポイント還元）」2.6億円に組み替えています。実際は2.6億円の事業を始めるということです。

委員会質疑での答弁で、キャッシュレスポイント事業の経済波及効果について、30%還元なので［予算2.6億円 x 100/30 = 約8.7億円］の効果があると言っていますが、これは間違っています。経済波及効果は「新たな需要」に対するものですので、「30%ポイントが付くから、使う予定がなかったものに使う」購買だけを対象にするべきです。それがいくらなのかはまた別の指標を用いて計算しなければなりません。また、キャッシュレス購入にすぐ対応できない高齢者にはメリットがないという点、利用者のみがメリットを受けるという点も問題です。私はそういった理由からこの事業にはあまり賛成ではありません。2.6億円はICT環境整備に使ってもらいたいところですが、家賃支援に設定していた分の流用で同じ商工費の同じ目内でしか使えないということだそうで、困ったことです。

<div class="redbox">

- 2.6億円の予算すべてがポイント還元分に使われるのか
- 経済波及効果の計算方法は間違えているので変える必要がある
- キャッシュレス事業者への手数料は
- 限られた1, 2社が利益を得る状況で良いのか

</div>

また、こだいら観光まちづくり協会への580万円（第2弾「モリモリ食べてモリあげよう」）も、どれだけ効果が上がるものなのか事後検証が必要なところです。そもそも第1弾の効果はあったのでしょうか。

<div class="redbox">

- 第1弾の効果は上がっているのか、反省点や課題、改善策は
- 効果検証

</div>

##### 土木費

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

<img src="./dobokuhi-detail.png" alt="ふらっとビューア・土木費詳細" data-zoomable="" style="z-index:999">

<strong>土木費</strong>は、コミュニティバス・タクシーの事業継続支援に合計約5,700万円、公園の修繕料として3,200万円が計上されています。事業継続支援と銘打っていますが、実際は耐用年数が過ぎている車両の更新費用が含まれており、明らかなツケ払いの事業です。特にコミュニティタクシーは運行中にエンジンが止まってしまうようなことも年に2回ほどある状況だそうです。なぜ今まで見直しをしてこなかったのでしょうか。安全性に問題はなかったのでしょうか。また、運休中に従業員は休暇扱いになっていたのかも気になるところです。

<div class="redbox">

- 老朽化でエンジンが止まるような状態で安全な運行ができるのか、早急な見直しが必要では
- 運休中、従業員は休暇扱いだったのか

</div>

また、公園修繕料は公園遊具の感染症対策ということで、砂場に抗菌砂を入れて攪拌することと、遊具に抗菌塗料を塗るとのことです。いずれも新型コロナに効果が認められているものではありません。昨年度の遊具安全点検で、特に危険なもの、砂が減っていたものを優先的に行うということで、やはり普段からやるべきだった事をコロナにかこつけて実施しているという、ツケ払いの事業になります。

<div class="redbox">

- 昨年度安全点検で遊具に特に危険なものがあったのに放置していたのか

</div>


以上が今回補正予算の概要です。さらに細かい部分については、次の質疑概要をご参照ください。この補正予算は総務委員会に付託されており、総務委員でない私は詳しい質問ができません。私は本会議においてある程度質問し、あとの細かい質問は総務委員である橋本久雄議員に託しました。答弁で詳細が得られなかったり、質問が足りていなかった部分については、今後確認していきたいと思います。

-->

## 主な質疑（発言順）
{{#include ../partials/situgi_hanrei.md}}

### ＠ 本会議
<!--
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
（）
</td></tr></table>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他議員による質問"></i></td><td>
</td></tr></table>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
（安竹 洋平）
</td></tr></table>

-->

- [中江 美和 議員の質疑](#nakae-miwa)
- [伊藤 央 議員の質疑](#itou-hisasi)
- [安竹 洋平 議員の質疑](#yasutake-yohei)

<div id="nakae-miwa"></div>

<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
どういう検討によって、コロナ対策としてこれ以上の地域振興施策を実施しないという判断になったか。（中江 美和）
</td></tr></table>

> コロナ対策をやらないということではない。8月臨時議会でほとんどの施策を予算化した。その事業の状況を見ながら、世の中の経済状況を見ながら、必要があれば対策を打っていく。（津嶋 企画政策部長）

<p class="situgi-comment"><span>😨</span> この危機的状況を前にしながら、市の答弁からは危機感が一切感じられません。そもそも本来は市長が答えるべき内容の質問です。こうして「市長が職員に丸投げして責任を持たない」ことが、多くの問題の原因だと私は考えています。私の一般質問で問いただしました。</p>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
5号補正でコロナに積極的な姿勢は見られない。様々なイベント中止による予算減額があるが、その分を代替え事業などに使用しない判断をした理由は。（中江 美和）
</td></tr></table>

> 今回一般財源として確保しているところがあり、今後必要があればコロナ対策の事業に活用する。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
保育園新設について、そもそも当初予算に計上されておらず、こども子育て支援事業計画にも1園建設すると書いていない。5月に待機児童が出たら保育園を作るということで、手法が場当たり的、計画性に欠ける。新設の保育園について計画を作成するつもりはないのか。（中江 美和）
</td></tr></table>

> 小平市では待機児童が出てからということで例年取り組んでいる。市内の東南地域に待機児童が集中している。そういう傾向を捉えてピンポイントに対策を打っていく。そういうことに適ったスケジュール。「こども子育て支援事業計画」では確保数として計画を立てている。新規の認可保育園で確保するのか、認定こども園に幼稚園が移行することで確保するのか、幼稚園の預かりなどで確保するのか、様々な手法で対応していくため、必ずしも新規の開設をするだけではない。極力お金がかからない方法で確保していく。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
保育園運営事業者の選考過程や選考理由は、なぜ公表しないのか。（中江 美和）
</td></tr></table>

> 内部で選考の評価項目を作って点数化している。評価のところを整備しながらやってきており、ほぼ固まってきたので、今後評価項目の公表を考える。（伊藤）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
保育園の事業者選考について、地方自治法に規定する総計予算主義の原則から、当初予算で計上されていない事業の公募手続きを、予算の裏付けなく実施することは許されるのか。（中江 美和）
</td></tr></table>

> 予算はこれから可決してもらうため契約はできないが、準備的に当たっていくところは問題ないと考えている。（津嶋）

<div class="tips">

<strong>総計予算主義の原則</strong>とは、地方自治法第二百十条に規定されている「歳入歳出のすべてを予算に計上する」というルールです。予算案は議会で審議されるため、このルールがあるおかげで「行政が市民の知らないところで勝手にお金を使う」ことが抑止されることになります。

> <a href="https://elaws.e-gov.go.jp/search/elawsSearch/elaws_search/lsg0500/detail?lawId=322AC0000000067#1013">地方自治法 第二百十条（総計予算主義の原則）</a>
>
> 一会計年度における一切の収入及び支出は、すべてこれを歳入歳出予算に編入しなければならない。

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
保育園の公募手続きに関わる経費は、人件費を含めてどれくらいかかっているか。（中江 美和）
</td></tr></table>

> 施設整備担当として保育課に職員（係長）がおり、その人件費ということになるが、公募に関わっているだけではない。（伊藤）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
予算の裏付けがない公募手続きは、予算の裏付けなく委託事業や物品購入を行うことと同様、地方自治法に抵触すると考える。補正予算の計上前に民間保育園の運営事業者を公募する事務を公務の中で行っており、実際に公募も行って決定している。総計予算主義と照らし合わせて違法性はないのか。ないのであればその理由は。（中江 美和）
</td></tr></table>

> まだ正式な契約を結ぶところまでは行っていない。市の歳出の負担が決定するときには予算の裏打ちが必要なので、今回の補正予算を審議して頂き予算化を図っていく。（津嶋）

<p class="situgi-comment"><span>🤔</span> ということは、公募事務や仮契約に関わる歳出は予算上裏打ちされていることになりますが、予算上どの部分に該当するのでしょうか？</p>

<div class="redbox">

保育園の公募事務や仮契約に関わる歳出は、予算上どの部分に該当するのか。

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
ICT化やタブレット端末導入、テレワークなど、行政側における新しい日常への取り組みは今回予算に反映しているか。していないのであれば、いつからするか。（中江 美和）
</td></tr></table>

> 補正予算第4号でも健康相談はネットで受けられるようにしている。教育もGIGAスクールで進めている。行政内部の効率化や非接触化については足りない部分は多少あると思うが、市民サービスでいえば公共施設予約システムの拡充など準備は進めている。テレワークは今後の課題として認識しており、他市も進めているため、検討していく。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
対応する予算はどれくらい考えているか。行政としてタブレットの導入など早くやった方が良い。乗り遅れることになる。（中江 美和）
</td></tr></table>

> 今までも検討してきている。やり方、レベルで額の差がある。他市の例も見ながら、できるだけ費用を抑えながら効果が上がるものを今後検討していく。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他議員による質問"></i></td><td>
市内の個人消費、雇用情勢は。
</td></tr></table>

> 市内の消費状況は一時期に比べだいぶ戻っていると商工会から聞いている。雇用状況については詳しい数字は持ち合わせてない。商工会と連携していく。（余語 地域振興部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他議員による質問"></i></td><td>
次の補正はいつごろか。
</td></tr></table>

> 状況を見ながら適切に判断する。（津嶋）

<div id="itou-hisasi"></div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
小平市の方針として、オリンピックが開催されたら子どもを観戦に連れていくという点は変わりないか。観客数も大幅に減らされる可能性もあるかとは思うが、どういった方針を持っているか。（伊藤 央）
</td></tr></table>

> 東京都と情報収集を務めており、基本的にはオリンピックは開催される方向。9月4日に「東京オリンピック・パラリンピック競技大会における 新型コロナウイルス感染症対策調整会議 第1回」が開催され、メンバーとして内閣官房副長官と東京都副知事等が参加し検討している。これらの状況を見ながら対応を考える。（篠宮）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
ICT化について、専門的な部局を作るなどの計画が必要だが、どういう検討をしているか。（伊藤 央）
</td></tr></table>

> 現状は特に新たな部局を設置することは想定していない。今回の予算にも計上していない。今後取り組みを進める中で検討していく課題と考えている。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
国全体で5万人くらいの解雇・雇止めがあるような状況下で、基金を11億円も積み立てる理由は。繰越金の半分は財調に積む必要はあるにしても、喫緊のコロナ対策に充てるつもりはまったくなかったのか。まだ余裕があると考えているのか。（伊藤 央）
</td></tr></table>

> 基金は法令で積まなければならない。コロナ対策については、市内の状況を見ながら必要に応じて対応を考える。8月の臨時会で成立したコロナ対策の実施状況を見ながら対策を検討する。コロナ対策は市だけでやるものではなく、国や都の事業と併せて考えていく。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
国や都と連携しながらも、市の独自の支援として生活支援だったり経済支援に積極的に打っていく考えはないのか。8月やったからそれでいいと思っているのか。これだけ資金が余っていれば、もっと市民の支援に使ってくれとなるはずだが。（伊藤 央）
</td></tr></table>

> コロナ対策は早めに手を打っていく必要があるとして8月に予算化した。キャッシュレスは10月から始まり、他市は1か月のところもあるが、小平市は4か月継続する。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
インバウンド観光需要回復に向けた取組としてワイヤレスガイドシステム約45万円。この期に及んで小平市はまだインバウンドに期待するのか。数年前までは外から観光客を呼ぶのではなく市内観光事業が主であり、それは正しいと考えていたが。（伊藤 央）
</td></tr></table>

> インバウンドは確かに現状で進めるのは難しいと認識。今後のコロナ感染症の状況により推進するタイミング等計っていく。（余語）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
なぜ今予算化をしたのか。どういう方針、考え方でこうなっているか。（伊藤 央）
</td></tr></table>

> インバウンドが回復した後に様々な方を受け入れるために修繕を行うもの。（篠宮）

<p class="situgi-comment"><span>😟</span> これは今やる事業ではないと思います。必要があるなら、検討だけしておき（機器の仕様決定まで終わらせておいて）、その時に予算をつければ良いだけです。そもそも平櫛田中美術館のインバウンド需要はどれくらいあるのでしょうか。</p>

<div class="redbox">

平櫛田中美術館のインバウンド需要はどれくらい見込めるのか。

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
東京都の財源で行う多胎児の支援について、双子、三つ子も大変だが、年子や2歳離れているような家庭でも大変さはある。多胎児だけを支援することは、ある意味公平性に欠ける部分があるが、どう考えているか。（伊藤 央）
</td></tr></table>

> 東京パパママ応援事業では産後家事育児支援事業など多胎児に限らずその他の方の支援等もメニューにある。多胎児に関しては任意事業で今回これを予算化するもの。コロナの影響で説明会など開催していないが、今後状況をみながらこちらも検討していく。（篠宮）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
公平性についてはどう考えているのか。（伊藤 央）
</td></tr></table>

> これまで市においては多胎児家庭に特に大きな支援をしていない。今回は活用して幅広く対応できると考え、多胎児の3つあるメニューのうち1つを事業化した。（篠宮）


<p class="situgi-comment"><span>🤔</span> その他メニューも一度にできないものなのでしょうか？複数ある中で今回多胎児を選択した合理的な理由が欲しいところです。</p>

<div class="redbox">

東京パパママ応援事業は、一度にメニューを全て選択できない理由があるのか。今回多胎児だけが選ばれた合理的理由は。

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
待機児童対策、4年くらい前「このまま新規保育園を作り続けても待機児童ゼロにはならない」と述べた通りになっている。場当たり的であれば中長期的な財政計画も立てられない。これを続けるのか。子育て支援を大きく見直す時期なのでは。（伊藤 央）
</td></tr></table>

> 共働き家庭の増加などで保育園の入所申し込み率が上がっている。社会全体でそのような状況で、小平市として後追いになっていることはある。保育の要件を満たしながら入れる方と入れない方がいるため施設整備の必要がある。財源確保については様々組み合わせながら整備していきたい。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
入れる人と入れない人が出てくるということだが、そもそも預ける人と預けない人がいる。そこに不公平感はないと考えているのか。（伊藤 央）
</td></tr></table>

> 各家庭の考え方と捉えている。保育は必要のある方に利用して頂いている。必要があるから実施しており、利用しない方がいても、税金が投入されることに対し、不公平感は大きくないと捉えている。保育・幼児教育の無償化も実施されており、3歳以降で幼稚園を使う方も一定の税金を使っているので、より公平性は保たれていると考える。（伊藤）


<p class="situgi-comment"><span>🤔</span> 津嶋企画政策部長は、公共施設の使用料に関して、よく「受益者負担」ということを持ち出します。それに対し、保育は全体で負担することが受容されています。このあたり、どういった基準で両者に違いを持たせるのかを決めておかないと、市民に示しがつかない場面が出てくるように思います。</p>

<div class="redbox">

受益者（応益）負担と全体での負担はどういう基準に基づいて判断するのか。

</div>

<div id="yasutake-yohei"></div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
今回、臨時財政対策債の限度額が多かったということだが、限度額一杯に発行したか。また、毎回限度額一杯に発行しているのか。（安竹 洋平）
</td></tr></table>

> 現状は財源が不足しており必要があるので毎回限度額一杯借りている。以前は満額借りずに抑えていたところはある。（津嶋）

<p class="situgi-comment"><span>😋</span> これは純粋に勉強のために質問しました。臨時財政対策債は小平市が抱える借金になるのですが、今後の交付金で国が返してくれるものなので、限度額いっぱいに借りておいた方が良いとされています。（<a href="http://www.pref.osaka.lg.jp/attach/15682/00246779/zentai.pdf">臨時財政対策債の発行抑制の現状と分析（大阪府・平成 28 年度市町村課研修生卒業研究報告書）</a>)</p>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
返還金が多いが、主にコロナ関係のものか、約1.7億円ある保育課のものは。（安竹 洋平）
</td></tr></table>

> コロナとは関係なく、例年これくらいあり、コロナの影響で増えたということはない。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
ICT部局の想定もないとのことだが、地方創生臨時交付金がまた交付される可能性は高く、いま準備しておく必要がある。さもなければ8月補正予算のようにツケ払いに回すことになる。次の臨時交付金に間に合うようプラン作りを進めているのか。（安竹 洋平）
</td></tr></table>

> 部局を設置していないから検討していないということではない。情報政策課をはじめ、タブレット端末もそうだが、関係課が集まり検討している。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
オリパラ基金、この状況において約5千万円（具体的には5,280万円）というお金を基金として固定しておくのは問題。削減するかゼロにするか、他の部分に使えるようにした方が良いと思うがどう考えるか。（安竹 洋平）
</td></tr></table>

> まだ不透明なところがあり、来年度、子ども観戦事業を実施する上ではこの基金が重要と考えているので一般会計に戻すことは考えていない。（篠宮）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
一般会計から出すようにすれば良いのではないか。約5千万円というお金を固定して使えない状況にすることではない。基金に積まなければできないのか。（安竹）
</td></tr></table>

> 自分の子ども心にあった東京オリンピックの高揚感が忘れられない。当時は国際交流が盛んではなく、外国のアスリートを見るのは初めてだった。オリンピックは子どもに夢や希望を与えるものという思いがあり、公約に掲げ、議会で通した。東京都や国が、子ども達を観戦に連れていくのを打ち出していない時に、たぶん日本で初めて私の方で打ち出した。小平市であれば皆行けると宣言したつもり。その後、東京都や国が動いて行かせるということになったので、私がひっぱったという自負がある。今の段階で可能性が少なくなったなど、口が裂けても言えない。可能な限り開催して、いま、やや自国主義になっている、非常に閉鎖的な社会になっている子ども達に夢を与える。基金は単なる財政上額の事務的な問題ではなく、基金があることで、小平市のオリンピックに対する姿勢を表していることを、是非ご理解いただきたい。（市長）

<p class="situgi-comment"><span>🤔</span> 市長の言っていることも分かるのですが、だとすれば基金を残して100万円くらいに減額すれば良いだけではないでしょうか。この状況において、5.3千万円もの市税を他に使えないものとして固定しておくようでは、危機感が無い市長だと見なされても仕方がないと思います。<br><br>また、一流のスポーツ選手はほとんどの子どもにとって「手の届かない別世界にいるスター🌟」です。そういったスターを間近で見ることは、人生経験としては良いと思いますが、果たして共感できる子どもはどれだけいるのでしょうか。夢や希望を与えるのであれば、市内には一流の仕事をしている人たちが沢山いますから、そういった方々と定常的に交流する機会を増やした方が、子ども達にはよっぽどためになるのではないでしょうか。👨‍🏭👩‍🏭👨‍🔧👩‍🔧👨‍🔬👩‍🔬👨‍🎨👩‍🎨👩‍🍼</p>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="安竹による質問"></i></td><td>
オリパラ関係の費用、皆減になっているものがあるが、なぜ今のタイミングだったのか。8月の補正予算で減にできたのでは。（安竹 洋平）
</td></tr></table>

> 事業については8月等も含めてあった、オリンピックはその前に中止になっているが、その辺を見極め、この先事業等実施する可能性もあったので、オリンピックを盛り上げる事業として実施する可能性もあったので8月ということではなくギリギリまで。（篠宮）

<p class="situgi-comment"><span>🤔</span> 6月などはすでにコロナ禍でほとんどのイベントが中止になっている状況であるのに、なぜ6月定例会や8月の補正で予算減にしなかったのでしょう。もっと早く減にすれば、その分を他の予算に回すことができたはずですが・・・。</p>



### ＠ 総務委員会
{{#include ../partials/yasutake-speak.md:1}} 総務委員会には、一人会派の会から橋本久雄議員が委員として参加しています。

- [橋本 久雄 議員の質疑](#hasimoto-hisao)


<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
私立保育園の建設予定地は、運営業者が土地を所有するのか。
</td></tr></table>

> 事業者から提案をもらい、予定地も業者が選定している。賃借で土地を調達していると聞いている。（森田 保育課長）

<p class="situgi-comment"><span>🤔</span> 議決を経ていないのに、業者はすでに土地を調達しているのでしょうか。</p>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
財政調整基金は、「今使えるものは今使う」という感覚で予算編成できないか。
</td></tr></table>

> 財政調整基金は今回7億円積み増すが、昨年度末29億円あったものを今年度は大きく取り崩しており、今回積み増しても24億円。目標額の35億円より10億円以上少ない。使い切ると今後もし台風被害や災害が起きても新しいことはできないため、ある程度の積み立ては必要。（尾崎 財政課長）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
新設保育園の定員数は。今後待機児童解消をどう進めるか。
</td></tr></table>

> 72人定員を検討。市内全域では児童数は減少傾向だが、1、2歳児や市の東地域に待機児童が今後多く見込まれる。そのほか、定期利用保育事業、幼稚園の認定こども園化など、あらゆる方策を検討している。（森田）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
財政調整基金の考え方は。
</td></tr></table>

> 35億円の目標額変更は考えていない。現在は24億円ちょっとで、多い少ないをどう考えるかは大事。平成28年度に18億円ほど取り崩した。繰越金が予算を下回り、交付税も予算を下回り、予算の見立てがうまくいかなかったため。そういうことを考えると35億円というのは一定の適正な数値。来年度は税収も厳しくなる。今どんどん使うと、来年、再来年度がさらに厳しくなり、最後のセーフティネットさえもうまくできなくなる恐れがある。そういったことは厳に避けなければならない。（津嶋）

<div id="hasimoto-hisao"></div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
コロナ対策は8月に前倒しで行ったということだが、他市は前倒しで色々やっている。三鷹市は「デリバリー三鷹」という事業で学生が宅配サービスを行う事業を行っている。小平市に大学生は何人いるか把握しているのか。（橋本 久雄）
</td></tr></table>

> 学生に対しては国が給付策を打っており、特に現状として小平市独自ではやっていない。（津嶋）

> 朝鮮大学校以外の学生の数は令和元年9月時点で2万2,831人。市内在住の学生はそのうち3,194人（松尾 市民協働・男女参画推進課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
オリパラ基金は廃止して全額一般財源に戻したらどうか。（橋本 久雄）
</td></tr></table>

> 廃止して一般財源に溶け込ませて来年やるときに一般財源から出すことは手法として可能。しかし基金を廃止しなければならない理由がない。来年度実施する予定で事業を進めているので、せっかく積んだ基金の廃止は考えていない。（津嶋）

<p class="situgi-comment"><span>😤</span> 津嶋部長は分かって言っているのですが、基金にするということは「他の用途に使えない」ということです。もっとお金を使うべきことが他に沢山ある状況で、5.3千万円が自由に使えなくなることは大きなマイナス（機会損失）です。</p>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
一般質問でもしたが、8千世帯程度の人が生活保護基準以下で暮らしている。そういう方々に対し、1世帯5万円くらいの給付金を出す事業などはどうか。（橋本 久雄）
</td></tr></table>

> 状況は逐次担当課の方で説明をしている通り。当然足りなくなれば補正予算を組んでいく。現状は当初予算でまだ不足がないため今回の補正に盛り込んでいない。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
生活保護は最後のセーフティネットで単身者の場合年収220万～230万円、貯金は5万円？8万円？が条件。もっと市は積極的に市報やホームページでアナウンスをしてもらえないか。（橋本 久雄）
</td></tr></table>

> 生活保護受給者の世帯及び人員は緩やかながら年々増加していたが、平成30年度に人員が微減となり、昨年度も世帯は増えたものの人員は減少している。今後は高齢化の進展、コロナの影響により生活に困窮する方が増加することが予想される。収入が減少した方などへの住居確保給付金による家賃支援、社会福祉協議会で行う小口の貸付制度など、非常に多くの方への支給がなされているところだが、生活保護の制度はもとより、このような支援策について引き続き周知していく。はい。（井出 生活支援課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
財政調整基金は他市と比較してすごく少ない。立川市は平成28年のレベルで81億円、三鷹市は40億円、日野市が42億円、類似市平均が46億円で、小平市は25億円だった。なぜそのようなことになっているか。（橋本 久雄）
</td></tr></table>

> 確かに他市と比べて小平市は後ろの方にある。我々の方でも原因を検討してきた。全て分析できているわけではないが、他市との比較では補助等と言うところが大きく出ている。一部事務負担組合、ごみ処理場に関する負担金が大きく、小平市の場合は1市民あたりで見ると多くなっている。また、昭和病院企業団に対する助成金についても、大きく負担金を支出している状況で、この辺が他市と比べてかなり多くなっている。また、市民一人当たりの歳入も低い状況。つまり、収入が少ない割に、一部事務組合に対する補助は大きく支払いをしており、その財源分をこういった財政調整基金等で賄っている状況。（尾崎）

<p class="situgi-comment"><span>👏</span> これは良いやり取りです。うすうす感じていましたが、ごみ処理場と昭和病院企業団の負担金が市の財政に重くのしかかっている状況ということです。私も選挙前にごみ処理場のことは調べて問題点を挙げていましたが、このあたり再度精査が必要です。執行部もその問題点を認識しており、つまりこれらの事業は「現在の執行部が主体的に決めたわけではない」ということを暗に言っていると思います。誰が決めたのでしょうか。やはり市長の責任でしょう。</p>

<div class="redbox">

ごみ処理場と昭和病院に関する精査が必要

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
学校で6年生の移動教室などについて中止する場合、キャンセル料は誰が負担するか。この負担分は保護者には説明しているのか。（橋本 久雄）
</td></tr></table>

> 実施の2週間前までについては企画料というのがあり、これは公費で支払う予定。2週間を超えた場合は保護者の負担となる。（国冨 教育指導担当部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
オリンピックの観戦事業が中止になった場合もキャンセル料を保護者が負担するということか。（橋本 久雄）
</td></tr></table>

> オリンピック観戦事業が中止になった場合、保護者の負担はない。（三井 スポーツ振興課長）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
保育園の公募に関して、（上記・中江議員が本会議で質問した通り）総計予算主義の原則に反しているのではないか。（橋本 久雄）
</td></tr></table>

> 4月1日時点の待機児童数を、今年度は5月12日に公表している。その間、待機児童の中身を精査し、市の東側地域、回田町、鈴木町、花小金井南町、花小金井、この地区に待機児童が多くなっていることが顕著に現れたので、それに対応する民間の認可保育園の提案受付を5月に開始した。民間の事業者から提案を受け、計画の中身や施設規模を協議し、適切な施設であるか、建設費は適切であるか、そういうことを協議した中で、今回補正の中では国、東京都の補助も含めて、市としてどういった補助金ができるのかということで補正に計上。より的確で効果的な待機児童対策ということでは、当初予算よりは9月の補正で載せさせて頂いている。（森田 保育課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
待機児童数の予測を立てているなら当初予算で計上できるのでは。（橋本 久雄）
</td></tr></table>

> 子ども・子育て支援事業計画では、今後の就学前児童数や確保数の見込みをしているが、年度ごとの、どの地域が待機児童が多いとか、どの地域に認可保育園を作ればいいか、そういう具体は4月以降（実際に申し込みがあってから）にならないと分析ができない。当初予算では間に合わないため、年度に入ってからの具体的な対策ということで進めている。（森田）

<p class="situgi-comment"><span>🤔</span> たしかに4月にならないと待機児童数が確定しないというのは仕方のないことと思います。それならば5月の公募前に補正予算を立てれば良いだけではないでしょうか。また、事前に入園希望者数をアンケート調査などで把握する方法はないのでしょうか。</p>

<div class="redbox">

5月公募前に補正予算は出せないのか。また、事前にアンケート調査を行うことで4月より前に待機児童数を見積ることが可能では。

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
新小平駅公衆喫煙所の整備はなぜ今頃か。現在の場所は汚いので掃除をして欲しい。（橋本 久雄）
</td></tr></table>

> 当初他の3か所と同時に改修を予定していたが、JR東日本が所有する土地については喫煙施設を全て撤去するという社内方針が示された。市としては新小平駅前に公衆喫煙所は必要と考えており、JR東日本以外の土地を探していたところ、駅前広場の中に市民が所有する土地があり所有者の了解も得られたため移設し、今回予算計上した。駅前広場は業務委託により毎日清掃、樹木の選定は高木は年に1回行っている。適切な管理に務める。（神山 環境政策課長）

<div class="redbox">

土地は無償で提供してくださっているのか

</div>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
多胎児について大変なことは十分理解している。一方で、多子世帯、年子の子どもがいる世帯も大変。多子世帯へ同額の商品券補助をしてもらえないか。立川市は（子どもがいるいないに関係なく）全市民1人に1万円の支給を行った。（橋本 久雄）
</td></tr></table>

> 多胎児に限らないところで、ソフト面の支援として平成29年度からゆりかご・こだいら事業を行っている。今年度からはその事業を拡充して子育て世代包括支援センターを立ち上げた。妊婦の全数面接や産前・産後サポート事業、さらに支援の拡充を行い産後ケア等の事業も行っている。コロナ対策として東京都のママパパ応援事業等も使って追加の育児パッケージも配布している。他市世帯への商品券等配布については、年子は何歳離れていればいいとか、多子は何人ぐらいが該当するかとか、1人のお子さんの世帯でも、例えば母親の体調や体力がないところで移動支援も大変という家庭もあるので、その辺の線引きが非常に難しいという課題があり、現在は考えていない。（櫻井 健康推進課長）



<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
今回コロナ対策の事業がないのは、市長の指示によるものか。
</td></tr></table>

> 市長として、まず8月の臨時議会で成立した補正予算4号、こちらの動向を見ながら、またさらに必要があればタイミングを見てコロナ対策をやっていくんだということで指示を受けている。市長の指示で全てやってきている。特にやるなというような指示ではなく、コロナ対策は早くやる必要があるということで、8月の臨時議会でできるだけ多くの事業の組立を行った。今後も必要があればタイミングを見ながらしっかりコロナ対策はやっていく必要があると指示は受けている。（津嶋）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
今回の補正予算で市民の代表である議員が提言をしたもので取り入れたものはあるか。
</td></tr></table>

> 今回の5号補正ではその辺で対応したものはなかったと考えている。今後8月補正で組んだ事業の実施を見極めながら、必要に応じて対応していく。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
多胎児のところで、対象数、支給方法、運用は。
</td></tr></table>

> 3歳未満の多胎児が対象で、64世帯を想定。支給方法は3、4か月児健康診査や1歳6か月児健康診査、ほぼ100%の方が受診するためこの健康診査の中で渡す予定。運用方法として、対象については面接を受けることが要件の一つで、すでに面接している方もいる。面接が出来ていない方にはアンケートを送り家庭の状況を確認して渡す。（櫻井 健康推進課）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
保育園の公募が議会での予算審査前に行われていることについて、もし予算が可決されなかったらどうなるのか。議会を通さないで話が進むのは議会軽視では。
</td></tr></table>

> ここ数年の新設については、的確で効果的な待機児童対策ということで、5月に公募を行い9月の補正予算ということでここ数年、本年4月の認可保育園の新設についても同じような手法で実施している経緯がある。補助なしに運営できない、そもそもの計画が進まないということころがあるので、何とか補正で審査頂ければと考えている。可決されなかった場合、補助金がつかないということになるため新設は難しくなる。事業者と、どの範囲で出来るのかなど協議を進めることになる。（森田 保育課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
補正予算の前に話を進めるということになると、これが通らなければ議会のせいとなる。保育の業者からの信頼を失うことにつながる。議会の審査する立場としてやりにくく、正当なやり方なのか。
</td></tr></table>

> 4月以降待機児童が確定し、準備行為ということで事業者と協議を進めた。予算措置というよりはその前の準備ということで、補正予算の額が確定したところで審査してもらっている。（森田）

<p class="situgi-comment"><span>🤔</span> 担当課なども、これは問題のあるやり方だと認識しているような答弁です。スピード感を持って対応できることは分かりますが、上記したように5月公募前に補正予算を議会に提出すれば良いのではないでしょうか。また、事前に入園希望者のアンケートを取って待機児童数の見積りを正確にするなど、方法を工夫する必要もありそうです。</p>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
オリパラ基金の使い方としてバスに皆で乗るなら3密を避けるなど以前の想定通りではなく、事業を再構築する必要がある。基金をそのままにするなら前の計画のままということになるがどう考えるか。
</td></tr></table>

> 事業自体どうなっていくかはこれから検討されていくのかなと考える。来年度の当初予算に向けて大きく動いてくると考えており、まだ現在今回の補正についてはなかなか情報もない中で検討できなかった。（尾崎）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
3密はダメだという情報はかなり前からあった。バスは当然そういう状況になる。情報がないからできなかったというのは仕事としてどうかと思うが、どうか。
</td></tr></table>

> 9月4日に東京2020大会における新型コロナウイルス感染症対策調整会議の第1回が開催された。今後、大会全体のコロナ対策についての方向性が示された後、学校連携観戦プログラムについては、東京都から一定の方針が示されると認識している。その実施方針とともに、市としても感染症対策については教育委員会とともに十分に検討する。（三井）

<p class="situgi-comment"><span>🤔</span> これも職員は問題を認識しているような、核心を避けた答弁です。市長が無理を通しているように感じます。</p>


<!--

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
キャッシュレス決済事業化の背景は。
</td></tr></table>

> 商品券も検討したが、キャッシュレス決済を導入した自治体が7あり、特に混乱や問題なく進んでいることから職員で協議し現時点のベストと考えた。新型コロナは感染すると高齢者ほど重症化するという面で経産省の方でもキャッシュレス化を進めている。（尾崎）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
キャッシュレス決済の経済波及効果は。
</td></tr></table>

> 携帯電話会社の調査によれば現在70代以上の56%がスマホを持っている。経済波及効果は、今回2.6億円分還元するため、30%で割り戻すと約8.7億円ほど。（齋藤 産業振興課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
本会議でも質問があったかもしれないが、GIGAスクールのタブレット配備で現場の教員負担が増えることへのサポート、予算に見られないが。
</td></tr></table>

> 導入時に一時的に業務増になることは避けられないが中長期的にはタブレット端末等の活用は業務減になる。9月初旬に開催される都の対応研修などを活用しながら、導入がスムーズにいくよう検討する。（国冨 教育指導担当部長）

<div id="hasimoto-hisao"></div>

<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
市民協働・男女参画推進課、地域センター維持管理事業は不要と考えているが、具体的に何をするか。（橋本 久雄）
</td></tr></table>

> 地域センターは、換気用網戸が13館に未設置、トイレの手洗い自動水洗が16館に未設置で、これをつけるもの。空調設備は昨年夏から故障していた3館11基分を修繕。（松尾 市民協働・男女参画推進課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
市民文化会館管理運営事業で5,635万円が空調設備と大階段入口自動ドア設置で計上、わざわざこの時期にやる必要があるか。中に置いてある消毒液を使えばいい。コロナが終わったころの完成か。（橋本 久雄）
</td></tr></table>

> 不特定多数の来客がドアノブに触れる機会を減らすことでwithコロナ時代に対応させるもの。令和2年に設計、令和3年に繰越明許の予算で設置。完成時期は未定。（島田 文化スポーツ課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
子ども家庭支援センターの60万円、電気自転車2台計上の必要性は。（橋本 久雄）
</td></tr></table>

> 子ども家庭支援センターは基本的に外に出かけていく。学校の休校で家庭訪問の件数が増えている。平成25年に電動自転車が市から2台貸与あるがワーカーも増えて移動手段が不足するため。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
学童クラブの79人の職員は期間限定か、延べ人数が79人ということは実際は何人か。（橋本 久雄）
</td></tr></table>

> 人数は当初予算に記載の79人であり、新しく人を雇うわけではない。新型コロナ対策として学童クラブの部屋、備品やトイレなどの清掃・消毒を会計年度任用職員が行っており、その勤務時間延長によるもの。実際は200人が交替で勤務している。（石野 子育て支援課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
健康センターエレベーター改修の内容は。今のままでは使えないのか。いつまでに完了か。（橋本 久雄）
</td></tr></table>

> 約30年間使用して老朽化が激しくなっている。3密になる場所で、乗っているときに故障が起きると良くないための改修。また、換気のリニューアルで経年劣化の換気機能低下も防ぐ。空気清浄機能、抗菌ボタンを設置。完了時期は未定だが9か月を想定。（櫻井 健康推進課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
子育て世代包括支援センター事業はなぜ4月28日から5月28日の1か月に限定したか。（橋本 久雄）
</td></tr></table>

> 緊急事態宣言が5月25日までで、里帰りもできない、親御さんが田舎から出てきて出産手伝いもできない時期として設定。（櫻井）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
資源循環課運営事業の148万円具体的な内容は。音響装置とは。（橋本 久雄）
</td></tr></table>

> 使用済みマスクやティッシュの捨て方の問い合わせが市民から、また収集作業員からも周知徹底の要望があり、収集作業者からの広報も考えたもの。（足立 資源循環課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
観光まちづくり事業581万円は何人分を想定か。（橋本 久雄）
</td></tr></table>

> 5万円食事券10本、3万円食事券30本、1万円食事券100本、5千円食事券200本で、合計340人分の商品を用意。人数参加の想定は特に決めていない。（齊藤）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
キャッシュレス事業の対象者想定数は。例えば15歳以上の市民、何割が使うことを想定した設計か。地域振興券なら全市民をカバーできるのでそういうことも考えてもらいたかった。これだけに特化するのは不平等と考えている。（橋本 久雄）
</td></tr></table>

> 昨年1月にNTTドコモの研究所が実施した調査では、男女とも15～49歳までが9割以上、70歳以上では男性56%、女性53%がスマホ所有。経済波及効果は先ほど8.7億円と答弁したが、ポイント利用も考え、総務省計算式に当てはめると13.8億円相当。利用できる方に使ってもらう。（齋藤）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
コミュニティバス運行事業支援の積算根拠は。（橋本 久雄）
</td></tr></table>

> 新型コロナの運賃収入不足分を補助。4～6月までは実績値、7月以降は想定値で、2～4月までの前年度比の減少率を傾斜配分しながら本年度内の年間利用者数を算出して計算。（照井 公共交通課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
小中学校の移動教室は今の時期やらなくてはいけないのか。保護者はやってほしいと言っているのか。（橋本 久雄）
</td></tr></table>

> 現時点では予防対策を行いながら実施する予定。感染者増を踏まえて小・中学校とも今後判断。中学校はスキー教室で1月以降。（飯島 学務課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
総合体育館の継続資金はどういう内容か。（橋本 久雄）
</td></tr></table>

> 休業に伴い、本来得られた団体及び個人利用の収入、自主事業で行った収入に加え、コロナ対策消耗費の関係を上乗せして補助。（島田 文化スポーツ課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
本庁舎エレベーター、3つあるうちの真ん中は故障して使えない。右側の1号と、裏にある4号の2つを改修するということだが、なぜ今改修する必要があるのか。（橋本 久雄）
</td></tr></table>

> 3台あるエレベーターは縦穴の空間が共有されており左右どちらかのエレベーターからでないと工事できないため今回は第1号機の工事を予定。エレベーター内換気の安定的な稼働を維持し、適切な換気を行うことが必要と判断した。部品の生産終了で真ん中の2号機は修繕できず動いていないが、1号機の部品を2号機に転用することで4代とも動かせるようにしたい。（原 総務課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
公共予約システム利用対象施設拡大は、今まで利用対象ではなかった施設も特に問題が生じていたことはなかった。なぜ今やる必要があるのか。（橋本 久雄）
</td></tr></table>

> 地域センター19館は予約システムが入っておらず、申し込み時の窓口混雑を避けるため。電子決済を入れて支払いをキャッシュレスにする。再構築とキャッシュレス対応でかなりの期間と金額になっている。（増原 情報政策課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
予約システム、いまやっていなくて済んでいるものを、なぜ今やらなくてはならないのか。来年度の当初予算でやったらどうか。いつまでに完了するのか。（橋本 久雄）
</td></tr></table>

> 既存の現行システムも含めた再構築となる。新システムの稼働は令和4年4月から。

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
証明書のコンビニ交付もなぜ今やる必要があるのか。システム構築に3,387万円のコストがかかり、コンビニ交付自体しなくていいという立場だが、いつ完成するのか。（橋本 久雄）
</td></tr></table>

> 今回の新情報システムの再構築は、ここで事業者のプロポーザルが終わり、優先交渉事業者が決まっている。そこと併せる形でコンビニ交付の構築を進めたい。新住民情報システム再構築の新しいシステム稼働は令和4年1月を予定でそれに動機させた形での稼働開始を予定。（増原 情報政策課長）

> 来年度以降では襲いうという質問だが、コロナ終息後あるいは終息が本当にあるか見えない中で、将来にわたって安全を高めることは大事。現在の新型コロナも形を変え、変質しながら何度か現れることもあるため、今から手を打つことは大事。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-exclamation-circle hitori" aria-label="一人会派 その他議員による質問"></i></td><td>
今から手を打つ内容がこれでいいのかということを言っている。今やらなければならない事業なのか。当初予算できちんとやるべき。証明書のコンビニ交付は令和4年からスタートなので、こんな中途半端な時期に予算をつけず当初予算につければよい。コロナとどう関係があるのか。ルネこだいらの自動ドアも同じ。一か所だけなので、押して入るドアも残る。コロナ関係ではない。トイレ水洗化、空調設備も1年後や半年後では実際には対応できない。公共施設予約システムもコロナが丁度お金が出るからやったと思っている。こういう事業をコロナにかこつけてやるのはやめて欲しい。第三次もそういうのが結構あった。武蔵野市はそんな事業は一個もない。すべて生活支援、事業支援。今はまだそういう段階で、こういうやり方は非常に問題がある。（橋本 久雄）
</td></tr></table>


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
市長の指示はどんなものがあったか。
</td></tr></table>

> 市長の査定も受けている。市内事業者への経済支援は当然のことながら、将来に向けての公共施設あるいは公共サービスを安全に安心して活用していくこともだいじであるということで、そっちの方にも事業展開する必要があるだろうということで指示を受けている。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
キャッシュレス決済の詳細は。
</td></tr></table>

> キャンペーン実施期間は10月から1月まで。1か月間ごとにそれぞれキャッシュレス決済業者に実施してもらう。現時点ではキャッシュレス決済事業者で自治体と協力しているのは1社のみ。市としてもう1社想定しており、調整できれば進める。内容は、支払い額の30%が30日後にポイント付与。1回当たりの付与上限は1千ポイント。期間中の付与ポイント上限は1万ポイント。商品券に限定するよりこちらの方が幅広く使える。市内何か所か、あるいは市役所で説明会を開き、高齢者でも利用できるよう周知徹底する。（齋藤）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
なぜ1か月ごとに区切っているか。
</td></tr></table>

> 1つの理由は1か月に複数のキャッシュレス事業者が入ると、どう扱っていいか分からないという方がいる。もう1つは、市外でポイントを消費する恐れがあるということに対応。ポイントは1か月後につくので、たとえば10月についたポイントは12月に付与される。Aという会社が10月と12月に行えば、10月についた分が12月から使えるため市内で消費してもらう。もう一つは7自治体ですでにキャッシュレス決済が完了しているが、傾向としてキャンペーンの終盤に駆け込み利用が多い。2か月連続で行うより1か月単位で交互に行った方がキャンペーン効果が高い。（齋藤）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
事業継続と新しい生活様式に分けた場合の予算額は。
</td></tr></table>

> 事業継続や生活支援に約5.7億円、新しい生活様式に約6.9億円。（尾崎） ＊これは委員会配布資料に記載されています。

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
コミュニティタクシー・コミュニティバスの事業継続支援の内容は。
</td></tr></table>

> 利用者が減少したことによる収入減への事業継続支援補助。感染予防対策補助として、バス・タクシーそれぞれに1台10万円。耐用年数を大幅に超えている車両（バス1台、タクシーは各ルート1台ずつ）を低燃費の車両に更新。終息後の運行事業者の経営支援にもつながる。（照井）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
コミュニティバス・タクシー耐用年数の詳細は。
</td></tr></table>

> コミュニティバスは5年、コミュニティタクシーは4年。車両の走行状況や、故障不具合の状況を見て判断。バス3台のうち1台は昨年度更新、残り2台は購入から12年が経過。タクシーは大沼ルートが7年経過で栄町と鈴木町ルートが5年経過。タクシーについては、いろんな部品やエンジン自体が消耗しており、ここ数年故障などが発生し、途中で止まってしまうことも年に1回、2回くらいある。担当課として計画的に車両の更新は毎年提案している。（照井）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
ルネこだいら空調設備改修の内容は。
</td></tr></table>

> 冷温水器が3台屋上にあるが、そのうち1台がかなり老朽化が進んで不具合もあるため、ヒートポンプチアを取り替える。（島田）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
施設整備全体の予算額は。また市内業者への発注は。
</td></tr></table>

> 正確に抜き出していない。大きく捉えているところだと3.5億円ほど。市内発注はトイレ手洗い自動水洗化、網戸設置、空調設備の改修、公園遊具の塗装・補修は大体市内で出来ると想定。（津嶋）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
防災備品の内容は。
</td></tr></table>

> 主なものとして、使い捨てマスク7万枚、フェースシールド750個、感染防護衣3,000枚、非接触型体温計150台、使い捨て手袋9,000枚、手指消毒液、次亜塩素酸ナトリウムを含む消毒液、毛布2,800枚、タオル2,700枚。（秋田 防災危機管理課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
住居確保給付金、利用者増加の実体と、生活保護の件数は。
</td></tr></table>

> 住居確保給付金の新鮮者数は7月27日時点で既に184人。緊急事態宣言下と比較すると減っているが途切れることなく相談が来ている。生活保護の決定件数は5月以降、昨年時期に比べて増えていない。おそらく第二のセーフティネットである住居確保給付金や緊急小口資金の申請があるためまだ生活保護まで至っていない。引き続き事業の広報に務める。（井出 生活支援課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
児童養護施設退所者支援給付金について、対象者の要件は。
</td></tr></table>

> ①児童養護施設の退所者であること、他にも、自立支援ホーム、児童自立支援施設、ファミリーホーム（里親）の対象者を含む。②市内在住であること。③基本的に単身者であること。④生活保護等公費により生活費の援助を受けていないこと。⑤「子ども・若者計画」の対象が29歳までであることから基準日5月25日の時点で30才未満であること。あくまで自立して一人で生活している方が困窮に陥ることを支援するため。

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
修学旅行が中学校は中止と聞いた。理由は。
</td></tr></table>

> 9月に実施を予定していた中学校5校は都内と関西の感染状況から中止を決定。代替の企画は未定。（国冨）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
GIGAスクール構想でオンライン授業に向けての取組はどう考えているか。
</td></tr></table>

> GIGAスクール構想が成り立った後は、朝の会、帰りの会の学習の始まりと終わりについて、同時に双方向でのやり取りをし、実際の学習はオンラインの学習ツール等を使っての学習を想定。端末は主に学校の教育活動で使うことを想定しているが、万一休校等の措置がされた場合は貸出も踏まえて検討していく。

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
現在市として把握している来年度予算の厳しさは。
</td></tr></table>

> 詳しいところは正直見えない。一つの例としてリーマンショック時市税が10億円近く減った。今回も同様かは今後の経過を見る。いずれにしろ例年どおりの予算編成は難しいと想定。（尾崎）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
GIGAスクール構想の段取りは。
</td></tr></table>

> タブレットは仮契約し、9月定例会で議決。その後タブレット、ネットワーク、電源キャビネットを含めて全て令和3年3月までに環境整備が整う予定。（飯島 学務課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
ルネこだいらのホームページを今リニューアルする必要性は。
</td></tr></table>

> ①今のホームページでは動画が見られない。動画を公開できる環境を実装する。②ふるさと村のホームページをレスポンシブ対応にする。③アクセス数を把握する機能をつける。（島田 文化スポーツ課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
観光まちづくり事業の第一弾「モリモリ食べてモリあげよう！」の状況は。
</td></tr></table>

> 7月1日から始まって約800店舗参加で応募が現在80件。これから1万円分たまり8月中はかなりの数に上ると予想。（齋藤）

#### 総務委員会での賛否

<table class="simple">
<tr><th>会派</th><th>賛否</th></tr>
<tr><td>一人会派の会</td><td>❌反対</td></tr>
<tr><td>政和会</td><td>❌反対</td></tr>
<tr><td>公明党</td><td>⭕賛成</td></tr>
<tr><td>フォーラム小平</td><td>⭕賛成</td></tr>
<tr><td>共産党</td><td>⭕賛成</td></tr>
</table>


## 本会議でのやり取り

### 組み替え動議
<details>
<summary>組替え動議（クリックで内容表示）</summary>

> 議案第44号令和2年度小平市一般会計補正予算（第4号）に対する組替え動議  
> 小平市議会議員松岡あつし　鈴木洋一
>
> 1.件名  
議案第44号令和2年度小平市一般会計補正予算（第4号）に対する組替え動議  
>
>2.提案理由  
令和2年度小平市一般会計補正予算（第4号）の主な財源である地方創生臨時交付金に関して、内閣府は新型コロナウイルス感染症に対応する取組である限り、その使途について基礎自治体に大きな裁臺を与えている。よって、新型コロナウイルス感染症の影響を受けている市民の誰もが、10億円に及ぶ交付金の使途に対して高い関心と期待を寄せているため、市が編成をした一般会計補正予算（第4号）の内容は、真に市民にとって最大限有効に活用されるものであるかが問われている。  
一般会計補正予算（第4号）には数多くの支援施策が打ち出されているものの、先般の6月定例会の中で小林市長が述べられていた「経済を守る、雇用を守る、社会的弱者を守る」という目的を達成するためには、施策をより一層充実させる余地があると考える。  
その財源確保のため、公共施設の改良・改修工事等不急の事業については今後の財政運営の中で改めて計画的な事業実施で対応することとし、減額を行う。そして、新型コロナウイルス感染症の感染拡大の状況が続き、平時と呼ぶには程遠い市民生活の現状に鑑み、確保した財源を活用し売上げが大きく減ったままの市内事業者への支援及び地域経済の活性化を行うこと。すなわち、キャッシュレス購入へのポイント付与だけではなくより多くの方が活用をできるよう地域振興券の発行等、経済支援を拡充すべきである。  
一般会計補正予算（第4号）を臨時会で審査するのは、まさに今市民が必要としている施策を速やかな審査及び予算の執行により、施策の効果が最大化されることを期待するからである。さらにはこの国難ともいえる事態を市と市民が一体となって乗り越えていく意識を醸成、共有することにつながると確信している。  
以上の理由により、議案第44号令和2年度小平市一般会計補正予算（第4号）について以下のとおり速やかに組替えの上、再提出することを要求する。  
>
>3.提案内容  
(1)財源の捻出  
以下の予算を減額することにより、(2)の財源を確保する。  
>1. 本庁舎のエレベーターの改修工事にかかる経費（121,522千円）の減額
>1. 健康センターエレベーターの改修工事にかかる経費（56,937千円）の減額  
>1. 地域センターの空調設備購入にかかる経費（10,107千円）の減額  
>1. 地域センターのトイレの手洗い自動水栓化にかかる経費（7,008千円）の減額
>1. ルネこだいらの自動ドア設置にかかる経費（9,052千円）の減額
>1. 公共施設予約システム利用対象施設拡大（48,672千円）の減額
>1. ルネこだいらのホームベージリニユーアル（4,798千円）の減額  
>減額金額の合計：258,096千円  
>
>(2)増額の内容  
より多くの市民が利用できる地域振興券の発行事業や、アンケート調査を検証した上で、売上げが減少している市内事業者への給付事業等の追加を行うために、小平市中小企業等支援給付金事業費を増額する。

</details>

政和会から組み替え動議が出されました。1の財源の捻出部分については、一人会派の会からの要望で内容を調整しています。2の増額の内容には賛同できない部分もあります。しかし、いずれにしろ否決されることが分かっていたこともあり、私もこの動議に賛成しました。意見表明の機会が増えること、ほんの少しでも否決の可能性が高まれば、という思いも（わずかに）あってのことです。その時点で想定していたのは

［組み替え動議］ → 組み替え動議は結局否決 → ［議案に反対］→ 原案は結局可決

という段取りです。結局この流れになりました。

#### 組み替え動議に対する質疑

Q: 地域振興券にかかるコストは。  
A: 詳細の数字はない。

Q: 困窮する一般市民への考えは。  
A: 支援は必要だが商工費が低い。

Q: 地域振興券はコストがかかる、ポイント付与は市民に還元できるという話だった。地域振興券についてこだわる理由は。コストは。全額市民に還元できるか。  
A: こだわっているわけではないが高齢者も使える。ポイントと両方やっても良い。市内事業者に還元することで経済を回せる。そもそも商工費が少ないというところがある。

Q: 中小企業への支援のみと見えるが、どう考えるか。  
A: 市内で企業が困っていればそこに使ってもらえれば。


#### 組み替え動議に対する討論
＊概要ですので、実際の討論は[会議録等](index.md/#会議録配布資料)をご参照ください。

<h5 style="margin-bottom:0"><span class="highlight">⭐賛成（一人会派の会：橋本久雄）</span></h5>

- 先送りしてきたものをコロナに乗じて実施している
- オンライン化の施策がない
- 事業者や市民は支援を必要としている。市民意識との乖離が否めない
- 1～7は一人会派の会と調整したが、さらに多くの減額が必要と考えている
- コロナ対策では、民生費が一番多くなければならないと考えるが、少ない
- 小平市はこういうことを良くやるが、このまま続けていいのか  

<h5 style="margin-bottom:0">反対（公明党）</h5>

- 不急と判断していない
- 地域振興券が市民にいきわたるかは疑問
- 次の補正に期待する

<h5 style="margin-bottom:0">反対（フォーラム小平）</h5>

- 地域振興券は印刷・発行でコストがかかる、キャッシュレスなら店舗側設備投資不要
- 予算減額の1～7については、インフラは今日明日でできるものでない、安全安心が必要

<h5 style="margin-bottom:0">反対（生活者ネットワーク）</h5>

- 地域振興券が市民にとって公平なのかが分からない
- 市内事業者への支援が1.2%というのが少ないから嫌だという風に受け取った
- 時間的に確かめられない
- withコロナを考えると市のインフラを整えることは必要
- ICTの活用は必要になる

<h5 style="margin-bottom:0">反対（共産党）</h5>

反対討論なし

<h5 style="margin-bottom:0">反対（まちづくり市民こだいら：水口議員）</h5>

- 組み替え動議の趣旨には賛同
- 動議が可決された場合、補正予算の執行が遅くなることを懸念
- この中で速やかに確実に実行してほしいことは、特に児童養護施設等退所者への支援金

{{#include ../partials/yasutake-speak.md:1}} 反対した会派が理由に挙げている一つが、地域振興券のコストがかかるという点です。読めば分かる通り、それが趣旨ではないんですけれどね。それ以外の点については何を言っているのか分からないことも多かったのですが、もともと原案に賛成だからということでしょう。であれば「<strong>原案に賛成のため反対する</strong>」とだけ言えばいいのにな、と思います。また、水口議員が反対したのは意外でした。主な理由として「動議が可決された場合補正予算の執行が遅くなる」とあります。上記しましたが、その論理だと今後一切の反対ができないことになってしまいます💦

### 原案に対する討論
＊概要ですので、実際の討論は[会議録等](index.md/#会議録配布資料)をご参照ください。

<h5 style="margin-bottom:0"><span class="highlight">⭐反対（一人会派の会：伊藤央）</span></h5>

- 評価できることはある。ごみ事業者への支給、小中学校の給食調理室へのスポットクーラーの設置、GIGAスクールの教職員用および予備用のタブレット購入
- これらの事業が不急とは思っていない、むしろ遅すぎる
- やっておかなければならなかったことを先送りし、お金が入ったからやってしまえと
- 来年市長選がある中での繰越し明許費は、民主主義の、選挙に対する認識としておかしい
- 自動ドア、自動水洗、いまやることか、これを知ったら多くの市民が怒る
- 人が集まることが難しくなっている時期に、人が集まる施設にお金を集めている
- オンラインに対する施策がなく将来をまったく見ていない
- いままでやってこなかったツケを払っているだけの予算
- 経営者の方、生活が本当に苦しい市民を思い浮かべると、当会派は手を上げられない
- 市民に対する裏切りであり、反対する

<h5 style="margin-bottom:0">反対（政和会）</h5>

- 市内事業者への支援が不十分
- 不急の公共施設の整備事業が散見される

<h5 style="margin-bottom:0">賛成（公明党）</h5>

- ハード事業に予算が多い点は不急か議論がある。すべて不急と判断していない
- 新しい生活様式に即した改修は重要
- 商工費に対する補助は議論が必要、実体を調査の必要がある
- できることを少しづつやっていくしかない
- ある一定の評価はしている

<h5 style="margin-bottom:0">賛成（フォーラム小平）</h5>

- 新しい生活に対応するための経費
- 当会派から要望していた定額給付金の支給からもれた新生児への支援、自動養護者施設退所者に対する支援などが反映されたことを高く評価
- キャッシュレスポイント事業は予算全額を市民に還元できる

<h5 style="margin-bottom:0">賛成（共産党）</h5>

- 委員会審査を経て明らかになった推進すべき事業が複数ある
- コミュバス・タクシーの運行支援、市民協働でスタートさせた事業を継続させる
- 公立昭和病院への特別財政支援、財政支援が必要とされているということで予算化された
- 住居確保給付金事業、 障害者施設事業所従事者特別支援金、育児パッケージの追加配布、児童養護施設等対象者支援金、網戸設置は評価できる
- キャッシュレス決済は国の誘導そのまま小平市の事業に乗っており不平等さが残されている
- 市民からの要望、議会からの要望がどの程度反映したか、不十分さがある
- 市民の願いが一つ一つ結実する予算に全体としてなった

<h5 style="margin-bottom:0">賛成（生活者ネットワーク）</h5>

- 市民や事業者の生活や運営が置き去りになっていないか懸念が残る
- 住居確保給付金の増は評価できる
- PCR検査センターの一日も早い設置、コロナ感染者の宿泊療養先確保を市として行う必要
- 二号補正の家賃支援事業、見込みを誤ったのは市として事業者の声を把握していなかった
- 地域活性化事業は店舗によってはポイント付与のための整備までカバーできているか
- オンラインで市民や事業者の生の声を聞けるような方法を構築せよ

<h5 style="margin-bottom:0">賛成（まちづくり市民こだいら：水口議員）</h5>

- 多くの疑問を感じる事業が含まれている
- 最も大きな疑問は、キャッシュレス決済で、70歳以上スマホを持たない人が4割以上。さらにアプリが使えるという一部の人に2.6億円使うのは公平性の観点から大きな問題
- 本庁舎エレベータ改修が今必要なのか、コロナ対策のお金として適切か、コロナで困っている人に回せないか
- 公園の抗菌塗料がコロナ対策として効果があるか疑問
- 評価できる事業もある、昭和病院の支援、住居確保給付金増額、地域センター予約オンライン、自動通話録音機の買い足し、夏季期間事業延長のアシスタント職への補助、児童養護施設等退所者への補助

{{#include ../partials/yasutake-anger.md:1}} 本当に毎回思いますが、なぜ彼らは反対かのような意見を述べておきながら賛成に回るのでしょうか🤥。まったく分かりません。反対したら全てが破綻するとでも思っているのでしょうか？「<strong>議員しかできない</strong>」という立場を理解していない、もしくは舐めているように思います。ということを上の方にも記載しました。

張ります💪


### 原案に対する賛否
[賛否についてはこちらをご覧ください。](./index.md#賛否)
-->