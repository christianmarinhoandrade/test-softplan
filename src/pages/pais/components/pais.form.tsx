/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { forwardRef, useImperativeHandle, Ref } from 'react'
import { useSelector } from 'react-redux'
import { paisSelector } from 'store/pais/selector'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../validation'

import Input from 'components/Input'
import { Button } from 'components/Button'
import { Form as FormType } from '../containers/pais.edit.container'

import { QueryPais_pais } from 'graphql/generated/pais'

import * as S from '../styles'

type FormProps = {
  type: string
  svg?: string
  onSubmit?: (
    data: Omit<QueryPais_pais, '_id' & 'topLevelDomains'> & {
      topLevelDomains: string
    }
  ) => void
}

export type FormHandles = {
  getData: (data: Omit<QueryPais_pais, '__typename'>) => void
}

const Form = ({ type, svg, onSubmit }: FormProps, ref: Ref<FormHandles>) => {
  const pais = useSelector(paisSelector)
  const history = useHistory()
  const methods = useForm<FormType>({
    resolver: yupResolver(schema)
  })

  const getData = async (data: Omit<QueryPais_pais, '__typename'>) => {
    try {
      const resultCountry = data
      const result = pais.find((item) => item._id === resultCountry._id)

      console.log(resultCountry.name)
      console.log(methods)

      methods.setValue('name', result ? result.name : resultCountry.name)
      methods.setValue(
        'capital',
        result ? result.capital : resultCountry.capital
      )
      methods.setValue('area', result ? result.area : resultCountry.area)
      methods.setValue(
        'population',
        result ? result.population : resultCountry.population
      )
      methods.setValue(
        'topLevelDomains',
        result
          ? result.topLevelDomains[0].name
          : resultCountry.topLevelDomains[0].name
      )
    } catch (err) {
      //empty
    }
  }

  useImperativeHandle(ref, () => {
    return {
      getData
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods

  return (
    <>
      <S.ContentTitle>
        <h1 className="title">{type === 'E' ? 'Edição' : 'Visualização'}</h1>
        <img src={svg} width="100px" height="50px" />
      </S.ContentTitle>
      <S.Form
        id="form-pais"
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
      >
        <Input
          label="Nome"
          id="name"
          type="text"
          errors={errors}
          disabled={type === 'V'}
          {...register('name')}
        />
        <Input
          label="Capital"
          id="capital"
          type="text"
          errors={errors}
          disabled={type === 'V'}
          {...register('capital')}
        />
        <Input
          label="Área"
          id="area"
          type="number"
          errors={errors}
          disabled={type === 'V'}
          {...register('area')}
        />
        <Input
          label="População"
          id="population"
          type="text"
          errors={errors}
          disabled={type === 'V'}
          {...register('population')}
        />
        <Input
          label="Top Level Domain"
          id="topLevelDomains"
          type="text"
          errors={errors}
          disabled={type === 'V'}
          {...register('topLevelDomains')}
        />
        {type === 'E' && (
          <Button type="submit" height="40px">
            Confirmar
          </Button>
        )}
        <Button
          onClick={() => {
            history.push('/pais/list')
          }}
          height="40px"
          backgroundColor="#eee"
        >
          Voltar
        </Button>
      </S.Form>
    </>
  )
}

export default forwardRef(Form)
