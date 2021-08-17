export interface QueryPais_pais {
  __typename: 'Country'
  _id: string
  name: string
  capital: string
  area: number
  population: number
  topLevelDomains: {
    name: string
  }[]
  flag: {
    svgFile: string
  }
}

export interface QueryPais {
  Country: QueryPais_pais[]
}

export interface QueryPaisVariables {
  name?: string
  id?: string
}
