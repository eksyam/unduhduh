<template>
	<div class="form-group">
		<label for="youtube">URL Youtube</label>
		<input type="email" class="form-control" id="youtube" aria-describedby="youtubeHelp" placeholder="Enter URL Youtube" v-model="urlYoutube" @keyup="onKeyup">
		<small id="youtubeHelp" class="form-text text-muted">https://www.youtube.com/watch?v=8cTJmUzE1jY</small>
		<div class="row mt-3">
			<div class="col-md-12">
				<!-- <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" /> -->
				<!-- </div> -->
				<!-- <div class="col-md-9"> -->
					<div class="media">
						<img class="mr-3" alt="Bootstrap Image Preview" src="http://i.ytimg.com/vi/RHtt1PLVlJY/default.jpg" width="175px" />
						<div class="media-body">
							<h5 class="mt-0 mb-0"> Skuter - Bising Mendesing</h5>
							<small>00:05:17</small>
							<div class="mt-2">
								<!-- <div class="btn-group">
									<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Unduh Sekarang</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Separated link</a>
									</div>
								</div> -->

								<div class="dropdown">
									<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Unduh Sekarang</button>
									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a class="dropdown-item" href="#">webm</a>
										<a class="dropdown-item" href="#">mp4</a>
										<a class="dropdown-item" href="#">mp3</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</template>

	<script>
		export default {
			data() {
				return {
					urlYoutube: '',
				};
			},
			watch: {
				$route: 'handleRouteChanged',
			},
			methods: {
				onKeyup() {
					if (this.timer) {
						clearTimeout(this.timer);
						this.timer = null;
					}

					this.timer = setTimeout(() => {
						if (this.urlYoutube) {
							this.$router.push({ name: 'youtube', query: { v: this.urlYoutube } });
						}else{
							this.$router.push({ name: 'youtube' });
						}
					}, 300);
				},
				handleRouteChanged() {
					this.urlYoutube = this.$route.query.v
				},
				handleSearch(search) {
					this.$router.push({ name: 'youtube', query: { page: 1, search } });
				},
			},
			mounted() {
				this.handleRouteChanged();
			},
		}
	</script>