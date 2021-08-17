import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Input from '.'

describe('<Input />', () => {
  it('Renders with Label', () => {
    render(<Input label="Label" id="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(<Input onChange={onInputChange} label="TextField" id="TextField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
  })

  it('Does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <Input
        onChange={onInputChange}
        label="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    const { container } = render(
      <Input
        label="TextField"
        id={'textfield'}
        errors={{ textfield: { message: 'Error message' } }}
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    render(<Input label="TextField" id="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    render(<Input label="TextField" id="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
