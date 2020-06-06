<template>
	<div id="map-wrap">
		<no-ssr>
			<l-map :zoom="15" :center="[-26.922333, -49.37547]">
				<l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
				<l-marker :lat-lng="[-26.922333, -49.37547]" />
			</l-map>
		</no-ssr>
	</div>
</template>

<script>
export default {
	name: 'Map',
}
</script>
