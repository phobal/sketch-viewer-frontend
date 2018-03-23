<template>
  <div class="container">
    <p-card
      v-for="item in projectLists"
      @on-click="clickCard(item.id)"
      @on-edit="editHandler"
      @on-delete="deleteHandler"
      :id="item._id"
      :imgSrc="item.imgSrc || 'https://cn.vuejs.org/images/logo.png'"
      :name="item.name"
      :description="item.description"
      :key="item.name"
    ></p-card>
    <div class="sv-button-contanier" @click="addProject">
      <Icon type="android-add" size="24" style="color: #FFF;"/>
    </div>
    <PModal
      :show="showModal"
      @on-ok="okHandler"
      @on-close="closeHandler"
    ></PModal>
  </div>
</template>

<script>
import PCard from './card';
import PModal from './modal';

export default {
  name: 'ProjectList',
  components: {
    PCard,
    PModal,
  },
  data() {
    return {
      // projectLists: [{
      //   id: '123',
      //   imgSrc: 'https://cn.vuejs.org/images/logo.png',
      //   name: '机器学习平台',
      //   description: '集模型创建、训练、测试和发布一站式解决方案',
      // }],
      showModal: false,
    };
  },
  computed: {
    projectLists() {
      return this.$store.state.project.list;
    },
  },
  mounted() {
    this.$store.dispatch('project/FETCH');
  },
  methods: {
    addProject() {
      this.showModal = true;
    },
    okHandler(data) {
      // this.showModal = false;
      console.log('ok', data);  // eslint-disable-line
      if (data._id) {  // eslint-disable-line
        this.$store.dispatch('project/EDIT');
      } else {
        this.$store.dispatch('project/ADD', data);
      }
      this.closeHandler();
    },
    closeHandler() {
      this.showModal = false;
      this.$store.commit('project/SET_FORMDATA', {});
    },
    clickCard(id) {
      console.log(id);  // eslint-disable-line
      this.$router.push(`/subproject/${id}`);
    },
    editHandler(id) {
      this.showModal = true;
      const formdata = this.$store.state.project.list.find(d => d._id === id);  // eslint-disable-line
      this.$store.commit('project/SET_FORMDATA', JSON.parse(JSON.stringify(formdata)));
    },
    deleteHandler(id) {
      this.$store.dispatch('project/REMOVE', id);
    },
  },
};
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }
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
</style>
