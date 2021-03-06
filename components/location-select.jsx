import * as React from "react";
import Input from "./input";

export default function LocationSelect({value, onChange, ...props}) {
	const { label } = value;
	const inputRef = React.useRef(null);
	const isInitalizedRef = React.useRef();

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) { 
			e.preventDefault();
		}
	}

	React.useEffect(() => {
		if (isInitalizedRef.current || !window.google) {
			return;
		}
		const handlePlaceSelect = (googlePlaces) => {
			const place = googlePlaces.getPlace();
			onChange({
				label: place.formatted_address,
				lat: parseFloat(place.geometry.location.lat().toFixed(7)),
				lng: parseFloat(place.geometry.location.lng().toFixed(7))
			});
		}

		const options = {
			componentRestrictions: { country: "us" },
			fields: ["formatted_address", "geometry"],
		};

		const googlePlaces = new window.google.maps.places.Autocomplete(inputRef.current, options);
		googlePlaces.setFields(["formatted_address", "geometry"]);
		googlePlaces.addListener("place_changed", () => {
			handlePlaceSelect(googlePlaces);
		});
		isInitalizedRef.current = true;
	});

	React.useEffect(() => {
		if (!label) {
			inputRef.current.value = "";
		}
	}, [label]);

	return (
		<Input ref={inputRef} onKeyDown={handleKeyDown} defaultValue={label} placeholder="Enter a location" {...props}/>
	)
}