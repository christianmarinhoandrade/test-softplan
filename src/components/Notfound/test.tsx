import 'match-media-mock'
import { render } from 'utils/test-utils'

import NotFoundComponent from '.'

describe('<NotFound />', () => {
  it('should render not found', async () => {
    const { container } = render(<NotFoundComponent />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
