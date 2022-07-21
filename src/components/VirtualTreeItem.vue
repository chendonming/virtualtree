<template>
  <div
    ref="list"
    class="virtual-tree-item pointer"
    @scroll="scrollEvent($event)"
  >
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div
        ref="items"
        class="infinite-list-item e-treeitem"
        v-for="root in visibleData"
        :key="root[props.key]"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
      >
        <div
          class="e-treeitem_content"
          :style="{ 'padding-left': (root.level - 1) * indent + 'px' }"
        >
          <span
            class="treeitem_content_icon pointer"
            :class="[root.hasChildren ? '' : 'is-leaf']"
          >
            <i
              class="iconfont"
              @click="handleExpandIconClick(root, !root.expanded)"
              :class="[
                root.expanded ? 'icon-icon-test12' : 'icon-icon-test101',
              ]"
            ></i>
            <i v-if="root.loadStatus" class="icon-e-loading"></i>
          </span>
          <span class="treeitem_checkbox">
            <e-checkbox
              :style="{ visibility: root.isCheckbox ? 'hidden' : 'visible' }"
              :value="root.checked"
              @input="handleChecked(root, $event)"
              :indeterminate="root.indeterminate"
            ></e-checkbox>
          </span>
          <div
            @click="handleNodeClick(root)"
            :title="root.text"
            :class="{
              active: active === root[props.key],
              disabled: root.disabled,
            }"
            class="treeitem_content_label"
          >
            <slot v-bind="root">
              {{ root.text }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ECheckbox from "./CheckBox.vue";

export default {
  name: "VirtualTreeItem",
  components: { ECheckbox },
  props: {
    data: {
      type: Array,
      default: () => [],
    },

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
          key: "uuid",
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

  mounted() {
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
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
      return this.data.slice(this.start, Math.min(this.end, this.data.length));
    },
  },

  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop;
      this.start = Math.floor(scrollTop / this.itemSize);
      this.end = this.start + this.visibleCount;
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },

    handleNodeClick(root) {
      if (root[this.props.disabled]) {
        return;
      }
      this.active = root[this.props.key];
      this.$emit("node-click", root);
    },

    handleChecked(root, evt) {
      this.$emit("checked", root, evt);
    },

    handleExpandIconClick(root, evt) {
      this.$emit("expanded", root, evt);
    },
  },
};
</script>

<style scoped>
.virtual-tree-item {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

.treeitem_content_label {
  flex: 1;
  width: 0;
}

.e-treeitem_content {
  text-align: left;
  display: flex;
  align-items: center;
}

.treeitem_content_label.disabled {
  color: #bcb9b9;
  cursor: not-allowed;
}

.treeitem_content_icon.is-leaf {
  visibility: hidden;
}

.infinite-list-item {
  color: #555;
  box-sizing: border-box;
}
</style>