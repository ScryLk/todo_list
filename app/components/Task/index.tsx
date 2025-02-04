import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Task() {
  return (
    <View className="w-11/12 rounded-lg flex flex-row items-center justify-between h-14 bg-taskColor px-5">
      <Text className="text-white text-lg font-semibold">Tarefa</Text>
      <TouchableOpacity>
        <View className="w-8 h-8 items-center justify-center rounded-lg bg-purple-600">
          <FontAwesomeIcon icon={faClose} color="#ffff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
