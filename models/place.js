class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri ? imageUri : null;
    this.address = location ? location.address : null;
    this.location = {
      lat: location ? location.lat : null,
      lng: location ? location.lng : null,
    }; // { lat: 0.121122, long: 123.123}
    this.id = id;
  }
}

export default Place;
