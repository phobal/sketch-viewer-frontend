<template>
  <div>
    <div class="sv-breadcrumb-content">
      <Breadcrumb>
        <BreadcrumbItem to="/">主项目页</BreadcrumbItem>
        <BreadcrumbItem>子项目</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Table size="large" :columns="columns1" :data="data1"></Table>
    <div class="sv-button-contanier" @click="addProject">
      <Icon type="android-add" size="24" style="color: #FFF;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubProject',
  data() {
    return {
      columns1: [{
        title: '标题',
        key: 'name',
      }, {
        title: '描述信息',
        key: 'age',
      }, {
        title: '创建时间',
        key: 'creatAt',
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
                  this.preview(params.row.filepath);
                },
              },
            }, '查看'),
            h('Button', {
              props: {
                type: 'text',
                size: 'small',
              },
            }, '编辑'),
            h('Button', {
              props: {
                type: 'text',
                size: 'small',
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
  methods: {
    addProject() {},
    preview(path) {
      console.log(path);  // eslint-disable-line
      window.open(path);
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
