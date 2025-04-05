import { Pressable, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { logout } from "@/lib/appwrite";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 font-bold">Nothing to show here</Text>
      {/*<Link href="/sign-in" className="my-5">*/}
      {/*  Sign In*/}
      {/*</Link>*/}
      <Pressable className="my-4" onPress={() => router.push("/sign-in")}>
        <Text>Sign In</Text>
      </Pressable>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
