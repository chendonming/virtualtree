<template>
  <div class="virtual-tree-item">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div
        ref="items"
        class="infinite-list-item e-treeitem"
        v-for="root in visibleData"
        :key="root.Id"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
      >
        <div
          class="e-treeitem_content"
          :style="{ 'padding-left': (root.level - 1) * indent + 'px' }"
        >
          <span
            class="treeitem_content_icon"
            :class="[root.hasChildren ? '' : 'is-leaf']"
          >
            <i
              class="iconfont"
              @click="handleExpandIconClick(root)"
              :class="[root.expanded ? 'iconicon-test12' : 'iconicon-test101']"
            ></i>
            <i v-if="root.loadStatus" class="icon-e-loading"></i>
          </span>
          <span class="treeitem_checkbox">
            <e-checkbox
              :style="{ visibility: root.isCheckbox ? 'hidden' : 'visible' }"
              v-model="root.checked"
              @change="handleChecked(root, $event)"
              :indeterminate="root.indeterminate"
            ></e-checkbox>
          </span>
          <span
            @click="handleNodeClick(root)"
            :title="root.DisplayName"
            :class="{ active: active === root.Id }"
            class="treeitem_content_label"
          >
            {{ root.DisplayName }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VirtualTreeItem",
  props: {
    data: Array,

    itemSize: {
      type: Number,
      default: 33,
    },

    indent: {
      type: Number,
      default: 18,
    },

    nodeKey: String,

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
      screenHeight: 0,
      startOffset: 0,
      start: 0,
      end: null,
      active: null,
    };
  },

  computed: {
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },

    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`;
    },

    listHeight() {
      return this.data.length * this.itemSize;
    },

    visibleData() {
      return this.data.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      );
    },
  },

  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop;
      this.start = Math.floor(scrollTop / this.itemSize);
      this.end = this.start + this.visibleCount;
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },

    handleNodeClick() {

    },

    handleChecked() {

    },

    handleExpandIconClick() {

    }
  },
};
</script>

<style scoped>
</style>