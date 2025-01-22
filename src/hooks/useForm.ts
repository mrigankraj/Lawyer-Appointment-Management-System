import { useState } from 'react'

interface FormState {
  values: Record<string, any>
  errors: Record<string, string>
  touched: Record<string, boolean>
}

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validate?: (values: T) => Record<string, string>
) => {
  const [state, setState] = useState<FormState>({
    values: initialValues,
    errors: {},
    touched: {},
  })

  const handleChange = (name: string, value: any) => {
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      touched: { ...prev.touched, [name]: true },
    }))

    if (validate) {
      const errors = validate({ ...state.values, [name]: value })
      setState((prev) => ({ ...prev, errors }))
    }
  }

  const handleBlur = (name: string) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
    }))

    if (validate) {
      const errors = validate(state.values)
      setState((prev) => ({ ...prev, errors }))
    }
  }

  const resetForm = () => {
    setState({
      values: initialValues,
      errors: {},
      touched: {},
    })
  }

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    handleChange,
    handleBlur,
    resetForm,
  }
}
