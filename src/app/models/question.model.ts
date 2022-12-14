export interface Question {
  title: string
  isAnswered: boolean
  type: string
  fields: QuestionField[],
  openAnswer?: string
  createdDate: Date
  answeredDate?: Date
  userId: number
}

export interface QuestionField {
  checked?: boolean
  text: string
}
