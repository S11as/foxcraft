import { ref, watch, reactive } from 'vue'

export default function useField (field) {
  const valid = ref(true)
  const value = ref(field.value)
  const errors = reactive({})

  const reval = newVal => {
    valid.value = true
    for (const key of Object.keys(field.validators)) {
      const isValid = field.validators[key](newVal)
      errors[key] = !isValid
      if (!isValid) {
        valid.value = false
      }
    }
  }

  watch(value, reval)
  reval(field.value)

  return {
    value,
    valid,
    errors
  }
}
