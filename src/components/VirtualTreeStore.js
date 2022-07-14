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
}

export { Store };
