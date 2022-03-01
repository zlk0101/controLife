import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";

const TodoItem = ({
  todo,
  checkChange,
  handleTodoEdit,
}: {
  todo: any;
  checkChange: any;
  handleTodoEdit: any;
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#111222",
      marginVertical: 5,
      borderRadius: 5,
      width: "100%",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={handleTodoEdit}>
        <Text style={{ color: "#fff", marginVertical: 10, paddingLeft: 5 }}>
          {todo.todo}
        </Text>
      </TouchableOpacity>
      <CheckBox
        onValueChange={checkChange}
        style={{ marginRight: 10, width: 25, height: 25 }}
        value={todo.completed}
        color={todo.completed ? "#7aa" : "#f44"}
      />
    </View>
  );
};

export default TodoItem;
