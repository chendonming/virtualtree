class Store {
  constructor(options) {
    this.data = options.data;
    this.props = options.props;
    this.defaultExpandAll = options.defaultExpandAll;
    this.map = {};
    this.setData(this.data);
    this.index = false;
    this.indexData = [];
  }

  setData(data) {
    this.data = data;
    this.transformData(this.data, 0);
  }

  transformData(data, n, parent, parentName) {
    let level = n || 0
    level++
    if (data.length > 0) {
      data.forEach(item => {
        item.parent = parent
        item.parentName = parentName ? (parentName + ' > ' + item[this.props.label]) : item[this.props.label]
        this.map[item.Id] = item
        item.data = JSON.parse(JSON.stringify(item))
        item.checked = item[this.props.checked]
          ? item[this.props.checked]
          : true
        item.expanded = item.expanded ? item.expanded : false
        item.indeterminate =
          typeof item.indeterminate === 'undefined' ? false : item.indeterminate
        item.isCheckbox = item[this.props.isCheckbox]
          ? item[this.props.isCheckbox]
          : false
        item.visible = true
        item.level = level
        item.text = item[this.props.label]
        item.load = false
        item.loadStatus = false
        item.hasChildren = !!(
          item[this.props.children] && item[this.props.children].length > 0
        )

        if (typeof item[this.props.children] === 'undefined') {
          item[this.props.children] = []
        }

        if (item[this.props.children] && item[this.props.children].length > 0) {
          this.transformData(item[this.props.children], level, item.Id, item.parentName || '')
        }
      })
    }
  }
}

export { Store };
