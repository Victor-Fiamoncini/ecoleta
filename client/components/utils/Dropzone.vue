<template>
	<dropzone
		id="dropzone"
		ref="el"
		class="dropzone"
		:options="options"
		:destroy-dropzone="true"
		@vdropzone-complete="doEmitFile"
	>
		<p>Imagem do estabelecimento</p>
	</dropzone>
</template>

<script>
import dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
	name: 'Dropzone',
	components: {
		dropzone,
	},
	data: () => ({
		options: {
			url: 'http://httpbin.org/anything',
			addRemoveLinks: true,
			maxFilesize: 3,
			maxFiles: 1,
		},
	}),
	mounted() {
		const instance = this.$refs.el.dropzone
	},
	methods: {
		doEmitFile(file) {
			this.$emit('doSetFile', file)
		},
	},
}
</script>
