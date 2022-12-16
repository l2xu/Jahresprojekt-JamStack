<script>
// 1
	import { onMount } from 'svelte';
	import axios from 'axios';
	import * as qs from 'qs';

  	// 2
	let stateLoading = true;
	let stateArticles = null;
	let stateMeta = null;
	let stateCurrentPageNumber = 1;
	let stateCurrentPageSize = 20;

  	// 3
	async function getArticles(pageNumber, pageSize) {
		const query = qs.stringify(
			{
				pagination: {
					page: pageNumber,
					pageSize: pageSize
				}
			},
			{
				encodeValuesOnly: true
			}
		);
		const res = await axios.get(`http://localhost:1337/api/articles?${query}`);
		return {
			articles: res.data.data,
			meta: res.data.meta
		};
	}

  	// 4
	async function updateArticlesByPage(pageNumber) {
    		stateLoading = true;
    		stateCurrentPageNumber = pageNumber;
		const { articles, meta } = await getArticles(stateCurrentPageNumber, stateCurrentPageSize);
		stateArticles = articles;
		stateMeta = meta;
		stateLoading = false;
	}

  	// 5
	onMount(async () => {
		await updateArticlesByPage(stateCurrentPageNumber);
	});
</script>

<!-- 6 -->
<section>
	<div class="container">
		{#if stateLoading}
			<p>Loading...</p>
		{:else}
			<div>
				<h1>Strapi Articles ({stateMeta.pagination.total})</h1>

				<div class="mb-4">
					<!-- 7 -->
					{#each stateArticles as article}
						<div class="mb-4">
							<h2 class="h4">{article.id} - {article.attributes.title}</h2>
							<p class="mb-1">{article.attributes.description}</p>
						</div>
					{/each}
				</div>
				<div class="controls">
                	<div>
                		<label for="inputPageSize">Page Size</label>
                		<!-- 1 -->
                		<input
                			name="inputPageSize"
                			type="number"
                			bind:value={stateCurrentPageSize}
                			min="1"
                			max={stateMeta.pagination.total}
                		/>
                		<!-- 2 -->
                		<button
                			on:click|preventDefault={() => updateArticlesByPage(stateCurrentPageNumber)}
                			disabled={stateMeta.pagination.total <= stateCurrentPageSize}>Apply</button
                		>
                	</div>
                </div>

                <!-- ... -->

                <div class="controls">
                	<!-- 3 -->
                	<button
                		on:click|preventDefault={() => updateArticlesByPage(--stateCurrentPageNumber)}
                		disabled={stateMeta.pagination.page === 1}>Previous</button
                	>
                	<!-- 4 -->
                	<div class="pagination">
                		{#each { length: stateMeta.pagination.pageCount } as _, p}
                			<button
                				on:click|preventDefault={() => updateArticlesByPage(p + 1)}
                				disabled={stateMeta.pagination.page === p + 1}>{p + 1}</button
                			>
                		{/each}
                	</div>
                	<!-- 5 -->
                	<button
                		on:click|preventDefault={() => updateArticlesByPage(++stateCurrentPageNumber)}
                		disabled={stateMeta.pagination.page === stateMeta.pagination.pageCount}>Next</button
                	>
                </div>
			</div>
		{/if}
	</div>
</section>