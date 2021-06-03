<template>
  <b-container>
    <b-row class="d-flex justify-content-center py-3">
      <b-col xl="3" class="pb-3">
        <b-card bg-variant="light" no-body class="shadow">
          <b-card-header>{{ user.username }}</b-card-header>
          <SkinViewer ref="skinviewer" :skinUrl="user.skin" :cloakUrl="user.cloak"></SkinViewer>
          <b-alert v-if="!user.skin" show variant="danger" align="center">У {{
              owner ? 'вас' : user.ext.gender == 'FEMALE' ? 'неё' : user.ext.gender == 'MALE' ? 'него' : 'этого пользователя'
            }} не установлен скин
          </b-alert>
          <b-card-footer class="p-0">
            <b-button-group vertical class="btn-block">
              <b-button-group v-if="owner">
                <b-button squared variant="light" @click="uploadSkin()" class="w-75">
                  <b-icon icon="file-earmark-image" aria-hidden="true"></b-icon>
                  скин
                </b-button>
                <b-button squared variant="light" class="border-0 bg-light" id="tp-remove-skin" bg-light
                          @click="removeSkin()">
                  <b-icon icon="x-circle" variant="danger" aria-label="Удалить скин"></b-icon>
                </b-button>
              </b-button-group>
              <b-button-group v-if="owner">
                <b-button squared variant="light" @click="uploadCloak()" class="w-75">
                  <b-icon icon="file-earmark-image" aria-hidden="true"></b-icon>
                  плащ
                </b-button>
                <b-button squared variant="light" class="border-0" id="tp-remove-cloak" @click="removeCloak()">
                  <b-icon icon="x-circle" variant="danger" aria-label="Удалить плащ"></b-icon>
                </b-button>
              </b-button-group>
              <b-button v-if="owner" variant="light" @click="$refs.paymentButton.show()">
                <b-icon icon="credit-card" aria-hidden="true"></b-icon>
                пополнить
                <ShopPaymentInitButton ref="paymentButton"></ShopPaymentInitButton>
              </b-button>
              <b-button v-if="owner" variant="light" to="/user/security">
                <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                безопасность
              </b-button>
              <AdminPanel v-if="admin" :user="user"/>
            </b-button-group>
            <b-tooltip target="tp-remove-skin" triggers="hover" placement="right">
              Удалить скин
            </b-tooltip>
            <b-tooltip target="tp-remove-cloak" triggers="hover" placement="right">
              Удалить плащ
            </b-tooltip>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col xl="5" class="pb-3">
        <b-card no-body header="Информация" class="shadow">
          <b-list-group flush>
            <b-list-group-item v-if="currentUser.uuid" variant="light" class="d-flex align-items-center">
              <span class="flex-grow-1">UUID</span>
              <span class="w-75">
                <b-form-input
                  type="text"
                  v-model="currentUser.uuid"
                  disabled></b-form-input>
              </span>
            </b-list-group-item>
            <b-list-group-item v-if="user.ext.status || editProfileForm.show" variant="light"
                               class="d-flex align-items-center">
              <span class="flex-grow-1">Статус</span>
              <span v-if="!editProfileForm.show" class="w-75">
                <b-form-input
                  v-model="editProfileForm.status"
                  type="text"
                  placeholder="Ваш статус"
                  disabled></b-form-input>
              </span>
              <span v-if="editProfileForm.show" class="w-75">
                <b-form-input
                  v-model="editProfileForm.status"
                  type="text"
                  placeholder="Ваш статус"></b-form-input>
              </span>
            </b-list-group-item>
            <b-list-group-item v-if="user.ext.email" variant="light" class="d-flex align-items-center">
              <span class="flex-grow-1">Email</span>
              <span class="w-75">
                <b-form-input
                  type="text"
                  v-model="currentUser.ext.email"
                  disabled></b-form-input>
              </span>
            </b-list-group-item>
            <b-list-group-item variant="light" class="d-flex align-items-center">
              <span class="flex-grow-1">Пол</span>
              <span v-if="!editProfileForm.show" class="w-75">
                <b-form-select
                  v-model="editProfileForm.gender"
                  :options="editProfileForm.genderOptions" disabled>
                </b-form-select>
              </span>
              <span v-if="editProfileForm.show" class="w-75">
                <b-form-select
                  v-model="editProfileForm.gender"
                  :options="editProfileForm.genderOptions">
                </b-form-select>
              </span>
            </b-list-group-item>
          </b-list-group>
          <b-card-footer class="d-flex flex-row-reverse">
            <b-button
              v-if="!editProfileForm.show && (admin || owner)"
              @click="editProfileForm.show = !editProfileForm.show"
              variant="outline-info">Редактировать
            </b-button>
            <b-button v-if="editProfileForm.show" @click="editProfile" variant="success">Применить</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col xl="4" class="pb-3">
        <b-card no-body header="Донат" class="shadow">
          <b-card-title v-if="owner || admin" class="d-flex justify-content-center my-2">Валюта</b-card-title>
          <b-list-group v-if="owner || admin" flush>
            <b-list-group-item variant="light" class="d-flex align-items-center">
              <span class="flex-grow-1">Рубли</span>
              <b-badge variant="dark">{{ user.ext.donateMoney }}
                <b-icon icon="cash-stack" aria-hidden="true"></b-icon>
              </b-badge>
            </b-list-group-item>
            <b-list-group-item variant="light" class="d-flex align-items-center">
              <span class="flex-grow-1">Игровая</span>
              <b-badge variant="dark">{{ user.ext.economyMoney }}
                <b-icon icon="cash-stack" aria-hidden="true"></b-icon>
              </b-badge>
            </b-list-group-item>
            <b-list-group-item v-if="user.ext.extendedMoney > 0" variant="light" class="d-flex align-items-center">
              <span class="flex-grow-1">Особая</span>
              <b-badge variant="dark">{{ user.ext.extendedMoney }}
                <b-icon icon="cash-stack" aria-hidden="true"></b-icon>
              </b-badge>
            </b-list-group-item>
          </b-list-group>
          <b-card-title class="d-flex justify-content-center my-2">Группы</b-card-title>
          <b-list-group flush>
            <b-list-group-item v-for="group in user.ext.groups" :key="group.key" variant="light"
                               class="d-flex align-items-center">
              <span class="flex-grow-1">{{ group.name }}</span>
              <b-badge variant="danger">{{ group.days >= 0 ? group.days + ' дней' : 'навсегда' }}</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
// import { mapState } from 'vuex';
import SkinViewer from './SkinViewer'
import AdminPanel from './AdminPanel'
import ShopPaymentInitButton from '@/components/ShopCabinet/ShopPaymentInitButton'
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  props: ['user', 'owner', 'admin'],
  components: {
    SkinViewer,
    AdminPanel,
    ShopPaymentInitButton
  },
  // computed: mapState({
  //  user: state => state.user
  // })
  data: function () {
    return {
      editProfileForm: {
        show: false,
        status: this.currentUser.ext.status,
        gender: this.currentUser.ext.gender === undefined ? null : this.currentUser.ext.gender,
        genderOptions: [
          {
            value: null,
            text: 'Не указано',
            disabled: true
          },
          {
            value: 'FEMALE',
            text: 'Женский'
          },
          {
            value: 'MALE',
            text: 'Мужской'
          }
        ]
      },
      currentUser: {}
    }
  },
  watch: {
    'user.ext.status': function (newStatus) {
      this.editProfileForm.status = newStatus
    },
    'user.ext.gender': function (newGender) {
      this.editProfileForm.gender = newGender
    }
  },
  computed: {},
  mounted () {
    this.currentUser = this.user
  },
  methods: {
    editProfile: async function () {
      await this.$store.dispatch('request', {
        type: 'lkUpdateExtendedInfo',
        userUsername: (this.admin && !this.owner) ? this.currentUser.username : undefined,
        status: this.editProfileForm.status,
        gender: this.editProfileForm.gender
      })
      this.currentUser.ext.status = this.editProfileForm.status
      this.currentUser.ext.gender = this.editProfileForm.gender
      this.editProfileForm.show = false
    },
    adminDisable2FA: async function () {
      await this.$store.dispatch('request', {
        type: 'lkTwoFactorEnable',
        userUsername: this.currentUser.username
      })
    },
    adminChangePassword: async function (evt) {
      evt.preventDefault()
      await this.$store.dispatch('request', {
        type: 'lkChangePassword',
        userUsername: this.currentUser.username,
        newPassword: this.modalAdminChangePassword.newPassword
      })
      this.modalAdminChangePassword.show = false
    },
    adminChangeUsername: async function (evt) {
      evt.preventDefault()
      await this.$store.dispatch('request', {
        type: 'lkChangeUsername',
        userUsername: this.currentUser.username,
        newUsername: this.modalAdminChangeUsername.newUsername
      })
      this.modalAdminChangeUsername.show = false
    },
    uploadSkin: async function () {
      const data = await this.readFileToBase64()
      try {
        await this.$store.dispatch('request', {
          type: 'lkUploadSkin',
          skinType: 'SKIN',
          data: data.split('+').join('-').split('/').join('_')
        })
        if (!this.currentUser.skin) {
          this.updateSkinUrl()
        }
        this.$refs.skinviewer.updateSkin()
      } catch (e) {
        this.$bvToast.toast(e.error, {
          title: 'Ошибка при загрузке скина',
          variant: 'danger',
          autoHideDelay: 5000
        })
      }
    },
    uploadCloak: async function () {
      const data = await this.readFileToBase64()
      try {
        await this.$store.dispatch('request', {
          type: 'lkUploadSkin',
          skinType: 'CLOAK',
          data: data.split('+').join('-').split('/').join('_')
        })
        if (!this.currentUser.cloak) {
          this.updateSkinUrl()
        }
        this.$refs.skinviewer.updateCloak()
      } catch (e) {
        this.$bvToast.toast(e.error, {
          title: 'Ошибка при загрузке плаща',
          autoHideDelay: 5000
        })
      }
    },
    removeSkin: async function () {
      try {
        await this.$store.dispatch('request', {
          type: 'lkUploadSkin',
          skinType: 'SKIN',
          remove: true
        })
        this.currentUser.skin = null
      } catch (e) {
        this.$bvToast.toast(e.error, {
          title: 'Ошибка при удалении скина',
          autoHideDelay: 5000
        })
      }
    },
    removeCloak: async function () {
      try {
        await this.$store.dispatch('request', {
          type: 'lkUploadSkin',
          skinType: 'CLOAK',
          remove: true
        })
        this.currentUser.cloak = null
      } catch (e) {
        this.$bvToast.toast(e.error, {
          title: 'Ошибка при удалении плаща',
          autoHideDelay: 5000
        })
      }
    },
    updateSkinUrl: async function () {
      var info = await this.$store.dispatch('request', {
        type: 'profileByUUID',
        uuid: this.currentUser.uuid
      })
      this.currentUser.skin = info.playerProfile.skin ? info.playerProfile.skin.url : null
      this.currentUser.cloak = info.playerProfile.cloak ? info.playerProfile.cloak.url : null
    },
    readFileToBase64: async function () {
      return new Promise((resolve, reject) => {
        var input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/png'
        input.click()
        input.onchange = function (e) {
          // getting a hold of the file reference
          var file = e.target.files[0]

          // setting up the reader
          var reader = new FileReader()
          reader.readAsArrayBuffer(file)

          // here we tell the reader what to do when it's done reading...
          reader.onload = (readerEvent) => {
            var content = readerEvent.target.result // this is the content!
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(content))
            )
            resolve(base64String)
          }
          reader.onerror = (error) => {
            reject(error)
          }
        }
      })
    }
  }
}
</script>
