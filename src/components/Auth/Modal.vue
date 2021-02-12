<template>
  <teleport to="#app">
    <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import styles from 'Sass/modal.module.sass'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
export default {
  name: 'Modal',
  props: {
    id: {}
  },
  data () {
    return {
      styles,
      modal: null
    }
  },
  mounted () {
    this.modal = new bootstrap.Modal(document.getElementById(this.id))
  },
  methods: {
    show () {
      this.modal.show()
    },
    hide () {
      this.modal.hide()
    }
  }
}
</script>
