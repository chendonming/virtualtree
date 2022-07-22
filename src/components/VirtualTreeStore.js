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

  /**
   * 通过id获取被勾选的子节点数量
   */
  getCheckedChildrenById(id) {
    const n = this.map[id][this.props.children];
    return n.filter((v) => v.checked);
  }

  /**
   * 勾选节点
   * @param ids
   * @param bool
   * @returns 参与勾选的节点id
   */
  setCheckedByKey(ids, bool) {
    const arrid = ids.map((v) => this.map[v]);
    ids.forEach((id) => {
      const node = this.map[id];
      const children = this.props.children;
      // 模拟事件循环向下
      const eventDown = (arr) => {
        arr.forEach((row) => {
          arrid.push(row);
          row.checked = bool;
          if (!bool) {
            row.indeterminate = false;
          }

          if (row[children] && row[children].length > 0) {
            eventDown(row[children]);
          }
        });
      };

      // 模拟事件循环向上
      const eventUp = (data, indeterminate) => {
        const children = data[this.props.children].length;
        const checkedArr = this.getCheckedChildrenById(
          data[this.props.key]
        ).length;
        if (checkedArr === 0 && children === 0) {
          data.checked = bool;
        }

        if (checkedArr === 0 && children !== 0) {
          data.checked = false;
        }

        if (children === checkedArr && checkedArr !== 0) {
          data.checked = true;
        }

        if (indeterminate) {
          data.indeterminate = true;
          data.checked = false;
        } else {
          if (checkedArr > 0 && checkedArr < children) {
            data.indeterminate = true;
            data.checked = false;
          } else {
            data.indeterminate = false;
          }
        }

        if (data.parent) {
          eventUp(this.map[data.parent], data.indeterminate || indeterminate);
        }
      };

      eventDown(node[children]);
      eventUp(node);
    });

    return arrid;
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

  transformData(data, n, parent, parentName, parentIds) {
    let level = n || 0;
    level++;
    if (data.length > 0) {
      data.forEach((item) => {
        item[this.props.key] = item[this.props.key] || this.uuid();
        if (!item.parentIds) {
          item.parentIds = []
        }
        if (parent)
          item.parentIds = [...parentIds, parent]
        item.parent = parent;
        item.parentName = parentName
          ? parentName + " > " + item[this.props.label]
          : item[this.props.label];
        this.map[item[this.props.key]] = item;
        item.data = JSON.parse(JSON.stringify(item));
        item.checked =
          typeof item[this.props.checked] !== "undefined"
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
            item[this.props.key],
            item.parentName || "",
            item.parentIds
          );
        }
      });
    }
  }
}

export { Store };
