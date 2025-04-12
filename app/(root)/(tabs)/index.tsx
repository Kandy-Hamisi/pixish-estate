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
import React, { useState } from "react";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import Search from "@/components/Search";
import { Card, FeatureCard } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
  const [numColumns, setNumColumns] = useState(2);
  const router = useRouter();
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={numColumns}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
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
              <FlatList
                data={[1, 2, 3, 4]}
                horizontal
                contentContainerClassName="flex gap-5 mt-5"
                keyExtractor={(item) => item.toString()}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <FeatureCard />}
              />
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
