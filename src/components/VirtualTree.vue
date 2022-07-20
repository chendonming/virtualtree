<template>
  <div class="VirtualTree">
    <virtual-tree-item
      @checked="handleChecked"
      @expanded="handleExpanded"
      :props="props"
      :data="list"
      :itemSize="22"
    />
  </div>
</template>

<script>
import VirtualTreeItem from "./VirtualTreeItem.vue";
import { Store } from "./VirtualTreeStore";
import _ from "lodash";

export default {
  components: { VirtualTreeItem },
  name: "VirtualTree",
  props: {
    data: {
      type: Array,
      default: () => [],
    },

    props: {
      type: Object,
      default() {
        return {
          children: "children",
          label: "label",
          disabled: "disabled",
          checked: "checked",
        };
      },
    },
  },

  data() {
    return {
      list: [],
    };
  },

  watch: {
    data() {
      this.computedData();
    },
  },

  created() {
    this.computedData();
  },

  methods: {
    computedData() {
      const store = new Store({
        data: _.cloneDeep(this.data),
        props: this.props,
      });

      this.store = store;
      this.list = store.data;
    },

    handleChecked(obj, e) {
      this.store.setValue(obj.Id, "checked", e);
    },
    handleExpanded(root, e) {
      this.store.setValue(root.Id, "expanded", e);
      const index = this.list.findIndex((v) => v.Id === root.Id);
      // 向下展开
      if (e) {
        root.children.forEach((row, i) => {
          this.list.splice(index + i + 1, 0, row);
        });

        this.store.setChildrenCount(root.Id, root.children.length);
      } else {
        const length = root.childrenCount;
        this.list.splice(index + 1, length);
        this.store.setChildrenCount(root.Id, -root.children.length);
        // 子节点全部关闭
        this.store.closeAllChildren(root.Id);
      }

      console.log("list: ", this.list);
    },
  },
};
</script>

<style scoped>
.VirtualTree {
  font-size: 14px;
}
</style>