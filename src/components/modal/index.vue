<template>
  <Modal
    v-model="show"
    title="新建项目"
    :loading="loading"
    @on-ok="asyncOK"
    @on-cancel="asyncClose"
  >
    <Form :model="projectFormData" :label-width="80">
      <FormItem label="项目名称">
        <Input v-model="projectFormData.name" placeholder="请输入项目名称" />
      </FormItem>
      <FormItem label="项目描述">
        <Input v-model="projectFormData.description" type="textarea" placeholder="请输入项目描述信息" />
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'PModal',
  props: {
    show: Boolean,
  },
  data() {
    return {
      loading: false,
      projectFormData: {
        name: '',
        description: '',
        imgSrc: '',
      },
    };
  },
  methods: {
    asyncOK() {
      console.log(this.projectFormData);  // eslint-disable-line
      this.$emit('on-ok', this.projectFormData);
    },
    asyncClose() {
      this.$emit('on-close');
    },
  },
  // computed: {
  //   showModal() {
  //     return this.props.show;
  //   },
  // },
};
</script>

<style>
  @import './index.less';
</style>
