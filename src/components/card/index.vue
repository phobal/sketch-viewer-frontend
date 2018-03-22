<template>
  <Card style="width:320px; height:320px; margin: 20px 10px; cursor: pointer;">
      <div style="text-align:center" @click="clickHandler">
          <img width="200px" height="200px" :src="imgSrc">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
      </div>
      <a href="#" slot="extra">
        <Dropdown @on-click="editHandler" placement="right-start">
          <a href="javascript:void(0)">
              <Icon type="more" size="24"></Icon>
          </a>
          <DropdownMenu slot="list">
              <DropdownItem name="edit" divided>编辑</DropdownItem>
              <DropdownItem name="delete"  divided>删除</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </a>
  </Card>
</template>

<script>
export default {
  name: 'PCard',
  props: {
    imgSrc: String,
    name: String,
    description: String,
  },
  methods: {
    editHandler(value) {
      console.log(value);  // eslint-disable-line
    },
    clickHandler() {
      this.$emit('on-click');
    },
  },
};
</script>

<style>
  @import './index.css';
</style>
