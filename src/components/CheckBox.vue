<template>
  <label
    class="e-checkbox"
    :class="[
      model ? 'e-checkbox-checked' : '',
      disabled ? 'e-checkbox-disabled' : '',
      indeterminate ? 'e-checkbox-indeterminate' : '',
    ]"
  >
    <span class="e-checkbox__input">
      <span class="e-checkbox__inner"></span>
      <input
        ref="checkbox"
        class="e-checkbox-original"
        :value="value"
        type="checkbox"
        aria-hidden="true"
        v-model="model"
        tabindex="-1"
        :disabled="disabled"
      />
    </span>
    <span class="e-checkbox__label">
      <slot>{{ getLabel }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "ECheckbox",
  props: {
    value: Boolean,
    label: [String, Number, Boolean],
    disabled: Boolean,
    indeterminate: Boolean,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    getLabel() {
      return this.label ? this.label : "";
    },
  },
};
</script>

<style scoped>
.e-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.e-checkbox .e-checkbox__input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.e-checkbox .e-checkbox__input .e-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}

.e-checkbox .e-checkbox__input .e-checkbox__inner:hover {
  border-color: #409eff;
}

.e-checkbox .e-checkbox__input .e-checkbox__inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}

.e-checkbox .e-checkbox__label {
  font-size: 14px;
  padding-left: 6px;
}

.e-checkbox.e-checkbox-checked .e-checkbox__input .e-checkbox__inner {
  border-color: #1ccbd8;
  background: #1ccbd8;
}

.e-checkbox.e-checkbox-checked .e-checkbox__input .e-checkbox__inner:after {
  transform: rotate(45deg) scaleY(1);
}

.e-checkbox.e-checkbox-disabled .e-checkbox__input .e-checkbox__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  cursor: not-allowed;
}

.e-checkbox.e-checkbox-disabled .e-checkbox__input .e-checkbox__inner:after {
  border-color: #c0c4cc;
}

.e-checkbox.e-checkbox-disabled .e-checkbox__label {
  color: #c0c4cc;
  cursor: not-allowed;
}

.e-checkbox.e-checkbox-indeterminate .e-checkbox__input .e-checkbox__inner {
  border-color: #1ccbd8;
  background: #1ccbd8;
}

.e-checkbox.e-checkbox-indeterminate
  .e-checkbox__input
  .e-checkbox__inner:before {
  content: "";
  position: absolute;
  display: block;
  background-color: #fff;
  height: 2px;
  transform: scale(0.5);
  left: 0;
  right: 0;
  top: 5px;
}

.e-checkbox.e-checkbox-indeterminate.e-checkbox-disabled
  .e-checkbox__input
  .e-checkbox__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  cursor: not-allowed;
}

.e-checkbox.e-checkbox-indeterminate.e-checkbox-disabled
  .e-checkbox__input
  .e-checkbox__inner:before {
  content: "";
  position: absolute;
  display: block;
  background-color: #fff;
  height: 2px;
  transform: scale(0.5);
  left: 0;
  right: 0;
  top: 5px;
  background-color: #c0c4cc;
  border-color: #c0c4cc;
}

.e-checkbox .e-checkbox-original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
</style>
