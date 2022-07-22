## virtual tree

> This component is developed for Vue2.x, Vue3.x is under development

> Open source is not easy. If it helps you a little, click on a free start. This will be the whole motivation for me to update and maintain.
### introduce

The virtual list is actually an implementation of on-demand display, that is, only the visible area is rendered.
A technique that does not render or partially renders data in non-visible areas, resulting in extremely high rendering performance.

After the baptism of tens of thousands of WebGl components, it still stands and is trustworthy.

<a href="https://5kgy3l.csb.app/">Click to view demo via codesanbox</a>

## use
````js
import VirtualTree from "virtualtree-vue2";
import "virtualtree-vue2/lib/virtualtree-vue2.css";

Vue.use(VirtualTree);
````

```html
<virtual-tree
  :data="data"
  :props="props"
  @node-click="handleNodeClick"
  @checked="handleChecked"
  ref="tree"
>
</virtual-tree>

<script>
  export default {
    data() {
      return {
         props: {
            children: "TestChildren",
            label: "Label",
            key: "uuid",
          },
      }
    }
  }
</script>
````

Because the virtual tree needs to determine the area by scrolling the viewport, the DOM occupied by `virtual-tree` must have a height when initialized, and this height can be set by the parent.

Slots can be defined for each row of data
```html
<virtual-tree
  :data="data"
  :props="props"
  @node-click="handleNodeClick"
  @checked="handleChecked"
>
  <template #default="{ text, parentName }">
    <div class="test-slot">{{ text }} {{ parentName }}</div>
  </template>
</virtual-tree>
````
The data of the current node will be injected into the default slot. `parentName` is an automatically generated associated parent field, a string like breadcrumbs
````
All > Node 1 > Byte 2
````

When you click on the corresponding node, an `active` className will be added, and you can set the style yourself to define the effect of the click
````css
.treeitem_content_label.active {

}
````

## API

### handleChecked(obj, bool)
Check a piece of data, it will be automatically checked
- obj row data
- bool true: checked false: unchecked
````js
// eg:
this.$refs.tree.handleChecked(row, true)
````
### handleExpanded(obj, bool)
Expand or close a node. It will automatically expand or close the association
- obj row data
- bool true: expand false: close
````js
// eg:
this.$refs.tree.handleExpanded(row, true)
````
