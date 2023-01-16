import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const posterSrc =  "https://images.unsplash.com/photo-1529781912305-50e0d2217bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80";
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  //const genres = genresArr.join(", ");

  return (
    <div className="App">
      {/* posterSrc is omitted, so the default value will be used instead */}
      <MovieCard src={posterSrc} title={title} genres={genresArr} />
    </div>
  );
}

export default App;
