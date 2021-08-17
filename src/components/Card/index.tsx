/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Tooltip from 'rc-tooltip'

import { Button } from 'components/Button'

import { QueryPais_pais } from 'graphql/generated/pais'

import { StyledCard } from './styles'

type action = {
  tooltip: string
  backgroundColor: string
  id: string
  onClick: (id: string) => void
  icon: () => JSX.Element
}

type cardProps = {
  item: Omit<QueryPais_pais, '__typename'>
  key: number
  actions: Omit<action, 'id'>[]
}

const ButtonAction = (props: action & { index: number }) => {
  return (
    <Tooltip
      placement="top"
      trigger={['hover']}
      overlay={<span>{props.tooltip}</span>}
    >
      <Button
        width="30px"
        height="30px"
        icon={props.icon()}
        backgroundColor={props.backgroundColor}
        onClick={() => props.onClick(props.id)}
      />
    </Tooltip>
  )
}
const Card = (props: cardProps) => {
  const { item, actions } = props
  const id = item._id
  return (
    <StyledCard>
      <div className="top">
        {item.name}
        <img src={item.flag.svgFile} width="20px" />
      </div>
      <div className="content">
        <b>Capital: </b> <span>{item.capital}</span>
        <br />
        <b>Population: </b>
        <span> {item.population}</span>
        <br />
        <b>Área: </b> <span>{item.area}</span>
        <br />
        <b>Top Level Domain: </b>
        <span>{item.topLevelDomains.map((obj: any) => obj.name)}</span>
        <br />
      </div>
      <div className="actions">
        {actions.map((item, index) => {
          return <ButtonAction {...item} id={id} key={id} index={index} />
        })}
      </div>
    </StyledCard>
  )
}

export default Card
