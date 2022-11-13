export type UpdateTodoType = {
  _id?: string
  name: string
  description: string
  done: boolean
  __v: number
};

export type DeleteTodoType = {
  acknowledged: boolean
  deletedCount: number
};
