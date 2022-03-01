import { ItemValue } from "@react-native-picker/picker/typings/Picker";
export interface DateCreatedI {
  day: number;
  week: number;
  month: number;
  year: number;
}
export interface GoalI {
  _id?: string;
  userId?: string;
  title: string;
  description: string;
  state?: string;
  date?: DateCreatedI; //day, week, month, year
  localDateCreated?: DateConstructor | number;
  //types goal (ex: "daily", "weekly", "monthly", "yearly", "custom")
  typeGoal?: string;
  startDate?: DateConstructor | number;
  endDate?: DateConstructor | number;
  createdAt?: DateConstructor | number;
  updatedAt?: DateConstructor | number;
}
export interface GoalTypeSelectI {
  id: string;
  title: string;
}

export interface TypeGoalPickerPropsI {
  items: GoalTypeSelectI[];
  valueChange: ((itemValue: ItemValue, itemIndex: number) => void) | undefined;
  value: any;
}

export interface PropsDatePickerI {
  labelText: string;
  value: Date;
  show: boolean;
  showDatepicker: any;
  onChange: any;
  minimumDate: Date;
}

export type RouteGoalsT = "daily" | "weekly" | "monthly" | "yearly" | "custom";
