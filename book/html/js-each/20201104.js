//"kan_id","kan_name"
const kanMap = new Map([
[3,"民生費"],
[4,"衛生費"],
[7,"商工費"],
[8,"土木費"],
[10,"教育費"],
[13,"予備費"]
]);


// "kan_id","kou_id","kou_name"
const kouArray = [
  [3,1,"社会福祉費"],
  [3,2,"高齢者福祉費"],
  [4,1,"保険衛生費"],
  [7,1,"商工費"],
  [8,1,"土木管理費"],
  [10,2,"小学校費"],
  [10,3,"中学校費"],
  [10,4,"社会教育費"],
  [10,5,"保健体育費"],
  [13,1,"予備費"]
];

//"kan_id","kou_id","moku_id","moku_name"
const mokuArray = [
  [3,1,5,"障害者福祉推進事業費"],
  [3,2,2,"介護予防・生活支援事業費"],
  [4,1,2,"予防費"],
  [7,1,2,"商工振興費"],
  [8,1,2,"交通安全対策費"],
  [10,2,1,"学校管理費"],
  [10,3,1,"学校管理費"],
  [10,4,5,"公民館費"],
  [10,5,4,"学校給食費"],
  [13,1,1,"予備費"]
];

const tantoukaMap = new Map([
  [00000000,"担当課なし"],
  [10600000,"財務課"],
  [25400000,"産業振興課"],
  [35200000,"高齢者支援課"],
  [35300000,"障がい者支援課"],
  [35500000,"健康推進課"],
  [55200000,"交通対策課"],
  [70200000,"学務課"],
  [70600000,"公民館"]
]);

const jigyouMap = new Map([
  [31153,"介護事業所業務継続支援事業"],
  [31155,"簡易陰圧装置等設置経費支援事業"],
  [31156,"在宅要介護者の受入体制整備事業（高齢）"],
  [31157,"介護施設等における感染症対策強化事業"],
  [31375,"在宅要介護者の受入態勢整備事業（障がい）"],
  [31376,"障がい施設等における感染症対策強化事業"],
  [40506,"予防接種事業"],
  [70529,"市内店舗改修等補助事業"],
  [70532,"観光まちづくり推進事業"],
  [70537,"小平市小中企業等支援給付金事業"],
  [80903,"自転車対策事業"],
  [100504,"小学校施設維持管理事業"],
  [100513,"中学校施設維持管理事業"],
  [100521,"小学校給食運営事業"],
  [101302,"中央公民館運営管理事業"],
  [130101,"予備費"]
]);

const himokuMap = new Map([
  ["01-92","会計年度任用職員（アシスタント職）報酬"],
  ["10-01","消耗品費"],
  ["10-04","印刷製本費"],
  ["11-01","通信運搬費"],
  ["12-09","サービス業務委託"],
  ["12-12","整備等委託"],
  ["12-14","相談等委託"],
  ["12-31","予防接種等委託"],
  ["13-01","借上料"],
  ["13-02","使用料"],
  ["14-42","撤去工事"],
  ["17-01","庁用器具費"],
  ["17-06","教材教具等購入費"],
  ["18-10","補助金（福祉団体等）"],
  ["18-11","補助金（産業団体等）"],
  ["18-13","補助金（直接交付）"],
  ["18-14","補助金（行政団体等）"],
  ["21-01","補償金"],
  ["29-01","予備費"]
]);

//"id","kan_id","kou_id","moku_id","tantouka_id","jigyou_id","kokko_kin","to_kin","chihosai","sonota","ippan_zai"
const ippanSaisyutuArray = [
  [162,3,1,5,35300000,31375,,5000,,,],
  [163,3,1,5,35300000,31376,,34620,,,],
  [164,3,2,2,35200000,31153,-9000,,,,],
  [165,3,2,2,35200000,31155,,4320,,,],
  [166,3,2,2,35200000,31156,,8800,,,],
  [167,3,2,2,35200000,31157,,54000,,,],
  [168,4,1,2,35500000,40506,,82015,,,44793],
  [169,7,1,2,25400000,70529,,2575,,,2575],
  [170,7,1,2,25400000,70532,,,,,3542],
  [171,7,1,2,25400000,70537,9000,55298,,,48593],
  [172,8,1,2,55200000,80903,,,,,24235],
  [173,10,2,1,70200000,100504,-54297,-37933,,,-27624],
  [174,10,3,1,70200000,100513,-19877,-17015,,,],
  [175,10,4,5,70600000,101302,,,,,632],
  [176,10,5,4,70200000,100521,,,,-21635,-6391],
  [177,13,1,1,10600000,130101,,,,,-355]
];

const jigyouDetailArray = [
  [31153,"18-10","介護事業所","申請件数の減による補助交付額の減",-9000],
  [31155,"18-10","介護事業所","新型コロナウイルス感染症対策による増",4320],
  [31156,"12-09","在宅要介護者の受入体制整備","新型コロナウイルス感染症対策による増",8800],
  [31157,"18-10","介護事業所","新型コロナウイルス感染症対策による増",54000],
  [31375,"12-09","在宅要介護者の受入体制整備","新型コロナウイルス感染症対策による増",5000],
  [31376,"18-10","障がい事業所等","新型コロナウイルス感染症対策による増",34620],
  [40506,"12-31","高齢者インフルエンザ 18,100人→32,338人","高齢者インフルエンザ定期予防接種特別補助事業の実施による増",124263],
  [40506,"18-13","高齢者インフルエンザ 60人→468人","高齢者インフルエンザ定期予防接種特別補助事業の実施による増",2545],
  [70529,"18-11","市内店舗改修等補助","新型コロナウイルス感染症対策による増",2575],
  [70532,"18-14","こだいら観光まちづくり協会","新型コロナウイルス感染症対策による増",3542],
  [70537,"01-92","3人","新型コロナウイルス感染症対策による増",1386],
  [70537,"10-01","","新型コロナウイルス感染症対策による増",216],
  [70537,"10-04","","新型コロナウイルス感染症対策による増",28],
  [70537,"11-01","","新型コロナウイルス感染症対策による増",804],
  [70537,"12-14","中小企業診断士相談","新型コロナウイルス感染症対策による増",300],
  [70537,"13-01","電算機器借上","新型コロナウイルス感染症対策による増",22],
  [70537,"13-02","ソフトウェア使用料","新型コロナウイルス感染症対策による増",5],
  [70537,"18-11","キャッシュレス促進<br>歳末キャンペーン<br>年始キャンペーン","新型コロナウイルス感染症対策による増",120000],
  [70537,"18-13","家賃支援<br>感染防止徹底協力金","申請件数の減による補助交付額の減",-9870],
  [80903,"12-12","ゲートシステム移設","土地返還による増",4235],
  [80903,"14-42","自転車駐車場解体及び撤去工事","土地返還による増",20000],
  [100504,"13-01","電算機器借上料","ＩＣＴ機器賃貸借契約更新の見直しに伴う減",-27624],
  [100504,"17-06","タブレットＰＣ端末","契約額確定による減",-92230],
  [100513,"17-06","タブレットＰＣ端末","契約額確定による減",-36892],
  [100521,"21-01","給食補償費","保障費支払い額確定による減",-28026],
  [101302,"13-02","Ｚｏｏｍ基本ライセンス","新型コロナウイルス感染症対策による増",33],
  [101302,"17-01","Ｚｏｏｍハードウェア","新型コロナウイルス感染症対策による増",599],
  [130101,"29-01","","歳入予算との調整額",-355]
];


const maxLengthTexts = {
  kou: "総務管理費　",
  moku: "安全安心ま　",
  tantouka: "市民協働・　",
  jigyou: "小平小川元気村おがわ東　",
  himoku: "施設等維持管理委託　",
  detail: "新住民情報システムクラウド化　　　",
  tag: "新型感染　 "
};
