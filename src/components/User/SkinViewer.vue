<template>
  <canvas class="card-img-top" ref="skinview3dinst"></canvas>
</template>
<script>
import * as skinview3d from 'skinview3d'
export default {
  props: ['skinUrl', 'cloakUrl'],
  data: function () {
    return {
      counter: 0
    }
  },
  mounted: function () {
    this.skinViewer = new skinview3d.SkinViewer({
      canvas: this.$refs.skinview3dinst,
      width: 300,
      height: 400,
      skin: this.skinUrl ? this.skinUrl : this.$store.state.config.defaultSkinUrl,
      cape: this.cloakUrl ? this.cloakUrl : this.$store.state.config.defaultCloakUrl
    })
    this.skinViewer.canvas.style = ''
    const control = skinview3d.createOrbitControls(this.skinViewer)
    control.enableRotate = true
  },
  methods: {
    updateSkin () {
      this.skinViewer.loadSkin(!this.skinUrl ? this.$store.state.config.defaultSkinUrl : this.skinUrl + '?v=' + this.counter)
      this.counter++
    },
    updateCloak () {
      this.skinViewer.loadCape(!this.cloakUrl ? this.$store.state.config.defaultCloakUrl : this.cloakUrl + '?v=' + this.counter)
      this.counter++
    },
    removeSkin () {
      this.SkinViewer.loadSkin(null)
    },
    removeCloak () {
      this.SkinViewer.loadCape(null)
    }
  },
  watch: {
    skinUrl: function (newSkinUrl) {
      this.skinViewer.loadSkin(newSkinUrl)
    },
    cloakUrl: function (newCloakUrl) {
      this.skinViewer.loadCape(newCloakUrl)
    }
  }
}
</script>
