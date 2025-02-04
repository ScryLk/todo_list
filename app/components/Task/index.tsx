import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Task() {
  return (
    <View className="w-96 rounded-lg flex flex-row align-middle items-center justify-between h-14 bg-red-700">
      <View className="flex-row items-center">
        <Text>Tarefa</Text>
        <FontAwesomeIcon icon={faPlus} color="#ffff" />
      </View>
    </View>
  );
}
