export interface Question {
  title: string
  isAnswered: boolean
  type: string
  fields: QuestionField[]
  userId: number
}

export interface QuestionField {
  checked: boolean
  text: string
}
