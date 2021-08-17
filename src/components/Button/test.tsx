import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import { CalendarEdit } from '@styled-icons/boxicons-regular'

import { Button } from '.'

describe('<Button />', () => {
  it('should render by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with width and height', () => {
    render(
      <Button width="40px" height="30px">
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '40px',
      height: '30px'
    })
  })

  it('should render an icon version', () => {
    render(<Button icon={<CalendarEdit data-testid="icon" />}>Buy now</Button>)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with background color', () => {
    render(<Button backgroundColor={'#e64a0d'}>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background-color',
      '#e64a0d'
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled={true}>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
