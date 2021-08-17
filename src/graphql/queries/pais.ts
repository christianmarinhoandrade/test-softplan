import { gql } from '@apollo/client'

export const QUERY_PAIS = gql`
  query Country($name: String, $id: String) {
    Country(name: $name, _id: $id, orderBy: name_asc) {
      _id
      name
      capital
      area
      population
      topLevelDomains {
        name
      }
      flag {
        svgFile
      }
    }
  }
`
