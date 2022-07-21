<template>
  <div class="VirtualTree">
    <virtual-tree-item
      @checked="handleChecked"
      @expanded="handleExpanded"
      @node-click="handleNodeClick"
      :props="props"
      :data="list"
      :itemSize="22"
    >
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"
        ><slot :name="slot" v-bind="scope"
      /></template>
    </virtual-tree-item>
  </div>
</template>

<script>
import "@/assets/main.css";
import "@/assets/iconfont.css";
import VirtualTreeItem from "./VirtualTreeItem.vue";
import { Store } from "./VirtualTreeStore";
import cloneDeep from "lodash/cloneDeep";

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
          key: "uuid",
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
        data: cloneDeep(this.data),
        props: this.props,
      });

      this.store = store;
      this.list = store.data;
    },

    handleChecked(obj, e) {
      const arr = this.store.setCheckedByKey([obj[this.props.key]], e);
      this.$emit("checked", arr, e);
    },
    handleExpanded(root, e) {
      this.store.setValue(root[this.props.key], "expanded", e);
      const index = this.list.findIndex(
        (v) => v[this.props.key] === root[this.props.key]
      );
      // 向下展开
      if (e) {
        root[this.props.children].forEach((row, i) => {
          this.list.splice(index + i + 1, 0, row);
        });

        this.store.setChildrenCount(
          root[this.props.key],
          root[this.props.children].length
        );
      } else {
        const length = root.childrenCount;
        this.list.splice(index + 1, length);
        this.store.setChildrenCount(
          root[this.props.key],
          -root[this.props.children].length
        );
        // 子节点全部关闭
        this.store.closeAllChildren(root[this.props.key]);
      }
    },
    handleNodeClick(root) {
      this.$emit("node-click", root);
    },
  },
};
</script>


<style scoped>
.VirtualTree {
  font-size: 14px;
  user-select: none;
}
</style>