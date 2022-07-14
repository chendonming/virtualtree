<template>
  <div class="VirtualTree">
    <virtual-tree-item :props="props" :data="list" :itemSize="33"/>
  </div>
</template>

<script>
import VirtualTreeItem from "./VirtualTreeItem.vue";
import { Store } from "./VirtualTreeStore";

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
        data: this.data,
        props: this.props,
      });

      this.store = store;
      this.list = store.data;
    },
  },
};
</script>

<style scoped>
.VirtualTree {
  height: 600px;
}
</style>