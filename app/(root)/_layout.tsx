import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";

const Layout = () => {
  const { loading, isLoggedIn } = useGlobalContext();
  console.log(isLoggedIn);

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
};
export default Layout;
