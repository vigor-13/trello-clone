<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a
          href=""
          class="modal-default-button"
          @click.prevent="close"
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
    close() {
      this.$emit('close');
    },

    addBoard() {
      this.$emit('close');
      this.$emit('submit', this.input);
    }
  }
}
</script>

<style>

</style>
