<template>
  <Modal
    v-model="show"
    title="新建项目"
    :loading="loading"
    @on-ok="asyncOK"
    @on-cancel="asyncClose"
  >
    <Form :model="projectFormData" :label-width="80">
      <FormItem label="图标">
        <Upload
          multiple
          type="drag"
          :action="action"
          :on-success="onFileSuccess"
        >
          <div style="padding: 20px 0">
            <Icon type="image" size="52" style="color: #3399ff"></Icon>
            <p>点击或者拖拽图片到此</p>
          </div>
        </Upload>
      </FormItem>
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
import BASEURL from '@/api/base';

export default {
  /* eslint-disable */
  name: 'PModal',
  data() {
    return {
      action: `${BASEURL}/upload/avator`,
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
    onFileSuccess(response) {
      console.log(response);  // eslint-disable-line
      this.$store.commit('project/SET_FILEPATH', response.data);
    }
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
