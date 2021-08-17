import { useState } from 'react'
import { useSelector } from 'react-redux'
import { paisSelector } from 'store/pais/selector'

import PaisList from '../components/pais.list'

import { useEffect } from 'react'

import {
  QueryPais,
  QueryPaisVariables,
  QueryPais_pais
} from 'graphql/generated/pais'
import { QUERY_PAIS } from 'graphql/queries/pais'
import { useQuery } from '@apollo/client'

const PaisListContainer = () => {
  const pais = useSelector(paisSelector)
  const [filter, setFilter] = useState<string>()
  const [newData, setNewData] = useState<Omit<QueryPais_pais, '__typename'>[]>()
  const { data } = useQuery<QueryPais, QueryPaisVariables>(QUERY_PAIS, {
    variables: { name: filter }
  })

  useEffect(() => {
    if (data) getData(data)
  }, [data])

  const getData = async (data: QueryPais) => {
    try {
      const { Country } = data

      const result = Country.map((itemCountry) => {
        const result = pais.find((item) => {
          return item._id === itemCountry._id
        })
        return result ? result : itemCountry
      })
      setNewData(result)
    } catch (err) {
      // empty
    }
  }

  const onFilter = async (name?: string) => {
    setFilter(name)
  }

  return <PaisList data={newData} onFilter={onFilter} />
}

export default PaisListContainer
