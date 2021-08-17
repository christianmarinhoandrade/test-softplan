/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPais } from 'store/pais/action'

import PaisForm, { FormHandles } from '../components/pais.form'

import {
  QueryPais,
  QueryPaisVariables,
  QueryPais_pais
} from 'graphql/generated/pais'
import { QUERY_PAIS } from 'graphql/queries/pais'
import { useQuery } from '@apollo/client'

export type Form = {
  name: string
  capital: string
  area: number
  population: number
  topLevelDomains: string
}

const PaisEditContainer = () => {
  const { id: idParams } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const paisFormRef = useRef<FormHandles>(null)
  const [svg, setSvg] = useState<string>()
  const [id, setId] = useState<string>()
  const history = useHistory()

  const { data } = useQuery<QueryPais, QueryPaisVariables>(QUERY_PAIS, {
    variables: { id: idParams }
  })

  useEffect(() => {
    if (data) {
      if (data.Country.length) {
        setSvg(data!.Country[0].flag.svgFile)
        setId(data!.Country[0]._id)
        paisFormRef.current?.getData(data!.Country[0])
      }
    }
  }, [data])

  const onSubmit = async (
    data: Omit<QueryPais_pais, '_id' & 'topLevelDomains'> & {
      topLevelDomains: string
    }
  ) => {
    dispatch(
      setPais({
        ...data,
        _id: id!,
        topLevelDomains: [{ name: data.topLevelDomains }],
        flag: { svgFile: svg! }
      })
    )

    toast.success('Registro atualizado com sucesso.')
    history.push('/pais/list')
  }

  return <PaisForm type="E" svg={svg} onSubmit={onSubmit} ref={paisFormRef} />
}

export default PaisEditContainer
