import React from "react";
import { Redirect } from "expo-router";

const Index = () => {
  if (!true) return <Redirect href={"/(tabs)"} />;
  else return <Redirect href={"/signin"} />;
};

export default Index;
