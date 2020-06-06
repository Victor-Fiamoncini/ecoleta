<template>
	<div id="page-home">
		<div class="content">
			<header>
				<img
					src="@/static/images/logo.svg"
					alt="Ecoleta"
					title="Home - Ecoleta"
				/>
			</header>
			<main>
				<h1>Seu marketplace de coleta de resíduos.</h1>
				<p>
					Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
				</p>
				<nuxt-link to="/cadastro">
					<span>
						<i class="fas fa-sign-in-alt" />
					</span>
					<strong>Cadastre um ponto de coleta</strong>
				</nuxt-link>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	head: () => ({
		title: 'Home - Ecoleta',
	}),
}
</script>
