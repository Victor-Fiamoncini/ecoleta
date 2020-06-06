<template>
	<div id="map-wrap">
		<no-ssr>
			<l-map
				:zoom="15"
				:center="[latitude, longitude]"
				@click="doGetCoordinates"
			>
				<l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
				<l-marker :lat-lng="[latitude, longitude]" />
			</l-map>
		</no-ssr>
	</div>
</template>

<script>
export default {
	name: 'Map',
	props: {
		latitude: {
			type: Number,
			default: 0,
		},
		longitude: {
			type: Number,
			default: 0,
		},
	},
	methods: {
		doGetCoordinates({ latlng }) {
			this.$emit('doSetCoordinates', {
				latitude: latlng.lat,
				longitude: latlng.lng,
			})
		},
	},
}
</script>
