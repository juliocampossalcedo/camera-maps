import PlaceForm from "../components/Places/PlaceForm";

function AddPlaces({navigation}) {
  function createPlaceHandler(place) {
    console.log("createPlaceHandler", place)
    navigation.navigate('AllPlaces',{
      place: place
    })
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />
}

export default AddPlaces;