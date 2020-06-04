import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { CheckBox, ButtonGroup } from 'react-native-elements';
import Config from './../common/config';

export default function FindRide() {

  const [count, setCount] = useState(0);
  const [selectedIndexRoute, setSelectedIndexRoute] = useState(0);
  const [selectedIndexVehiclePref, setSelectedIndexVehiclePref] = useState(0);
  const [daysSelection, setDaysSelection] = useState({
    today: true,
    tomorrow: false,
  });

  const routeButtonsGroup = Config.ROUTE_INFO;
  const vehiclePreferenceButtonsGroup = Config.PREFERRED_VEHICLE;

  return (
    <View style={findRideStyles.findRideMainView}>

      <View style={findRideStyles.findRideRouteSelectionContainer}>
        <Text
          style={findRideStyles.findRideRouteSelectionContainerText}
        >{"Find rides from:"}</Text>

        <ButtonGroup
          onPress={(selectedindex) => {
            setSelectedIndexRoute(selectedindex);
          }}
          selectedIndex={selectedIndexRoute}
          buttons={routeButtonsGroup}
        />
      </View>

      <View style={findRideStyles.findRidesSelectedDays}>
        <Text
          style={findRideStyles.findRidesSelectedDaysText}
        >{"Riding:"}</Text>

        <CheckBox
          title="Today"
          checked={daysSelection.today}
          containerStyle={{ backgroundColor: "#F2F2F2" }}
          textStyle={{ fontWeight: "normal" }}
          onPress={() => {
            setDaysSelection(
              {
                ...daysSelection,
                today: !daysSelection.today,
              }
            );
          }} />

        <CheckBox
          title="Tomorrow"
          checked={daysSelection.tomorrow}
          containerStyle={{ backgroundColor: "#F2F2F2" }}
          textStyle={{ fontWeight: "normal" }}
          onPress={() => {
            setDaysSelection(
              {
                ...daysSelection,
                tomorrow: !daysSelection.tomorrow,
              }
            );
          }} />

      </View>

      <View style={findRideStyles.vehiclePreferenceConatiner}>
        <Text
          style={findRideStyles.findRideRouteSelectionContainerText}
        >{"Vehicle preference:"}</Text>

        <ButtonGroup
          onPress={(selectedindex) => {
            setSelectedIndexVehiclePref(selectedindex);
          }}
          selectedIndex={selectedIndexVehiclePref}
          buttons={vehiclePreferenceButtonsGroup}
        />
      </View>

      <Divider style={{ marginLeft: 50, marginRight: 50, }} />

      <View style={findRideStyles.findRideFindButton}>
        <Button
          onPress={() => setCount(count + 1)}
          title={"Find Rides"} />
        {/* <Button
          onPress={() => setCount(count + 1)}
          title={"Post New Request"} /> */}
      </View>

    </View >
  );
}

const findRideStyles = StyleSheet.create({
  vehiclePreferenceConatiner: {
    marginBottom: 40,
  },
  findRideMainView: {
    flexDirection: "column",
  },
  findRideFindButton: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  findRideRouteSelectionContainer: {
    marginTop: 20,
  },
  findRideRouteSelectionContainerText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  homeDestinationText: {
    marginTop: 2,
  },
  findRidesSelectedDays: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  findRidesSelectedDaysText: {
    fontWeight: "bold",
    left: -10,
    paddingBottom: 5,
  }
});
