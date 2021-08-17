/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import PaisForm, { FormHandles } from '../components/pais.form'

import { QueryPais, QueryPaisVariables } from 'graphql/generated/pais'
import { QUERY_PAIS } from 'graphql/queries/pais'
import { useQuery } from '@apollo/client'

export type Form = {
  name: string
  capital: string
  area: number
  population: number
  topLevelDomains: string
}

const PaisViewContainer = () => {
  const paisFormRef = useRef<FormHandles>(null)
  const [svg, setSvg] = useState<string>()
  const { id: idParams } = useParams<{ id: string }>()

  const { data } = useQuery<QueryPais, QueryPaisVariables>(QUERY_PAIS, {
    variables: { id: idParams }
  })

  useEffect(() => {
    if (data) {
      if (data.Country.length) {
        setSvg(data!.Country[0].flag.svgFile)
        paisFormRef.current?.getData(data!.Country[0])
      }
    }
  }, [data])

  return <PaisForm type="V" svg={svg} ref={paisFormRef} />
}

export default PaisViewContainer
