import { View, Text } from "react-native";
import Task from "../Task";

export default function Body() {
  return (
    <View className="w-full h-4/5 items-center">
      <View className="items-center bg-tittleColor w-11/12 rounded-lg h-5/6">
        <View className="mt-5">
        <Task />
        </View>
      </View>
    </View>
  );
}
