const key = '18623547-5f493ca6e7211638496d8c77e';
const baseUrl = `https://pixabay.com/api/`;
// let query = 'cat'
// let page = 1;
// let perPage = 12;


export default {
  _query: 'car', 
  page: 1,
  perPage: 6,
  async fetchImages(){
    let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this._query}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
    console.dir(url);
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      return displayError(error);
    }

  } ,

  setPage(){
    return this.page++;
  },

  get query(){
    return this._query;
  },
  
  set query(newQuery){
    this._query = newQuery;
  }
};