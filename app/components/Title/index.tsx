import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Title() {
  return (
    <View className="w-full h-auto bg-backgroundBlackColor pb-4"> {/* Ajuste de altura */}
      <View className="w-full justify-between">
        <View className="items-center flex flex-row gap-32 justify-center w-full mt-20">
          <TouchableOpacity>
            <FontAwesomeIcon icon={faSearch} color="#FFFF" size={20} />
          </TouchableOpacity>
          <Text className="text-white font-poppins text-3xl">TODOLIST</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faFilter} color="#FFFF" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
