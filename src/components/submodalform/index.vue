<template>
  <Modal
    v-model="show"
    title="添加新的设计稿"
    :mask-closable="maskClosable"
    @on-ok="asyncOK('projectFormData')"
    @on-cancel="asyncClose"
  >
    <Form :model="projectFormData" :label-width="80" ref="projectFormData" :rules="ruleValidate">
      <FormItem label="设计稿名称" prop="name">
        <Input v-model="projectFormData.name" placeholder="请输入设计稿名称" />
      </FormItem>
      <FormItem label="项目描述" prop="description">
        <Input v-model="projectFormData.description" type="textarea" placeholder="请输入设计稿描述信息" />
      </FormItem>
      <FormItem label="上传设计稿">
        <Upload
          multiple
          type="drag"
          :action="action"
          :on-success="onFileSuccess"
        >
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或者拖拽文件到此</p>
          </div>
        </Upload>
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
import BASEURL from '@/api/base';

export default {
  /* eslint-disable */
  name: 'SubModal',
  data() {
    return {
      loading: false,
      maskClosable: false,
      action: `${BASEURL}/upload`,
      ruleValidate: {
         name: [
           { required: true, message: '设计稿名称不能为空', trigger: 'blur' }
         ],
         description: [
           { required: true, message: '描述信息不能为空', trigger: 'blur' }
         ],
      },
    };
  },
  methods: {
    asyncOK(name) {
      console.log(this.$refs);  // eslint-disable-line
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit('on-ok', this.projectFormData);
        } else {
          this.$store.commit('subproject/SET_MODAL', false);
        }
      })
    },
    asyncClose() {
      this.$emit('on-close');
    },
    onFileSuccess(response) {
      console.log(response);  // eslint-disable-line
      this.$store.commit('subproject/SET_FILEPATH', response.data);
    }
  },
  computed: {
    projectFormData() {
      return this.$store.state.subproject.formdata;
    },
    show: {
      get: function () {
        return this.$store.state.subproject.showModal;
      },
      set: function () {},
    },
  },
};
</script>

<style>
  @import './index.less';
</style>
