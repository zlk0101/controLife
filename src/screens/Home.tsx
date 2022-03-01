import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Custom from "../components/goals/Custom";
import Daily from "../components/goals/Daily";
import Monthly from "../components/goals/Montly";
import Weekly from "../components/goals/Weekly";
import Yearly from "../components/goals/Yearly";
import { RouteGoalsT } from "../types/goal";

const Home = ({ navigation }: { navigation: any }) => {
  const [routeGoals, setRouteGoals] = useState<RouteGoalsT>("daily");

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={{
            ...styles.navItemButton,
            borderWidth: routeGoals === "daily" ? 1.5 : 0,
          }}
          onPress={() => setRouteGoals("daily")}
        >
          <Text style={styles.navItem}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.navItemButton,
            borderWidth: routeGoals === "weekly" ? 1.5 : 0,
          }}
          onPress={() => setRouteGoals("weekly")}
        >
          <Text style={styles.navItem}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.navItemButton,
            borderWidth: routeGoals === "monthly" ? 1.5 : 0,
          }}
          onPress={() => setRouteGoals("monthly")}
        >
          <Text style={styles.navItem}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.navItemButton,
            borderWidth: routeGoals === "yearly" ? 1.5 : 0,
          }}
          onPress={() => setRouteGoals("yearly")}
        >
          <Text style={styles.navItem}>Year</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.navItemButton,
            marginRight: 0,
            borderWidth: routeGoals === "custom" ? 1.5 : 0,
          }}
          onPress={() => setRouteGoals("custom")}
        >
          <Text style={styles.navItem}>custom</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {routeGoals === "daily" ? (
          <Daily navigation={navigation} />
        ) : routeGoals === "weekly" ? (
          <Weekly navigation={navigation} />
        ) : routeGoals === "monthly" ? (
          <Monthly navigation={navigation} />
        ) : routeGoals === "yearly" ? (
          <Yearly navigation={navigation} />
        ) : routeGoals === "custom" ? (
          <Custom navigation={navigation} />
        ) : (
          <Daily navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  nav: {
    position: "relative",
    flexDirection: "row",
    borderBottomWidth: 1,
    width: "100%",
    borderBottomColor: "#444",
    backgroundColor: "#555",
  },
  navItemButton: {
    flex: 1,
    backgroundColor: "#000",
    marginRight: 0.4,
    borderBottomColor: "#fff",
    borderWidth: 0,
  },
  navItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    width: 80,
  },
});
