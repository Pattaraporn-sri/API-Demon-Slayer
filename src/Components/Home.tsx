import { useEffect, useState } from "react";
import { DemonSlayerApiResponse, Character } from "../Model/DemonModel";
import axios, { AxiosResponse } from "axios";

function Home() {
  const [data, setData] = useState<Character[]>([]); // Updated type to handle the full DisneyCharacter structure.
  const [mainPage, setMainpage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Function to fetch data using Axios
  const getDataAsyncByAxios = async () => {
    const url = `https://www.demonslayer-api.com/api/v1/characters?page=1`;
    try {
      const response: AxiosResponse<DemonSlayerApiResponse> = await axios.get(
        url
      );
      console.log("Response: ", response);  // ตรวจสอบการตอบกลับ
      if (response.status === 200) {
        console.log("API Response:", response.data);
        const { content, pagination } = response.data; // ดึงข้อมูล content และ pagination
        setData(content); // เก็บข้อมูลตัวละคร
        setMainpage(pagination.currentPage); // อัปเดตหน้าปัจจุบัน
        setTotalPages(pagination.totalPages); // อัปเดตจำนวนหน้าทั้งหมด
      } else {
        console.error("Unexpected Status Code:", response.status);
      }
    } catch (err) {
      console.error("Error Fetching Data:", err);
    }
  };

  // Call API once the component is mounted
  useEffect(() => {
    getDataAsyncByAxios();
  }, [mainPage]);

  return (
    <>
      <div>
        <h1> Demon Slayer Characters</h1>
      </div>
      <div>
        {data.map((demonslayer) => (
          <div key={demonslayer.id}>
            <img src={demonslayer.img} alt={demonslayer.name} />
            <h3>{demonslayer.name}</h3>
            <p>Age: {demonslayer.age} </p>
            <p>Gender: {demonslayer.gender}</p>
            <p>Race: {demonslayer.race}</p>
            <p>Description: {demonslayer.description}</p>
            <p>Affiliation_ID: {demonslayer.affiliation_id}</p>
            <p>ARC_ID: {demonslayer.arc_id}</p>
            <p>Quote: {demonslayer.quote}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          disabled={mainPage <= 1} //ป้องกันค่าติดลบ
          onClick={() => setMainpage((prev) => Math.max(1, prev - 1))}
        >
          Previous
        </button>
        <span>
          Page {mainPage} of {totalPages}
        </span>
        <button
          disabled={mainPage >= totalPages} //ป้องกันค่ามากเกิน
          onClick={() => setMainpage((prev) => Math.min(totalPages, prev + 1))}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Home;
