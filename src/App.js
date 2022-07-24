import "./App.css";
import { useGetListOfGamesQuery } from "./services/RapidAPI";

function App() {
  const {
    data: dataPopular,
    error: errorPopular,
    isLoading: isLoadingPopular,
  } = useGetListOfGamesQuery();

  console.log(dataPopular);

  if (dataPopular) {
    return (
      <div className="App underline text-3xl">
        {dataPopular.results.map((data) => (
          <div key={data.id}>test</div>
        ))}
        fist page
      </div>
    );
  } else if (isLoadingPopular) {
    return <div>Loading</div>;
  } else if (errorPopular) {
    return <div>Error</div>;
  }
}

export default App;
