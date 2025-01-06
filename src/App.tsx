import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { DisneyCharacter } from "./Model/ApiModel";
import Home from "./Components/Home";
import DemonPage from "./Components/DemonPage";

function App() {
  const [data, setData] = useState<DisneyCharacter[]>([]);

  //--------------Axiso
  const getDataAsyncByAxios = async () => {
    const url = "https://api.disneyapi.dev/character";
    try {
      const response: AxiosResponse<DisneyCharacter[]> = await axios.get(url);
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  };

  useEffect(() => {
    getDataAsyncByAxios();
  }, []);

  return (
    <>
      <DemonPage />
    </>
  );
}

export default App;
