export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      habit: {
        date: string
        amount?: number
        completed?: number
      }
      'new-habit': undefined
    }
  }
}
