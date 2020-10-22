const apiKey = `18623369-889f6d1cb3a21a0bcc2be87ce`;
const baseUrl = `https://pixabay.com/api/`

export default {
    _query: "",
    page: 1,
    perPage: 6,

    async fetchImage() {
        let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this._query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;
        try {
            const res = await fetch(url);
            const getResponse = await res.json();
            return getResponse
        } catch (error) {
            throw error
        };
    },
    setPage() {
        return this.page++;
    },
    resetPage() {
        return this.page = 1;
    },
    get query() {
        return this._query;
    },
    set query(newQuery) {
        return this._query = newQuery;
    },
}


function displayError(error) {
    const errorH2 = document.createElement("h2");
    errorH2.textContent = error;
    refs.body.prepend(errorH2)
}