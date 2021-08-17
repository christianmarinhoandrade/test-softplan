import 'match-media-mock'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'utils/test-utils'

import Layout from '.'

describe('<NotFound />', () => {
  it('should render layout', async () => {
    const { container } = render(
      <BrowserRouter>
        <Layout>
          <div />
        </Layout>
      </BrowserRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
