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
    this.indexData = Object.values(this.data);
  }

  /**
   * 更改属性值
   */
  setValue(id, key, value) {
    this.map[id][key] = value;
  }

  /**
   * 关闭id所有的子节点
   * @param id
   */
  closeAllChildren(id) {
    const node = this.map[id];
    const children = this.props.children;
    const eventDown = (arr) => {
      arr.forEach((row) => {
        row.expanded = false;
        row.childrenCount = 0;

        if (row[children] && row[children].length > 0) {
          eventDown(row[children]);
        }
      });
    };
    eventDown(node[children]);
  }

  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  setChildrenCount(id, count) {
    const node = this.map[id];
    const eventUp = (data) => {
      if (!data.childrenCount) data.childrenCount = 0;
      data.childrenCount += count;
      if (data.parent) {
        eventUp(this.map[data.parent]);
      }
    };

    if (this.map[node.parent]) {
      eventUp(this.map[node.parent]);
    }

    if (count > 0) {
      node.childrenCount = count;
    }

    if (count <= 0) {
      node.childrenCount = 0;
    }
  }

  transformData(data, n, parent, parentName) {
    let level = n || 0;
    level++;
    if (data.length > 0) {
      data.forEach((item) => {
        item.Id = this.uuid();
        item.parent = parent;
        item.parentName = parentName
          ? parentName + " > " + item[this.props.label]
          : item[this.props.label];
        this.map[item.Id] = item;
        item.data = JSON.parse(JSON.stringify(item));
        item.checked = item[this.props.checked]
          ? item[this.props.checked]
          : true;
        item.expanded = item.expanded ? item.expanded : false;
        item.indeterminate =
          typeof item.indeterminate === "undefined"
            ? false
            : item.indeterminate;
        item.isCheckbox = item[this.props.isCheckbox]
          ? item[this.props.isCheckbox]
          : false;
        item.visible = true;
        item.level = level;
        item.text = item[this.props.label];
        item.load = false;
        item.loadStatus = false;
        item.hasChildren = !!(
          item[this.props.children] && item[this.props.children].length > 0
        );
        item.childrenCount = 0;

        if (typeof item[this.props.children] === "undefined") {
          item[this.props.children] = [];
        }

        if (item[this.props.children] && item[this.props.children].length > 0) {
          this.transformData(
            item[this.props.children],
            level,
            item.Id,
            item.parentName || ""
          );
        }
      });
    }
  }
}

export { Store };
