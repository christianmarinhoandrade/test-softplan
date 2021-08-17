import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  capital: yup.string().required('Campo obrigatório'),
  area: yup.number().required('Campo obrigatório'),
  population: yup.number().required('Campo obrigatório'),
  topLevelDomains: yup.string().required('Campo obrigatório')
})
const schemaFilterList = yup.object().shape({
  name: yup.string()
})

export { schema, schemaFilterList }
