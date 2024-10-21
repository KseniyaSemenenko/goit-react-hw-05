import css from './SearchForm.module.css'
export default function SearchForm({ handleSubmit }) {
  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="search"
          placeholder="What are we looking for?"
          autoFocus
        />
        <button className={css.searchBtn} type="submit">Search</button>
      </form>
    </div>
  );
}
