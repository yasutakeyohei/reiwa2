/*
sligkgrid-es6は含まれるslickgridのバージョンが古いため、autocolumnsizewidthが使えず。。オリジナルで代替。
import { Data, Grid, Editors, Formatters } from 'slickgrid-es6';
import './slickgrid-src.scss';
import $ from 'jquery';
*/

const Data = Slick.Data;
const Grid = Slick.Grid;
const GridAutosizeColsMode = Slick.GridAutosizeColsMode;

const kouMap = new Map(
  kouArray.map(arr => {
    return [arr.splice(0, 2).join("-"), arr[0]];
  })
);

const mokuMap = new Map(
  mokuArray.map(arr => {
    return [arr.splice(0, 3).join("-"), arr[0]];
  })
);

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
  {id: "kan", name: "款", field: "kan", width: 120, cssClass: "cell-kan-kou-moku", sortable: true},
  {id: "kou", name: "項", field: "kou", width: 120, cssClass: "cell-kan-kou-moku", sortable: true},
  {id: "moku", name: "目", field: "moku", width: 120, cssClass: "cell-kan-kou-moku", sortable: true},
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
        if (item[column.field] === undefined || item[column.field] === "") return false; //undefの行はスキップ
        let f = (/([=><]{1,2}|!=)?\s?(\d*)/gm).exec(value);
        if(f[2] === undefined || f[2] === "") f[2] = 0;
        if (f[1]) {
          if (eval(item[column.field].replace(/,/g, '') + f[1] + f[2]) === false) return false;
        } else {
          if (String(item[column.field]).replace(/,/g, '') !== f[2]) return false;
        }
      } else {
        let f = (/([!=]{1})?\s?(.*)/gm).exec(value);
        if(f[2] === undefined) f[2] = "";
        let cellVal   = item[column.field].toLowerCase(); //case insensitiveに
        let filterVal = f[2].toLowerCase(); //case insensitiveに
        if(f[1] === "!") {
          if (cellVal.indexOf(filterVal) !== -1) return false; // 文字列がマッチしたらFalse（表示しない）
        } else if(f[1] === "=") {
          if (cellVal !== filterVal) return false; // 完全一致
        } else {
          if (cellVal.indexOf(filterVal) === -1) return false; // 文字列がマッチしなかったらFalse
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
  d["kan"] = kan_id + "." + kanMap.get(kan_id);
  d["kou_id"] = kou_id;
  d["kou"] = kou_id + "." + kouMap.get([kan_id, kou_id].join("-"));
  d["moku_id"] = moku_id;
  d["moku"] = moku_id + "." + mokuMap.get([kan_id, kou_id, moku_id].join("-"));
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
      d["kan"] = kan_id + "." + kanMap.get(kan_id);
      d["kou_id"] = kou_id;
      d["kou"] = kou_id + "." + kouMap.get([kan_id, kou_id].join("-"));
      d["moku_id"] = moku_id;
      d["moku"] = moku_id + "." + mokuMap.get([kan_id, kou_id, moku_id].join("-"));
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
      } else if(cols[i].sortCol.cssClass === "cell-kan-kou-moku") {
        let v1 = Number(value1.substring(0, value1.indexOf(".")));
        let v2 = Number(value2.substring(0, value2.indexOf(".")));
        result = (v1 == v2 ? 0 : (v1 > v2 ? 1 : -1)) * sign;
      } else {
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
