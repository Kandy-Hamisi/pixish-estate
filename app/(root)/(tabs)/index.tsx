import {
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { logout } from "@/lib/appwrite";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import Search from "@/components/Search";
import { Card, FeatureCard } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
  const router = useRouter();
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />
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
            <Search />
            {/*  featured */}
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              {/*<View className="flex flex-row gap-5 mt-5">*/}
              {/*  <FeatureCard />*/}
              {/*  <FeatureCard />*/}
              {/*  <FeatureCard />*/}
              {/*</View>*/}
            </View>

            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommendations
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />

            {/*<View className="flex flex-row gap-5 mt-5">*/}
            {/*  <Card />*/}
            {/*  <Card />*/}
            {/*</View>*/}
          </View>
        }
      />
    </SafeAreaView>
  );
}
