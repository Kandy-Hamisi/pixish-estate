import { Pressable, Text, View, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { logout } from "@/lib/appwrite";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {
  const router = useRouter();
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik font-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                {user?.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
