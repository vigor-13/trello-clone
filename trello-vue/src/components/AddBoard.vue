<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a
          href=""
          class="modal-default-button"
          @click.prevent="SET_IS_ADD_BOARD(false)"
        >
          &times;
        </a>
      </h2>
    </div>
    <div slot="body">
      <form
        id="add-board-form"
        @submit.prevent="addBoard"
      >
        <input
          class="form-control"
          type="text"
          ref="input"
          v-model="input"
        >
      </form>
    </div>
    <div slot="footer">
      <button
        class="btn"
        type="submit"
        form="add-board-form"
        :class="{'btn-success': isValidInput}"
        :disabled="!isValidInput"
      >
        Create Board
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import Modal from './Modal';

export default {
  components: { Modal },

  data() {
    return {
      input: '',
      isValidInput: false
    }
  },

  watch: {
    input(v) {
      this.isValidInput = v.trim().length > 0
    }
  },

  mounted() {
    this.$refs.input.focus();
  },

  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD',
    ]),

    ...mapActions([
      'ADD_BOARD',
      'FETCH_BOARDS',
    ]),

    addBoard() {
      this
        .ADD_BOARD({ title: this.input })
        .then(() => {
          this.SET_IS_ADD_BOARD(false);
          this.FETCH_BOARDS();
        });
    }
  }
}
</script>

<style>

</style>
