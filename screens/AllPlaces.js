import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { View } from "react-native";
import { fetchPlaces } from "../util/database";

function AllPlaces() {
  const [loadedPLaces, setLoadedPLaces] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadedPLaces() {
      const places = await fetchPlaces();
      setLoadedPLaces(places);
    }

    if (isFocused) {
      loadedPLaces()
      // setLoadedPLaces(curPlaces => [...curPlaces, route.params.place]);
    }

  }, [isFocused])

  return <PlacesList places={loadedPLaces}/>
}

export default AllPlaces;