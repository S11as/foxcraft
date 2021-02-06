<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
          style="position: relative; z-index: 100;">
    Launch demo modal
  </button>

  <teleport to="#app">
    <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
export default {
  name: 'Modal',
  data () {
    return {
      styles
    }
  }
}
</script>
