/*
sligkgrid-es6は含まれるslickgridのバージョンが古いため、autocolumnsizewidthが使えず。。オリジナルで代替。
import { Data, Grid, Editors, Formatters } from 'slickgrid-es6';
import './slickgrid-src.scss';
import $ from 'jquery';
*/

const Data = Slick.Data;
const Grid = Slick.Grid;
const GridAutosizeColsMode = Slick.GridAutosizeColsMode;

//"kan_id","kan_name"
const kanMap = new Map([
  [2,"総務費"],
  [3,"民生費"],
  [4,"衛生費"],
  [7,"商工費"],
  [8,"土木費"],
  [10,"教育費"],
  [13,"予備費"]
]);

// "kan_id","kou_id","kou_name"
const kouArray = [
  [2,1,"総務管理費"],
  [3,1,"社会福祉費"],
  [3,4,"児童福祉費"],
  [4,1,"保険衛生費"],
  [4,2,"清掃費"],
  [7,1,"商工費"],
  [8,3,"都市計画費"],
  [10,1,"教育総務費"],
  [10,2,"小学校費"],
  [10,3,"中学校費"],
  [10,4,"社会教育費"],
  [10,5,"保健体育費"],
  [13,1,"予備費"]
];

const kouMap = new Map(
  kouArray.map(arr => {
    return [arr.splice(0, 2).join("-"), arr[0]];
  })
);

//"kan_id","kou_id","moku_id","moku_name"
const mokuArray = [
  [2,1,1,"一般管理費"],
  [2,1,8,"情報システム運営費"],
  [2,1,9,"安全安心まちづくり費"],
  [2,1,10,"地域振興費"],
  [2,1,11,"市民文化会館費"],
  [2,1,13,"諸費"],
  [3,1,1,"社会福祉総務費"],
  [3,1,2,"障害者福祉施設管理費"],
  [3,1,3,"障害者自立支援給付費"],
  [3,4,1,"児童福祉総務費"],
  [3,4,2,"保育所運営費"],
  [3,4,3,"児童福祉施設管理費"],
  [3,4,4,"児童助成費"],
  [3,4,6,"学童クラブ費"],
  [3,4,7,"児童館運営費"],
  [4,1,1,"保健衛生総務費"],
  [4,1,3,"保健衛生指導費"],
  [4,2,1,"清掃総務費"],
  [4,2,2,"塵芥処理費"],
  [4,2,4,"資源循環推進費"],
  [7,1,2,"商工振興費"],
  [8,3,1,"都市計画総務費"],
  [8,3,2,"公園緑地費"],
  [10,1,2,"教育指導費"],
  [10,2,1,"学校管理費"],
  [10,2,3,"学校保健体育費"],
  [10,3,1,"学校管理費"],
  [10,3,3,"学校保健体育費"],
  [10,4,5,"公民館費"],
  [10,4,6,"図書館費"],
  [10,5,3,"体育館費"],
  [10,5,4,"学校給食費"],
  [13,1,1,"予備費"]
];

const mokuMap = new Map(
  mokuArray.map(arr => {
    return [arr.splice(0, 3).join("-"), arr[0]];
  })
);

const tantoukaMap = new Map([
  [00000000,"担当課なし"],
  [10100000,"政策課"],
  [10500000,"情報政策課"],
  [10600000,"財務課"],
  [15100000,"総務課"],
  [15700000,"防災危機管理課"],
  [15800000,"地域安全課"],
  [25200000,"市民協働・男女参画推進課"],
  [25400000,"産業振興課"],
  [25800000,"文化スポーツ課"],
  [30100000,"子育て支援課"],
  [30400000,"保育課"],
  [35100000,"生活支援課"],
  [35300000,"障害者支援課"],
  [35500000,"健康推進課"],
  [40100000,"資源循環課"],
  [40400000,"水と緑と公園課"],
  [50500000,"公共交通課"],
  [70200000,"学務課"],
  [70300000,"指導課"],
  [70600000,"公民館"],
  [70700000,"図書館"]
]);

const jigyouMap = new Map([
  [00000,"財源移動"],
  [20108,"多摩六都科学館組合事業"],
  [20708,"庁舎管理事業"],
  [21101,"情報システム管理・運営事業"],
  [22504,"地域センター維持管理事業"],
  [22505,"小平小川元気村おがわ東維持管理事業"],
  [22705,"防災施設の維持管理事業"],
  [22707,"防災施設及び備蓄品の整備事業"],
  [23301,"私立幼稚園教育充実振興事業"],
  [24102,"防犯対策事業"],
  [24502,"市民文化会館管理運営事業"],
  [24507,"平櫛田中彫刻美術館管理運営事業"],
  [30310,"幼児養育費補助事業"],
  [30313,"子ども家庭支援センター事業"],
  [30314,"子ども広場事業"],
  [30322,"学童クラブ事業"],
  [30324,"児童館運営事業"],
  [30338,"児童養護施設等退所者支援給付金事業"],
  [30701,"保育課の運営事業"],
  [30703,"認証保育所等補助事業"],
  [30705,"民間保育園等運営事業"],
  [30707,"市立保育園の運営事業"],
  [30973,"生活困窮者自立支援事業"],
  [31305,"障害者福祉施設管理事業"],
  [31374,"障がい事業所等業務継続支援事業"],
  [40501,"健康センターの管理運営事業"],
  [40504,"保健衛生促進・啓発事業"],
  [40536,"1歳6か月児健康診査（一般・精密）事業"],
  [40549,"乳児健康診査等事業"],
  [40551,"3歳児健康診査（一般・精密）事業"],
  [40567,"子育て世代包括支援センター事業"],
  [40701,"資源循環課の運営事業"],
  [40703,"塵芥処理事業"],
  [40706,"リサイクルセンターの管理運営事業"],
  [70516,"小口事業資金融資事業"],
  [70532,"観光まちづくり推進事業"],
  [70537,"小平市中小企業等支援給付金事業"],
  [81105,"公園の維持管理事業"],
  [81902,"コミュニティバスの運行事業"],
  [81903,"総合的な交通体系整備支援事業"],
  [100503,"小学校管理事業"],
  [100504,"小学校施設維持管理事業"],
  [100510,"小学校移動教室運営事業"],
  [100512,"中学校管理事業"],
  [100513,"中学校施設維持管理事業"],
  [100519,"中学校移動教室運営事業"],
  [100521,"小学校給食運営事業"],
  [100522,"中学校給食運営事業"],
  [100528,"小学校再開に伴う感染症対策・学習補償等支援事業"],
  [100529,"中学校再開に伴う感染症対策・学習保障等支援事業"],
  [100709,"特別支援教育推進事業"],
  [101119,"市民総合体育館維持管理事業"],
  [101301,"公民館共通管理事業"],
  [101501,"中央図書館運営管理事業"],
  [101509,"仲町図書館運営管理事業"],
  [101514,"花小金井図書館運営管理事業"],
  [101517,"小川西町図書館運営管理事業"],
  [101519,"喜平図書館運営管理事業"],
  [101521,"上宿図書館運営管理事業"],
  [101523,"津田図書館運営管理事業"],
  [101527,"大沼図書館運営管理事業"],
  [130101,"予備費"]
]);

const himokuMap = new Map([
  ["01-92","会計年度任用職員（アシスタント職）報酬"],
  ["07-03","記念品等"],
  ["10-01","消耗品費"],
  ["10-03","食糧費"],
  ["10-06","修繕料"],
  ["10-09","医薬材料費"],
  ["11-01","通信運搬費"],
  ["11-04","手数料"],
  ["12-06","機器等保守整備委託"],
  ["12-07","事務処理等委託"],
  ["12-08","イベント業務委託"],
  ["12-09","サービス業務委託"],
  ["12-13","施設等維持管理委託"],
  ["12-16","電算関係業務委託"],
  ["12-20","設計等委託"],
  ["12-29","健康診断等委託"],
  ["13-01","借上料"],
  ["13-02","使用料"],
  ["14-04","改良・改修工事"],
  ["17-01","庁用器具費"],
  ["17-02","機械器具費"],
  ["17-03","設備器具費"],
  ["17-06","教材教具等購入費"],
  ["17-07","校用器具費"],
  ["17-08","防災用器具費"],
  ["18-04","負担金（昭和病院企業団）"],
  ["18-09","負担金（多摩六都科学館組合）"],
  ["18-10","補助金（福祉団体等）"],
  ["18-12","補助金（文化・スポーツ団体）"],
  ["18-13","補助金（直接交付）"],
  ["18-14","補助金（行政団体等）"],
  ["18-25","補助金（その他）"],
  ["19-07","その他扶助費"],
  ["29-01","予備費"]
]);

//"id","kan_id","kou_id","moku_id","tantouka_id","jigyou_id","kokko_kin","to_kin","chihosai","sonota","ippan_zai"
const ippanSaisyutuArray = [
  [1,2,1,1,15100000,20708,123997,,,,],
  [2,2,1,8,10500000,21101,96745,,,,],
  [3,2,1,9,15700000,22705,7590,,,,],
  [4,2,1,9,15700000,22707,46663,,,,],
  [5,2,1,9,15800000,24102,583,583,,,],
  [6,2,1,10,25200000,22504,18723,,,,],
  [7,2,1,10,25200000,22505,4334,,,,],
  [8,2,1,10,25800000,24507,325,,,,190],
  [39,2,1,11,25800000,24502,62606,,,,],
  [40,2,1,13,10100000,20108,11819,,,,],
  [41,2,1,13,30400000,23301,,8000,,,],
  [42,3,1,1,35100000,30973,50776,,,,16926],
  [43,3,1,2,35300000,31305,9149,,,,],
  [44,3,1,3,35300000,31374,1100,,,,],
  [45,3,4,1,30400000,30701,,500,,,],
  [46,3,4,1,30400000,30703,8321,22319,,,],
  [47,3,4,2,30400000,30705,,40500,,,],
  [48,3,4,3,30400000,30707,1440,5000,,,],
  [49,3,4,4,30100000,30310,,7500,,,],
  [50,3,4,4,30100000,30313,,600,,,],
  [51,3,4,4,30100000,30314,,3500,,,],
  [52,3,4,4,30100000,30338,10003,,,,],
  [53,3,4,6,30100000,30322,509,29009,,,511],
  [54,3,4,7,30100000,30324,,1500,,,],
  [55,4,1,1,35500000,40501,58081,,,,],
  [56,4,1,1,35500000,40504,179695,,,,],
  [57,4,1,3,35500000,40536,403,,,,405],
  [58,4,1,3,35500000,40549,453,,,,454],
  [59,4,1,3,35500000,40551,208,,,,210],
  [60,4,1,3,35500000,40567,6930,486,,,108],
  [61,4,2,1,40100000,40701,1480,,,,],
  [62,4,2,2,40100000,40703,3416,,,,],
  [63,4,2,4,40100000,40706,363,,,,],
  [64,7,1,2,25400000,70516,5853,,,,],
  [65,7,1,2,25400000,70532,5819,,,,],
  [66,7,1,2,25400000,70537,7213,,,1078,],
  [67,8,3,1,50500000,81902,27093,,,,],
  [68,8,3,1,50500000,81903,30054,,,,],
  [69,8,3,2,40400000,81105,32258,,,,],
  [70,10,1,2,70300000,100709,,8400,,,],
  [71,10,2,1,70200000,100503,1721,,,,],
  [72,10,2,1,70200000,100504,243363,10964,93200,520,2314],
  [73,10,2,1,70200000,100528,33000,16500,,,16500],
  [74,10,2,3,00000000,000000,,1113,,,-1113],
  [75,10,2,3,70200000,100510,7797,,,,],
  [76,10,3,1,70200000,100512,725,,,,],
  [77,10,3,1,70200000,100513,109299,4440,39900,,],
  [78,10,3,1,70200000,100529,15000,7500,,,7500],
  [79,10,3,3,00000000,000000,,470,,,-470],
  [80,10,3,3,70200000,100519,5600,,,,],
  [81,10,4,5,70600000,101301,3830,,,,],
  [82,10,4,6,70700000,101501,263,,,,],
  [83,10,4,6,70700000,101509,175,,,,],
  [84,10,4,6,70700000,101514,210,,,,],
  [85,10,4,6,70700000,101517,694,,,,],
  [86,10,4,6,70700000,101519,161,,,,],
  [87,10,4,6,70700000,101521,780,,,,],
  [88,10,4,6,70700000,101523,1475,,,,],
  [89,10,4,6,70700000,101527,233,,,,],
  [90,10,5,3,25800000,101119,17061,,,,],
  [91,10,5,4,70200000,100521,2759,,,,],
  [92,10,5,4,70200000,100522,218,,,,],
  [93,13,1,1,10600000,130101,,,,,6465]
];

const jigyouDetailArray = [
  [20108,"18-09","事業継続支援","□新型コロナウイルス感染症対策による増",11819],
  [20708,"10-06","","□新型コロナウイルス感染症対策による増",2420],
  [20708,"14-04","庁舎エレベーター改修工事","□新型コロナウイルス感染症対策による増",121522],
  [20708,"17-02","非接触型体温計","□新型コロナウイルス感染症対策による増",55],
  [21101,"11-01","","□新型コロナウイルス感染症対策による増",399],
  [21101,"12-16","新住民情報システム自治体クラウド化に係る再構築（コンビニ交付構築分）<br>公共施設予約システム再構築<br>都市計画・建築行政・道路管理情報提供システム構築","□新型コロナウイルス感染症対策による増",93359],
  [21101,"13-02","Web会議システムサービス使用料","□新型コロナウイルス感染症対策による増",144],
  [21101,"17-01","公共施設予約システム用端末・プリンタ","□新型コロナウイルス感染症対策による増",2843],
  [22504,"10-06","","□新型コロナウイルス感染症対策による増",8616],
  [22504,"17-01","空調設備","□新型コロナウイルス感染症対策による増",10107],
  [22505,"10-06","","□新型コロナウイルス感染症対策による増",1960],
  [22505,"17-01","空調設備","□新型コロナウイルス感染症対策による増",2374],
  [22705,"17-08","非常用可搬型親局装置","□新型コロナウイルス感染症対策による増",7590],
  [22707,"10-01","","□新型コロナウイルス感染症対策による増",30441],
  [22707,"17-08","災害時テント<br>応急給水等資機材倉朧<br>災害時ベッド<br>避難所用発電機","□新型コロナウイルス感染症対策による増",16222],
  [23301,"18-10","新型コロナウイルス感染症対策事業費補助<br>　認定こども園、幼稚園<br>新型コロナウイルス感染症緊急包括支援事業<br>　幼稚園型一時預かり事業","□新型コロナウイルス感染症対策による増",8000],
  [24102,"10-01","自動通話録音機","□新型コロナウイルス感染症対策による増",1166],
  [24502,"12-13","指定管理料","□新型コロナウイルス感染症対策による増",4798],
  [24502,"12-20","自動ドア設計業務委託","□新型コロナウイルス感染症対策による増",1452],
  [24502,"14-04","空調設備<br>大階段入口自動ドア設置","□新型コロナウイルス感染症対策による増",56356],
  [24507,"17-01","除菌消臭器","□新型コロナウイルス感染症対策による増",515],
  [30310,"18-10","新型コロナウイルス感染症緊急包括支援事業","□新型コロナウイルス感染症対策による増",7500],
  [30313,"10-01","","□新型コロナウイルス感染症対策による増",100],
  [30313,"10-06","","□新型コロナウイルス感染症対策による増",224],
  [30313,"17-03","電動自転車","□新型コロナウイルス感染症対策による増",276],
  [30314,"10-01","","□新型コロナウイルス感染症対策による増",268],
  [30314,"12-06","","□新型コロナウイルス感染症対策による増",2255],
  [30314,"17-03","プロジェクター<br>ワイヤレスアンプ・マイク<br>マット","□新型コロナウイルス感染症対策による増",977],
  [30322,"01-92","79人","□新型コロナウイルス感染症対策による増",18000],
  [30322,"10-01","","□新型コロナウイルス感染症対策による増",1000],
  [30322,"10-06","","□新型コロナウイルス感染症対策による増",5000],
  [30322,"11-04","","□新型コロナウイルス感染症対策による増",1000],
  [30322,"12-16","","□新型コロナウイルス感染症対策による増",1529],
  [30322,"17-03","感染症対策備品","□新型コロナウイルス感染症対策による増",3500],
  [30324,"10-01","","□新型コロナウイルス感染症対策による増",87],
  [30324,"10-06","","□新型コロナウイルス感染症対策による増",49],
  [30324,"12-06","","□新型コロナウイルス感染症対策による増",451],
  [30324,"17-03","感染症対策備品","□新型コロナウイルス感染症対策による増",913],
  [30338,"10-01","","□新型コロナウイルス感染症対策による増",3],
  [30338,"18-13","児童養護施設等退所者支援給付金","□新型コロナウイルス感染症対策による増",10000],
  [30701,"10-01","","□新型コロナウイルス感染症対策による増",500],
  [30703,"18-10","保育施設等の臨時休園等に対する支援事業<br>新型コロナウイルス感染症緊急包括支援事業","□新型コロナウイルス感染症対策による増",30640],
  [30705,"18-10","新型コロナウイルス感染症緊急包括支援事業","□新型コロナウイルス感染症対策による増",40500],
  [30707,"10-01","","□新型コロナウイルス感染症対策による増",500],
  [30707,"17-03","体温測定サーマルカメラ","□新型コロナウイルス感染症対策による増",5940],
  [30973,"19-07","住居確保給付金","□新型コロナウイルス感染症対策による増",67702],
  [31305,"12-09","たいよう福祉センター指定管理料<br>あおぞら福祉センター指定管理料","□新型コロナウイルス感染症対策による増",386],
  [31305,"17-01","たいよう福祉センター感染症対策庁用器具<br>あおぞら福祉センター感染症対策庁用器具","□新型コロナウイルス感染症対策による増",8763],
  [31374,"18-10","障がい事業所等職員特別支援金","□新型コロナウイルス感染症対策による増",1100],
  [40501,"10-01","","□新型コロナウイルス感染症対策による増",1144],
  [40501,"14-04","健康センターエレベーター改修工事","□新型コロナウイルス感染症対策による増",56937],
  [40504,"18-04","新型コロナウイルス感染症特別財政支援金","□新型コロナウイルス感染症対策による増",179695],
  [40536,"12-07","","□新型コロナウイルス感染症対策による増",37],
  [40536,"12-29","一般健康診査（個別検診）","□新型コロナウイルス感染症対策による増",771],
  [40549,"12-07","","□新型コロナウイルス感染症対策による増",37],
  [40549,"12-29","一般健康診査（個別検診）","□新型コロナウイルス感染症対策による増",870],
  [40551,"12-07","","□新型コロナウイルス感染症対策による増",37],
  [40551,"12-29","一般健康診査（個別検診）","□新型コロナウイルス感染症対策による増",381],
  [40567,"07-03","育児パッケージ","□新型コロナウイルス感染症対策による増",6263],
  [40567,"10-01","","□新型コロナウイルス感染症対策による増",172],
  [40567,"10-09","","□新型コロナウイルス感染症対策による増",395],
  [40567,"11-01","","□新型コロナウイルス感染症対策による増",61],
  [40567,"17-01","オンライン保健指導備品<br>感染症対策備品","□新型コロナウイルス感染症対策による増",633],
  [40701,"10-01","","□新型コロナウイルス感染症対策による増",1480],
  [40703,"17-03","収集車両拡声用音響装置","□新型コロナウイルス感染症対策による皆増",3416],
  [40706,"17-01","隔壁用パネル","□新型コロナウイルス感染症対策による皆増",363],
  [70516,"12-16","","□新型コロナウイルス感染症対策による皆増",5853],
  [70532,"18-14","こだいら観光まちづくり協会","□新型コロナウイルス感染症対策による増",5819],
  [70537,"12-08","地域消費活性化事業","□新型コロナウイルス感染症対策による皆増",260000],
  [70537,"18-13","家賃支援","□申請件数の減による補助交付額の減",-251709],
  [81105,"10-06","","□新型コロナウイルス感染症対策による増",32258],
  [81902,"18-25","コミュニティバス事業継続支援","□新型コロナウイルス感染症対策による増",27093],
  [81903,"18-25","コミュニティタクシー事業継続支援（大沼ルート、栄町ルート、鈴木町ルート）<br>コミュニティタクシー実証実験運行経費補助（小平南西部地域ルート）","□新型コロナウイルス感染症対策による増",30054],
  [100503,"11-01","","□GIGAスクール構想実施による増",1721],
  [100504,"12-16","","□GIGAスクール構想実施による増",211111],
  [100504,"17-06","タブレットPC端末<br>電源キャビネット","□GIGAスクール構想実施による増",139250],
  [100510,"10-03","","□新型コロナウイルス感染症対策による増",34],
  [100510,"13-01","自動車借上料","□新型コロナウイルス感染症対策による増",7421],
  [100510,"13-02","施設使用料（入館料等）","□新型コロナウイルス感染症対策による増",342],
  [100512,"11-01","","□GIGAスクール構想実施による増",725],
  [100513,"12-16","","□GIGAスクール構想実施による増",88889],
  [100513,"17-06","タブレットPC端末<br>電源キャビネット","□GIGAスクール構想実施による増",64750],
  [100519,"13-01","バス・自動車借上料","□新型コロナウイルス感染症対策による増",5600],
  [100521,"17-07","","□新型コロナウイルス感染症対策による増",2759],
  [100522,"17-01","","□新型コロナウイルス感染症対策による増",218],
  [100528,"10-01","","□新型コロナウイルス感染症対策による増",46200],
  [100528,"17-06","感染症対策備品","□新型コロナウイルス感染症対策による増",9900],
  [100528,"17-07","感染症対策備品","□新型コロナウイルス感染症対策による増",9900],
  [100529,"10-01","","□新型コロナウイルス感染症対策による増",21000],
  [100529,"17-06","感染症対策備品","□新型コロナウイルス感染症対策による増",4500],
  [100529,"17-07","感染症対策備品","□新型コロナウイルス感染症対策による増",4500],
  [100709,"01-92","100人","□新型コロナウイルス感染症対策による増",8400],
  [101119,"10-06","","□新型コロナウイルス感染症対策による増",699],
  [101119,"18-12","事業継続支援","□新型コロナウイルス感染症対策による増",16362],
  [101301,"10-01","","□新型コロナウイルス感染症対策による増",2808],
  [101301,"10-06","","□新型コロナウイルス感染症対策による増",1022],
  [101501,"10-01","","□新型コロナウイルス感染症対策による増",244],
  [101501,"17-01","感染防止フロアスタンド","□新型コロナウイルス感染症対策による増",19],
  [101509,"10-01","","□新型コロナウイルス感染症対策による増",156],
  [101509,"17-01","感染防止フロアスタンド","□新型コロナウイルス感染症対策による増",19],
  [101514,"10-01","","□新型コロナウイルス感染症対策による増",191],
  [101514,"17-01","感染防止フロアスタンド","□新型コロナウイルス感染症対策による増",19],
  [101517,"10-01","","□新型コロナウイルス感染症対策による増",172],
  [101517,"10-06","","□新型コロナウイルス感染症対策による増",481],
  [101517,"17-01","換気用サーキュレーター<br>感染防止フロアスタンド","□新型コロナウイルス感染症対策による増",41],
  [101519,"10-01","","□新型コロナウイルス感染症対策による増",139],
  [101519,"17-01","換気用サーキュレーター","□新型コロナウイルス感染症対策による増",22],
  [101521,"10-01","","□新型コロナウイルス感染症対策による増",156],
  [101521,"10-06","","□新型コロナウイルス感染症対策による増",605],
  [101521,"17-01","感染防止フロアスタンド","□新型コロナウイルス感染症対策による増",19],
  [101523,"10-01","","□新型コロナウイルス感染症対策による増",233],
  [101523,"10-06","","□新型コロナウイルス感染症対策による増",1186],
  [101523,"17-01","感染防止フロアスタンド","□新型コロナウイルス感染症対策による増",56],
  [101527,"10-01","","□新型コロナウイルス感染症対策による増",233],
  [130101,"29-01","","□歳入予算との調整額",6465]
];

const formatter = (row, cell, value, columnDef, dataContext) => {
  let rtn = { text: value };
  if(value.indexOf("<br>") !== -1) {
    rtn.text = '<i class="fa fa-caret-down" aria-hidden="true"></i> ' + rtn.text;
    rtn.addClasses = "multiline";
  }
  return rtn;
}

const sumTotalsFormatter = (totals, columnDef, grid) => {
  const level = totals.group.groupingKey.split(":|:").length;
  const val = totals.sum && totals.sum[columnDef.field];
  
  if (val != null) {
    let s = ((Math.round(parseFloat(val)*100)/100)).toLocaleString();
    if (level == 1) {
      s = `◎ ${s}`;
    } else if(level == 2) {
      s = `〇 ${s}`;
    } else if(level == 3) {
      s = `${s}`;
    }
    return s;
  }
  return "";
}

let columnFiltersMap = new Map();

const columns = [
  {id: "id", name: "ID", field: "id", width: 120, cssClass: "cell-id", sortable: true},
  {id: "kan", name: "款", field: "kan", width: 120, cssClass: "cell-kan", sortable: true},
  {id: "kou", name: "項", field: "kou", width: 120, cssClass: "cell-kou", sortable: true},
  {id: "moku", name: "目", field: "moku", width: 120, cssClass: "cell-moku", sortable: true},
  {id: "tantouka", name: "担当課", field: "tantouka", width: 120, cssClass: "cell-tantouka", sortable: true},
  {id: "jigyou", name: "事業", field: "jigyou", width: 120, cssClass: "cell-jigyou", sortable: true},
  {id: "kokko_kin", name: "国庫支出金", field: "kokko_kin", width: 120, cssClass: "cell-amount", sortable: true, groupTotalsFormatter: sumTotalsFormatter},
  {id: "to_kin", name: "都支出金", field: "to_kin", width: 120, cssClass: "cell-amount", sortable: true, defaultSortAsc: true, groupTotalsFormatter: sumTotalsFormatter},
  {id: "chihosai", name: "地方債", field: "chihosai", width: 120, cssClass: "cell-amount", sortable: true, defaultSortAsc: true, groupTotalsFormatter: sumTotalsFormatter},
  {id: "sonota", name: "その他", field: "sonota", width: 120, cssClass: "cell-amount", sortable: true, defaultSortAsc: true, groupTotalsFormatter: sumTotalsFormatter},
  {id: "ippan_zai", name: "一般財源", field: "ippan_zai", width: 120, cssClass: "cell-amount", sortable: true, defaultSortAsc: true, groupTotalsFormatter: sumTotalsFormatter},
  {id: "zai_total", name: "財源合計", field: "zai_total", width: 120, cssClass: "cell-amount", sortable: true, defaultSortAsc: true, groupTotalsFormatter: sumTotalsFormatter},  
  {id: "himoku", name: "費目", field: "himoku", width: 120, cssClass: "cell-himoku", sortable: true},
  {id: "detail", name: "詳細", field: "detail", width: 120, cssClass: "cell-detail", sortable: true, formatter: formatter},
  {id: "tag", name: "タグ", field: "tag", width: 120, cssClass: "cell-detail", sortable: true, formatter: formatter},
  {id: "amount", name: "金額", field: "amount", width: 120, cssClass: "cell-amount", sortable: true, defaultSortAsc: true}
];

const options = {
  enableAutosizeColumns: true,
  autosizeColsMode: GridAutosizeColsMode.None,
  editable: false,
  enableAddRow: false,
  enableCellNavigation: true,
  enableColumnReorder: true,
  explicitInitialization: true,
  showHeaderRow: true,
  headerRowHeight: 30,
  multiColumnSort: true,
  numberedMultiColumnSort: true,
  tristateMultiColumnSort: true,
  sortColNumberInSeparateSpan: false,
  createFooterRow: true,
  showFooterRow: true,
  footerRowHeight: 30
};

const maxLengthTexts = {
  moku: "安全安心ま　",
  tantouka: "市民協働・　",
  jigyou: "小平小川元気村おがわ東　",
  himoku: "施設等維持管理委託　",
  detail: "新住民情報システムクラウド化　　　",
  tag: "□新型感染　"
};

const setAutosizeColOptions = (column, colIndex) => {
  const varray = (maxLengthTexts[column.field]) ? [maxLengthTexts[column.field]] : undefined;

  const opts = {
    autosizeMode: "CTI", 
    rowSelectionMode: "ALL", 
    valueFilterMode: "NONE", 
    widthEvalMode: "CANV", 
    ignoreHeaderText: false,
    sizeToRemaining: false,
    allowAddlPercent: undefined,
    rowSelectionCount: 100,
    colDataTypeOf: column["data-type"],
    colValueArray: varray
  };
  column.autoSize = opts;
}

const setAutosizeOptions = () => {
  const columns = grid.getColumns();
  for (var i = 0, ii = columns.length; i < ii; i++) {
    setAutosizeColOptions(columns[i], i+1);
  }
  var opts = {
    autosizeColsMode: "FCV",
    autosizeColPaddingPx: 4,
    viewportSwitchToScrollModeWidthPercent: 120,
    viewportMinWidthPx: 200,
    viewportMaxWidthPx: 800,
    autosizeTextAvgToMWidthRatio: 0.75
  };
  grid.setOptions(opts);    
}

const filter = item => {
  for (const [key, value] of columnFiltersMap) {
    if (value !== "") {
      const column = grid.getColumns()[grid.getColumnIndex(key)];

      // 検索語にマッチしない行はfalseで返す（表示しない）
      if (column.cssClass === "cell-id" || column.cssClass === "cell-amount") {
        //if (item[column.field] === undefined) return false;
        let f = (/([=><]{1,2})?\s?(\d*)/gm).exec(value);
        if(f[2] === undefined || f[2] === "") f[2] = 0;
        if (f[1]) {
          if (eval(item[column.field].replace(/,/g, '') + f[1] + f[2]) === false) return false;
        } else {
          if (String(item[column.field]).replace(/,/g, '') !== f[2]) return false;
        }
      } else {
        let f = (/([!=]{1})?\s?(.*)/gm).exec(value);
        if(f[2] === undefined) f[2] = "";
        if(f[1] === "!") {
          if (item[column.field].indexOf(f[2]) !== -1) return false; // 文字列がマッチしたらFalse（表示しない）
        } else if(f[1] === "=") {
          if (item[column.field] !== f[2]) return false; // 完全一致
        } else {
          if (item[column.field].indexOf(f[2]) === -1) return false; // 文字列がマッチしなかったらFalse
        }
      }
    }
  }
  return true;
}

let data = [];

const groupBy = (arrs, idx) => {
  return arrs.reduce(function (acc, arr) {
    let key = arr[idx];
    if (!acc.has(key)) acc.set(key, []);
    acc.get(key).push(arr);
    return acc;
  }, new Map())
}

const jigyouDetailGroupedMap = groupBy(jigyouDetailArray, 0);

let index = 0;
ippanSaisyutuArray.forEach((arr) => {
  let d = (data[index] = {});
  const [id, kan_id, kou_id, moku_id, tantouka_id, jigyou_id, , , , ,] = arr;
  const detailArray = jigyouDetailGroupedMap.get(jigyou_id);
  const kokko_kin = (arr[6] === undefined) ? 0 :  arr[6];
  const to_kin =    (arr[7] === undefined) ? 0 :  arr[7];
  const chihosai =  (arr[8] === undefined) ? 0 :  arr[8];
  const sonota =    (arr[9] === undefined) ? 0 :  arr[9];
  const ippan_zai = (arr[10] === undefined) ? 0 : arr[10];

  d["id"] = index + 1;
  d["kan_id"] = kan_id;
  d["kan"] = kanMap.get(kan_id);
  d["kou_id"] = kou_id;
  d["kou"] = kouMap.get([kan_id, kou_id].join("-"));
  d["moku_id"] = moku_id;
  d["moku"] = mokuMap.get([kan_id, kou_id, moku_id].join("-"));
  d["tantouka"] = tantoukaMap.get(tantouka_id);
  d["jigyou"] = jigyouMap.get(jigyou_id);
  d["kokko_kin"] = kokko_kin.toLocaleString();
  d["to_kin"] = to_kin.toLocaleString();
  d["chihosai"] = chihosai.toLocaleString();
  d["sonota"] = sonota.toLocaleString();
  d["ippan_zai"] = ippan_zai.toLocaleString();
  d["zai_total"] = (kokko_kin + to_kin + chihosai + sonota + ippan_zai).toLocaleString();
  d["himoku"] = "";
  d["detail"] = "";
  d["tag"] = "";
  d["amount"] = "";

  if (detailArray !== undefined) {
    detailArray.forEach(darr => {
      index += 1;
      let d = (data[index] = {});
      const amount = (darr[4] === undefined) ? "0" : darr[4].toLocaleString();
      d["id"] = index + 1;
      d["kan_id"] = kan_id;
      d["kan"] = kanMap.get(kan_id);
      d["kou_id"] = kou_id;
      d["kou"] = kouMap.get([kan_id, kou_id].join("-"));
      d["moku_id"] = moku_id;
      d["moku"] = mokuMap.get([kan_id, kou_id, moku_id].join("-"));
      d["tantouka"] = tantoukaMap.get(tantouka_id);
      d["jigyou"] = jigyouMap.get(jigyou_id);
      d["himoku"] = himokuMap.get(darr[1]);
      d["detail"] = darr[2];
      d["tag"] = darr[3];
      d["amount"] = amount;
    });
  }
  index += 1;
});

const groupItemMetadataProvider = new Data.GroupItemMetadataProvider();
const dv = new Data.DataView({
  groupItemMetadataProvider: groupItemMetadataProvider
});

const grid = new Grid('#saisyutu-detail', dv, columns, options);

dv.onRowCountChanged.subscribe((e, args) => {
  grid.updateRowCount();
  grid.render();
});

dv.onRowsChanged.subscribe((e, args) => {
  grid.invalidateRows(args.rows);
  grid.render();
  UpdateAllTotals();
});

dv.onRowsOrCountChanged.subscribe(function (e, args) {     
  if (args.rowCountChanged) { grid.updateRowCount(); }
  if (args.rowsChanged) { grid.invalidateRows(args.rows); }
  grid.render();
});


$(grid.getHeaderRow()).on("change keyup", ":input", e => {
  const columnId = $(e.target).data("columnId");
  if (columnId != null) {
    columnFiltersMap.set(columnId, $.trim($(e.target).val()));
    dv.refresh();
  }
});

grid.onHeaderRowCellRendered.subscribe((e, args) => {
  $(args.node).empty();
  $("<input type='text'>")
     .data("columnId", args.column.id)
     .val(columnFiltersMap.get(args.column.id))
     .appendTo(args.node);
});

grid.onSort.subscribe((e, args) => {
  const cols = args.sortCols;

  data.sort((dataRow1, dataRow2) => {
    for (let i = 0, l = cols.length; i < l; i++) {
      let field = cols[i].sortCol.field;
      let sign = cols[i].sortAsc ? 1 : -1;
      let value1 = dataRow1[field], value2 = dataRow2[field];
      let result = 0;
      if(cols[i].sortCol.cssClass === "cell-amount") {
        let v1 = (value1 === undefined) ? -1 : Number(value1.replace(/,/g, ''));
        let v2 = (value2 === undefined) ? -1 : Number(value2.replace(/,/g, ''));
        result = (v1 == v2 ? 0 : (v1 > v2 ? 1 : -1)) * sign;
      } else if(cols[i].sortCol.cssClass === "cell-detail") {
        let v1 = value1.replace( /(<([^>]+)>)/ig, '');
        let v2 = value2.replace( /(<([^>]+)>)/ig, '');
        result = (v1 == v2 ? 0 : (v1 > v2 ? 1 : -1)) * sign;
      }else {
        result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
      }
      if (result != 0) {
        return result;
      }
    }
    return 0;
  });

  //grid.invalidate();
  //grid.render();

  dv.setItems(data);
});

grid.onColumnsReordered.subscribe((e, args) => {
  UpdateAllTotals();
});    


//Constructorを使うためfunctionで定義
function CustomAggregator(field) {
  this.field_ = field;

  this.init = function () {
      this.sum_ = 0;
  };

  this.accumulate = function (item) {
      let val = item[this.field_];
      val = val ? Number(val.replace(/,/g, '')) : 0;
      this.sum_ += val;
  };

  this.storeResult = function (groupTotals) {
      if (!groupTotals.sum) {
          groupTotals.sum = {};
      }
      groupTotals.sum[this.field_] = this.sum_;
  }
}

const groupKanKouMoku = () => {
  dv.setGrouping([
    {
      getter: "kan_id",
      formatter: function (g) {
        return kanMap.get(g.value) + "  <span style='color:green'>(" + g.count + " 項目)</span>";
      },
      aggregators: [
        new CustomAggregator("kokko_kin"),
        new CustomAggregator("to_kin"),
        new CustomAggregator("chihosai"),
        new CustomAggregator("sonota"),
        new CustomAggregator("ippan_zai"),
        new CustomAggregator("zai_total")
      ],
      aggregateCollapsed: true,
      collapsed: true,
      lazyTotalsCalculation: true
    },
    {
      getter: "kou_id",
      formatter: function (g) {
        return kouMap.get(g.groupingKey.split(":|:").join("-")) + "  <span style='color:green'>(" + g.count + " 項目)</span>";
      },
      aggregators :[
        new CustomAggregator("kokko_kin"),
        new CustomAggregator("to_kin"),
        new CustomAggregator("chihosai"),
        new CustomAggregator("sonota"),
        new CustomAggregator("ippan_zai"),
        new CustomAggregator("zai_total")
      ],
      aggregateCollapsed: true,
      collapsed: true,
      lazyTotalsCalculation: true
    },
    {
      getter: "moku_id",
      formatter: function (g) {
        return mokuMap.get(g.groupingKey.split(":|:").join("-")) + "  <span style='color:green'>(" + g.count + " 項目)</span>";
      },
      aggregators: [
        new CustomAggregator("kokko_kin"),
        new CustomAggregator("to_kin"),
        new CustomAggregator("chihosai"),
        new CustomAggregator("sonota"),
        new CustomAggregator("ippan_zai"),
        new CustomAggregator("zai_total")
      ],
      aggregateCollapsed: true,
      collapsed: true,
      lazyTotalsCalculation: true
    }
  ]);
}


const calColFields = ["kokko_kin", "to_kin", "chihosai", "sonota", "ippan_zai", "zai_total", "amount"];
const noFields = ["kan", "kou", "moku", "tantouka", "jigyou", "himoku", "detail"];

const UpdateAllTotals = () => {
  let totals = {};
  for (field of calColFields) {
    totals[field] = 0;
  }

  let rowCount = dv.getLength();

  let item = dv.getItem(0);
  let jigyouCountArray = [];
  let himokuCounter = 0;

  for (field of noFields) {
    $(grid.getFooterRowColumn(grid.getColumnIndex(field))).html("　");
  }

  if(!item) { //0件
    //nop
  } else if (item.__group) { // グループ化された状態であれば
    while (rowCount--) {
      item = dv.getItem(rowCount);
      if(item.__groupTotals && item.group.level === 0) { // 大計（款の総計）を求める
        for (field of calColFields) {
          totals[field] += item.sum[field] === undefined ? 0 : item.sum[field];
        }
      }
    }
  } else {
    while (rowCount--) {
      const item = dv.getItem(rowCount);
      if (!jigyouCountArray.includes(item["jigyou"])) jigyouCountArray.push(item["jigyou"]);
      if (item["himoku"]) himokuCounter++;
      for (field of calColFields) {
        totals[field] += item[field] === undefined ? 0 : Number(item[field].replace(/,/g, ''));
      }
    }
    $(grid.getFooterRowColumn(grid.getColumnIndex("jigyou"))).html("事業等数：" + jigyouCountArray.length + "件");
    $(grid.getFooterRowColumn(grid.getColumnIndex("himoku"))).html("費目数：" + himokuCounter + "件");
  }

  for (field of calColFields) {
    $(grid.getFooterRowColumn(grid.getColumnIndex(field))).html(totals[field].toLocaleString());
  }

}

const resizer = new Slick.Plugins.Resizer({
  container: '#grid-container', // DOM element selector, can be an ID or a class name
  calculateAvailableSizeBy: "container"
},);

document.querySelector("#fullscreen").addEventListener("click", (e) => {
  document.querySelector("#grid-container").classList.toggle("fullscreen");
  //$("#saisyutu-detail").css("width", "").css("height", "");
  if (document.querySelector("#grid-container").classList.contains("fullscreen")) {
    e.target.innerHTML = "フルスクリーン表示をやめる";
    $("body").addClass("stopScroll");
    //resizer.pauseResizer(false);
  } else {
    e.target.innerHTML = "フルスクリーンで表示する";
    $("body").removeClass("stopScroll");
    //resizer.pauseResizer(true);
  }
  resizer.resizeGrid();
});

document.querySelector("#grouping").addEventListener("click", (e) => {
  if (e.target.innerHTML === "款・項・目でまとめない") {
    dv.setGrouping([]);
    e.target.innerHTML = "款・項・目でまとめる";
  } else {
    groupKanKouMoku();
    e.target.innerHTML = "款・項・目でまとめない";
  }
});


grid.registerPlugin(resizer);
grid.registerPlugin(groupItemMetadataProvider);
grid.registerPlugin(new Slick.AutoTooltips({ enableForHeaderCells: true }));
grid.setSelectionModel(new Slick.CellSelectionModel());
grid.registerPlugin(new Slick.CellExternalCopyManager({
  readOnlyMode : true,
  includeHeaderWhenCopying : false
}));

//resizer.pauseResizer(true);

grid.init();

dv.beginUpdate();
dv.setFilter(filter);
dv.setItems(data);
dv.endUpdate();

setAutosizeOptions();
grid.autosizeColumns();

groupKanKouMoku();

UpdateAllTotals();

//disable book.js event
document.addEventListener("keydown", e => {
  e.stopImmediatePropagation();
});
