import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Tooltip from 'rc-tooltip'

import Input from 'components/Input'
import { Button } from 'components/Button'
import Card from 'components/Card'

import { CalendarEdit } from '@styled-icons/boxicons-regular'
import { Eye } from '@styled-icons/bootstrap/Eye'
import { FilterAlt } from '@styled-icons/material-sharp/FilterAlt'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaFilterList } from '../validation'

import { QueryPais_pais } from 'graphql/generated/pais'

import { Wrapper, Content, FormFilter } from '../styles'

type ListProps = {
  data?: Omit<QueryPais_pais, '__typename'>[]
  onFilter?: (name?: string) => void
}

type FormFilter = {
  name?: string
}

const List = ({ data, onFilter }: ListProps) => {
  const [filter, setFilter] = useState<FormFilter>()
  const history = useHistory()
  const { register, handleSubmit } = useForm<FormFilter>({
    resolver: yupResolver(schemaFilterList)
  })

  const onSubmit = ({ name }: FormFilter) => {
    setFilter({ name })
  }

  useEffect(() => {
    if (onFilter) onFilter(!filter?.name ? undefined : filter.name)
  }, [filter])

  const actions = [
    {
      tooltip: 'Edição',
      backgroundColor: '#e64a0d',
      onClick: (id: string) => {
        history.push(`/pais/edit/${id}`)
      },
      icon: function Icon() {
        return <CalendarEdit />
      }
    },
    {
      tooltip: 'Viusalização',
      backgroundColor: '#3f9c35',
      onClick: (id: string) => {
        history.push(`/pais/view/${id}`)
      },
      icon: function Icon() {
        return <Eye />
      }
    }
  ]

  return (
    <Wrapper>
      <h1 className="title">Lista</h1>

      <FormFilter onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" id="name" type="text" {...register('name')} />
        <Tooltip
          placement="top"
          trigger={['hover']}
          overlay={<span>Filtrar</span>}
        >
          <Button
            type="submit"
            icon={<FilterAlt />}
            width="25px"
            height="46px"
          />
        </Tooltip>
      </FormFilter>
      <Content>
        {data?.map((item: Omit<QueryPais_pais, '__typename'>) => (
          <Card key={parseInt(item._id)} item={item} actions={actions} />
        ))}
      </Content>
    </Wrapper>
  )
}

export default List
