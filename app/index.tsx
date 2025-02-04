import { View, Text } from "react-native";
import { Image } from "expo-image";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons/";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import Body from "./components/Body";
import Task from "./components/Task";

export default function Index() {
  return (
    <View className="flex-1 bg-backgroundBlackColor h-full w-full">
      <Title />
      <View className="mt-5">
        <AddTask />
      </View>
      <View className="mt-5">
        <Body />
      </View>
    </View>
  );
}
