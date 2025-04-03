import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 font-bold">Nothing to show here</Text>
      <Link href="/sign-in" className="my-5">
        Sign In
      </Link>
    </View>
  );
}
