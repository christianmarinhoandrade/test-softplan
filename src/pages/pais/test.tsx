import 'match-media-mock'
import { render } from 'utils/test-utils'
import { screen, waitFor, fireEvent } from '@testing-library/react'

import PaisForm from './components/pais.form'
import PaisList from './components/pais.list'

jest.mock('components/Card', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Card"></div>
  }
}))
describe('<PaisForm /> and <PaisFormList /> ', () => {
  it('should render pais form', async () => {
    const onSubmit = jest.fn()

    const { container } = render(<PaisForm type="E" onSubmit={onSubmit} />)
    expect(container.querySelector('#form-pais')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    const nome = screen.getByLabelText('Nome')
    expect(nome).toBeInTheDocument()
    const capital = screen.getByLabelText('Capital')
    expect(capital).toBeInTheDocument()
    const area = screen.getByLabelText('Área')
    expect(area).toBeInTheDocument()
    const population = screen.getByLabelText('População')
    expect(population).toBeInTheDocument()
    const topLevelDomains = screen.getByLabelText('Top Level Domain')
    expect(topLevelDomains).toBeInTheDocument()
  })

  it('should be able to call onsubmit', async () => {
    const onSubmit = jest.fn()

    const { container } = render(<PaisForm type="E" onSubmit={onSubmit} />)
    expect(container.querySelector('#form-pais')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    const nome = screen.getByLabelText('Nome')
    expect(nome).toBeInTheDocument()
    const capital = screen.getByLabelText('Capital')
    expect(capital).toBeInTheDocument()
    const area = screen.getByLabelText('Área')
    expect(area).toBeInTheDocument()
    const population = screen.getByLabelText('População')
    expect(population).toBeInTheDocument()
    const topLevelDomains = screen.getByLabelText('Top Level Domain')
    expect(topLevelDomains).toBeInTheDocument()

    fireEvent.change(nome, {
      target: {
        value: 'Brasil'
      }
    })

    fireEvent.change(capital, {
      target: {
        value: 'Brasília'
      }
    })

    fireEvent.change(area, {
      target: {
        value: 111
      }
    })

    fireEvent.change(population, {
      target: {
        value: 111
      }
    })

    fireEvent.change(topLevelDomains, {
      target: {
        value: '.br'
      }
    })

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it('should not be able to call onsubmit with inputs empty', async () => {
    const onSubmit = jest.fn()

    const { container } = render(<PaisForm type="E" onSubmit={onSubmit} />)
    expect(container.querySelector('#form-pais')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0)
    })
  })

  it('should render list', async () => {
    render(
      <PaisList
        data={[
          {
            _id: '50',
            name: 'Brazil',
            capital: 'Brasília',
            area: 111,
            population: 111,
            topLevelDomains: [
              {
                name: '.br'
              }
            ],
            flag: {
              svgFile: 'https://restcountries.eu/data/bra.svg'
            }
          }
        ]}
      />
    )
    expect(screen.getAllByTestId('Mock Card')).toHaveLength(1)
  })
})
