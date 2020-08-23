(function ($) {
  // Register namespace
  $.extend(true, window, {
    "Slick": {
      "AutoTooltips": AutoTooltips
    }
  });

  /**
   * AutoTooltips plugin to show/hide tooltips when columns are too narrow to fit content.
   * @constructor
   * @param {boolean} [options.enableForCells=true]        - Enable tooltip for grid cells
   * @param {boolean} [options.enableForHeaderCells=false] - Enable tooltip for header cells
   * @param {number}  [options.maxToolTipLength=null]      - The maximum length for a tooltip
   * @param {boolean}  [options.stickOnClick=true]         - trueの場合、クリックで固定表示（追加分）
   */
  function AutoTooltips(options) {
    var _grid;
    var _self = this;
    var _defaults = {
      enableForCells: true,
      enableForHeaderCells: false,
      maxToolTipLength: null,
      replaceExisting: true,
      stickOnClick: true // 追加
    };
    
    /**
     * Initialize plugin.
     */
    function init(grid) {
      options = $.extend(true, {}, _defaults, options);
      _grid = grid;
      if (options.enableForCells) _grid.onMouseEnter.subscribe(handleMouseEnter);
      if (options.enableForHeaderCells) _grid.onHeaderMouseEnter.subscribe(handleHeaderMouseEnter);
      if (options.stickOnClick){
        _grid.onClick.subscribe(handleMouseClick); // 追加
        //_grid.onMouseLeave.subscribe(handleMouseLeave); //追加
      }
    }
    
    /**
     * Destroy plugin.
     */
    function destroy() {
      if (options.enableForCells) _grid.onMouseEnter.unsubscribe(handleMouseEnter);
      if (options.enableForHeaderCells) _grid.onHeaderMouseEnter.unsubscribe(handleHeaderMouseEnter);
      if (options.stickOnClick) _grid.onClick.unsubscribe(handleMouseClick); // 追加
    }
    
    /**
     * Handle mouse entering grid cell to add/remove tooltip.
     * @param {jQuery.Event} e - The event
     */
    function handleMouseEnter(e) {
      const cell = _grid.getCellFromEvent(e);
      if (cell) {
        const node = _grid.getCellNode(cell.row, cell.cell);

        if (node.dataset.tooltipHtml === undefined) {
          let text = node.innerHTML;
          const $node = $(node);
          if ($node.innerWidth() < $node[0].scrollWidth || $node.hasClass("multiline")) {
            // デフォルトホーバーのツールチップは表示しない
            node.setAttribute("title", "");

            text = text.replace(/<i.*>.*?<\/i>/gm,'');

            if (options.maxToolTipLength && text.length > options.maxToolTipLength) {
              text = text.substr(0, options.maxToolTipLength - 3) + "...";
            }
            showTooltip(node, text);
            node.dataset.tooltipHtml = text;
          }
        }
      }
    }
   
    // 追加
    function handleMouseClick(row, cell) {
      const node = _grid.getCellNode(cell.row, cell.cell);
      let text = node.innerHTML;
      if (node.dataset.tooltipSticked === undefined) {
        if (node.dataset.tooltipHtml === undefined) {
          if (options.maxToolTipLength && text.length > options.maxToolTipLength) {
            text = text.substr(0, options.maxToolTipLength - 3) + "...";
          }
          text = text.replace(/<i.*>.*?<\/i>/gm,'');
          showTooltip(node, text);
        }

        node.dataset.tooltipSticked = "true";
      } else {
        node.removeAttribute("data-tooltip-html");
        node.removeAttribute("data-tooltip-sticked");
        $(node).tooltip("close");
      }
    }

    const showTooltip = (node, text) => {
      $(node).tooltip({
        content: text,
        position: { my: "left top", at: "left bottom", collision: "flipfit" },
        open: (e, ui) => {
          ui.tooltip.click(e => {
            $(node).tooltip("close");
          });
        }
      })
      .tooltip("open")
      .on('mouseout focusout', e => {
        if (node.dataset.tooltipSticked === undefined) {
          node.removeAttribute("data-tooltip-html");
          $(node).tooltip("close");
        }
        e.stopImmediatePropagation();
      });
    }


    /**
     * Handle mouse entering header cell to add/remove tooltip.
     * @param {jQuery.Event} e     - The event
     * @param {object} args.column - The column definition
     */
    function handleHeaderMouseEnter(e, args) {
      var column = args.column,
          $node = $(e.target).closest(".slick-header-column");
      if (column && !column.toolTip) {
        $node.attr("title", ($node.innerWidth() < $node[0].scrollWidth) ? column.name : "");
      }
    }
    
    // Public API
    $.extend(this, {
      "init": init,
      "destroy": destroy,
      "pluginName": "AutoTooltips"
    });
  }
})(jQuery);