<template>
  <div class="container">
    <p-card
      v-for="item in projectLists"
      @on-click="clickCard(item._id)"
      @on-edit="editHandler"
      @on-delete="deleteHandler"
      :id="item._id"
      :imgSrc="item.imgSrc || 'https://cn.vuejs.org/images/logo.png'"
      :name="item.name"
      :description="item.description"
      :key="item._id"
    ></p-card>
    <div class="sv-button-contanier" @click="addProject">
      <Icon type="android-add" size="24" style="color: #FFF;"/>
    </div>
    <PModal
      @on-ok="okHandler"
      @on-close="closeHandler"
    ></PModal>
  </div>
</template>

<script>
import PCard from './card';
import PModal from './pmodalform';

export default {
  name: 'ProjectList',
  components: {
    PCard,
    PModal,
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
      this.$store.commit('project/SET_MODAL', true);
    },
    okHandler(data) {
      if (data._id) {  // eslint-disable-line
        this.$store.dispatch('project/EDIT');
      } else {
        this.$store.dispatch('project/ADD', data);
      }
      this.closeHandler();
    },
    closeHandler() {
      this.$store.commit('project/SET_MODAL', false);
      this.$store.commit('project/SET_FORMDATA', {});
    },
    clickCard(id) {
      this.$router.push(`/subproject/${id}`);
    },
    editHandler(id) {
      this.$store.commit('project/SET_MODAL', true);
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
