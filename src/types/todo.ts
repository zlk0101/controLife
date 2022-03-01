export type TypeDays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
export interface DayI {
  name?: TypeDays;
  repeat?: boolean;
  order?: "0" | "1" | "2" | "3" | "4" | "5" | "6";
}

export interface TodoProps {
  pressOut: any;
  daysRepeat?: DayI[];
  onPressDayRepeat: any;
  isDayRepeat: boolean;
  isDaysNoRepeat: boolean;
  onPressDayRepeatEveryDay: any;
  onPressDayNoRepeat: any;
  saveTodo: () => void;
  changeTodo: any;
  valueTodo: string;
}
export interface TodoI {
  userId?: string;
  taskId?: string;
  todo?: string;
  repeat?: ["0" | "1" | "2" | "3" | "4" | "5" | "6"] | null;
  completed?: boolean;
  createdAt?: Date | number;
  updatedAt?: Date | number;
}
