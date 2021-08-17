import 'match-media-mock'
import { render } from 'utils/test-utils'
import { screen, fireEvent, waitFor } from '@testing-library/react'

import Card from '.'
import { CalendarEdit } from '@styled-icons/boxicons-regular'

describe('<Card /> ', () => {
  it('should render card', async () => {
    const onClick = jest.fn()
    render(
      <Card
        key={1}
        item={{
          _id: '50',
          name: 'Brazil',
          capital: 'Brasília',
          area: 111,
          population: 112,
          topLevelDomains: [
            {
              name: '.br'
            }
          ],
          flag: {
            svgFile: 'https://restcountries.eu/data/bra.svg'
          }
        }}
        actions={[
          {
            tooltip: 'Edição',
            backgroundColor: '#e64a0d',
            onClick: onClick,
            icon: function Icon() {
              return <CalendarEdit />
            }
          }
        ]}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const nome = screen.getByText('Brazil')
    expect(nome).toBeInTheDocument()
    const capital = screen.getByText('Brasília')
    expect(capital).toBeInTheDocument()
    const area = screen.getByText('111')
    expect(area).toBeInTheDocument()
    const population = screen.getByText('111')
    expect(population).toBeInTheDocument()
    const topLevelDomains = screen.getByText('.br')
    expect(topLevelDomains).toBeInTheDocument()
  })

  it('should be call onclick', async () => {
    const onClick = jest.fn()
    render(
      <Card
        key={1}
        item={{
          _id: '50',
          name: 'Brazil',
          capital: 'Brasília',
          area: 111,
          population: 112,
          topLevelDomains: [
            {
              name: '.br'
            }
          ],
          flag: {
            svgFile: 'https://restcountries.eu/data/bra.svg'
          }
        }}
        actions={[
          {
            tooltip: 'Edição',
            backgroundColor: '#e64a0d',
            onClick: onClick,
            icon: function Icon() {
              return <CalendarEdit />
            }
          }
        ]}
      />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const nome = screen.getByText('Brazil')
    expect(nome).toBeInTheDocument()
    const capital = screen.getByText('Brasília')
    expect(capital).toBeInTheDocument()
    const area = screen.getByText('111')
    expect(area).toBeInTheDocument()
    const population = screen.getByText('112')
    expect(population).toBeInTheDocument()
    const topLevelDomains = screen.getByText('.br')
    expect(topLevelDomains).toBeInTheDocument()

    fireEvent.click(button)
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
