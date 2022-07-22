## 虚拟树

> 此组件为Vue2.x开发,  Vue3.x正在开发中

> 开源不易 如果对你有一点帮助 点个免费的start吧 这将是我更新维护的全部动力

You don't speak Chinese? <a href="https://github.com/chendonming/virtualtree/blob/master/README.en.md">Click to view the English version</a>

### 介绍

虚拟列表其实是按需显示的一种实现，即只对可见区域进行渲染，
对非可见区域中的数据不渲染或部分渲染的技术，从而达到极高的渲染性能。

经过WebGl数万条构件洗礼摧残依然屹立不倒, 值得信赖.

<a href="https://5kgy3l.csb.app/">点击通过codesanbox查看演示</a>

## 使用
```js
import VirtualTree from "virtualtree-vue2";
import "virtualtree-vue2/lib/virtualtree-vue2.css";

Vue.use(VirtualTree);
```

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
```

因为虚拟树需要通过滚动视口确定区域, 所以初始化时`virtual-tree`所占的DOM必须有高度, 这个高度可以是由父级设置的.

可以为每行数据定义插槽
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
```
默认插槽中会注入当前节点的数据, `parentName`是自动生成的一个关联父级字段, 类似面包屑这样的字符串
```
全部 > 节点1 > 字节2
```

点击对应节点的时候,会把添加一个`active`的className, 你可以自己设置样式来定义点击时的效果
```css
.treeitem_content_label.active {

}
```

## API

### handleChecked(obj, bool)
勾选某条数据, 会自动进行关联勾选
- obj 行数据
- bool true: 勾选 false: 取消勾选
```js
// eg:
this.$refs.tree.handleChecked(row, true)
```
### handleExpanded(obj, bool)
展开或关闭某条节点. 会自动进行关联展开或关闭
- obj 行数据
- bool true: 展开 false: 关闭
```js
// eg:
this.$refs.tree.handleExpanded(row, true)
```