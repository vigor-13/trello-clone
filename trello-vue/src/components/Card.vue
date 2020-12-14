<template>
  <Modal class="modal-card">
    <div class="modal-card-header" slot="header">
      <div class="modal-card-header-title">
        <input
          class="form-control"
          type="text"
          ref="inputTitle"
          :value="card.title"
          :readonly="!toggleTitle"
          @click="toggleTitle=true"
          @blur="onBlurTitle"
        >
      </div>
      <a class="modal-close-btn" @click.prevent="onClose" href="">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea
        class="form-control"
        cols="30" rows="3"
        ref="inputDesc"
        placeholder="Add a more detailed description..."
        :readonly="!toggleDesc"
        v-model="card.description"
        @click="toggleDesc=true"
        @blur="onBlurDesc"
      ></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import Modal from './Modal';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Modal,
  },

  computed: {
    ...mapState([
      'card',
      'board'
    ])
  },

  data() {
    return {
      toggleTitle: false,
      toggleDesc: false,
    }
  },

  created() {
    this.fetchCard();
  },

  methods: {
    ...mapActions([
      'FETCH_CARD',
      'UPDATE_CARD',
    ]),

    onClose() {
      this.$router.push(`/b/${this.board.id}`);
    },

    fetchCard() {
      const id = this.$route.params.cid
      this.FETCH_CARD({id});
    },

    onBlurTitle() {
      this.toggleTitle = false;

      const title = this.$refs.inputTitle.value.trim();
      if (!title) return

      this
        .UPDATE_CARD({ id: this.card.id, title })
        .then(() => this.fetchCard());
    },

    onBlurDesc() {
      this.toggleDesc = false;

      const description = this.$refs.inputDesc.value.trim();
      if (!description) return;

      this
        .UPDATE_CARD({ id: this.card.id, description })
        .then(() => this.fetchCard());
    }
  }
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
