export interface TaskI {
  _id?: string;
  goalId?: string;
  userId?: string;
  title?: string;
  description?: string;
  state?: string;
  createdAt?: DateConstructor | number;
  updatedAt?: DateConstructor | number;
}
