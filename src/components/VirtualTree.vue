<template>
  <div class="VirtualTree">
    <virtual-tree-item />
  </div>
</template>

<script>
import VirtualTreeItem from "./VirtualTreeItem.vue";

export default {
  components: { VirtualTreeItem },
  name: "VirtualTree",
};
</script>