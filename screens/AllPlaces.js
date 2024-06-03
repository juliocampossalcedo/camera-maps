import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";

function AllPlaces({route}) {
  const [loadedPLaces, setLoadedPLaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPLaces(curPlaces => [...curPlaces, route.params.place]);
    }

  }, [isFocused, route])

  return <PlacesList places={loadedPLaces}/>
}

export default AllPlaces;