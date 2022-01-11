import CarForm from "../components/CarForm";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <div class="container">
      <h1>Create a Car</h1>
      <CarForm />
      <hr />
      <h1>Find a Car</h1>
      <SearchForm />
    </div>
  );
}
