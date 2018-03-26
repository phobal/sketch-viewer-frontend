<template>
  <div>
    <div class="sv-breadcrumb-content">
      <Breadcrumb>
        <BreadcrumbItem to="/">主项目页</BreadcrumbItem>
        <BreadcrumbItem>子项目</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Table size="large" :columns="columns1" :data="subprojectList"></Table>
    <div class="sv-button-contanier" @click="addProject">
      <Icon type="android-add" size="24" style="color: #FFF;"/>
    </div>
    <SubModal
      @on-ok="okHandler"
      @on-close="closeHandler"
    ></SubModal>
  </div>
</template>

<script>
import SubModal from './submodalform';

export default {
  name: 'SubProject',
  components: {
    SubModal,
  },
  beforeMount() {
    const { id } = this.$route.params;  // eslint-disable-line
    this.$store.commit('subproject/SET_PROJECTID', id);
  },
  mounted() {
    const { id } = this.$route.params;  // eslint-disable-line
    this.$store.dispatch('subproject/FETCH', id);
  },
  destroyed() {
    this.$store.commit('subproject/SET_PROJECTID', null);
  },
  data() {
    return {
      columns1: [{
        title: '标题',
        key: 'name',
      }, {
        title: '描述信息',
        key: 'description',
      }, {
        title: '创建时间',
        key: 'createdAt',
      }, {
        title: '操作',
        key: 'action',
        render: (h, params) => {  // eslint-disable-line
          return h('div', [
            h('Button', {
              props: {
                type: 'text',
                size: 'small',
              },
              on: {
                click: () => {
                  this.preview(params.row.filePath);
                },
              },
            }, '查看'),
            h('Button', {
              props: {
                type: 'text',
                size: 'small',
              },
              on: {
                click: () => {
                  this.edit(params.row._id);  // eslint-disable-line
                },
              },
            }, '编辑'),
            h('Button', {
              props: {
                type: 'text',
                size: 'small',
              },
              on: {
                click: () => {
                  this.delete(params.row._id);  // eslint-disable-line
                },
              },
            }, '删除'),
          ]);
        },
      }],
      data1: [{
        name: 'fengbo',
        age: '26',
        creatAt: '2018/03/21',
        filepath: 'http://ss.phobal.cn:8091/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6',
      }],
    };
  },
  computed: {
    subprojectList() {
      return this.$store.state.subproject.list;
    },
  },
  methods: {
    addProject() {
      this.$store.commit('subproject/SET_MODAL', true);
    },
    preview(path) {
      console.log(path);  // eslint-disable-line
      window.open(path);
    },
    edit(id) {
      this.$store.commit('subproject/SET_MODAL', true);
      const formdata = this.$store.state.subproject.list.find(d => d._id === id);  // eslint-disable-line
      this.$store.commit('subproject/SET_FORMDATA', JSON.parse(JSON.stringify(formdata)));
    },
    delete(id) {
      this.$store.dispatch('subproject/REMOVE', id);
    },
    okHandler(data) {
      const { id } = this.$route.params;
      if (data._id) {  // eslint-disable-line
        this.$store.dispatch('subproject/EDIT');
      } else {
        this.$store.dispatch('subproject/ADD', Object.assign({}, data, { projectId: id }));
      }
      this.closeHandler();
    },
    closeHandler() {
      this.$store.commit('subproject/SET_MODAL', false);
      this.$store.commit('subproject/SET_FORMDATA', {});
    },
  },
};
</script>

<style>
  .sv-button-contanier {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #5282EF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px;
    right: 80px;
    cursor: pointer;
  }
  .sv-button-contanier:hover {
    background: #3C63DF;
    transform: scale(1.1);
  }
  .sv-breadcrumb-content {
    height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
  }
</style>
