export interface ITask {
  id: string,
  text?: string,
  done?: boolean,
  priority?: 'LOW' | 'MEDIUM' | 'HIGH',
}
