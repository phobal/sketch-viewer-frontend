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
  /* eslint-disable */
  name: 'PModal',
  data() {
    return {
      loading: false,
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
  computed: {
    projectFormData() {
      return this.$store.state.project.formdata;
    },
    show: {
      get: function () {
        return this.$store.state.project.showModal;
      },
      set: function () {},
    },
  },
};
</script>

<style>
  @import './index.less';
</style>
