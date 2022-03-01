import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const TaskEdit = ({
  task,
  cancelAction,
  handleChangeName,
  handleChangeDescription,
  saveAction,
}: {
  task: any;
  cancelAction: any;
  handleChangeName: any;
  handleChangeDescription: any;
  saveAction: any;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...styles.input, color: "#f77" }}
        placeholder="name..."
        onChangeText={handleChangeName}
        placeholderTextColor="#999"
        value={task.name}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        placeholder="description..."
        value={task.description}
        onChangeText={handleChangeDescription}
        multiline
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={cancelAction}>
          <Text style={styles.button}>cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={saveAction}>
          <Text style={styles.button}>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "auto",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: "#242424",
    alignItems: "center",
  },
  input: {
    color: "#ddd",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#8ff4",
    marginVertical: 5,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 10,
    color: "#fff",
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default TaskEdit;
