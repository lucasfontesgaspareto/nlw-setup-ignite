export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      habit: {
        date: string
        amount?: number
        defaultCompleted?: number
      }
      'new-habit': undefined
    }
  }
}
