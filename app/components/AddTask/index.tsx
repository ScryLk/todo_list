import { View, TouchableOpacity, Text } from "react-native";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput } from "react-native";

export default function AddTask() {
  return (
    <View className="w-full h-20 flex flex-row items-center justify-center gap-10 bg-backgroundBlackColor px-6 space-x-4">
      <View className="flex-1 h-16 bg-white rounded-lg shadow-md">
        <View className=" justify-center align-middle ml-5 flex-1">
          <TextInput placeholder="Digite Aqui"/>
        </View>
      </View>
      <TouchableOpacity>
        <View className="h-16 w-16 items-center justify-center rounded-lg bg-purple-500">
          <FontAwesomeIcon icon={faPlus} color="#FFFF" size={24} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
