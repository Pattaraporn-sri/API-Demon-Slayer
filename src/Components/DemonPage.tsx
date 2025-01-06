import { useEffect, useState } from "react";
import { Character, Pagination } from "../Model/DemonModel";
import axios, { AxiosResponse } from "axios";
import "./DemonPage.css";
import BackgroundWrapper from "./BackgroundWrapper";
import StyledText from "./StyledText";
import Tanjiro1 from "../Image/Tanjiro-1.jpg";
import nezuko from "../Image/Nesugo.jpg";
import Giyu from "../Image/Giyu.jpg";
import Sakonji from "../Image/Sakonji.jpg";
import Sabito from "../Image/sabito-1.jpg";
import Makomo from "../Image/makomo.jpg";
import handdemon from "../Image/hand-demon-1.jpg";
import genyu from "../Image/genyu.jpg";
import zenitsu from "../Image/zenitsu.jpg";
import inosuke from "../Image/inosuke.jpg";
import Aoi from "../Image/Aoi.jpg";
import kanao from "../Image/Kanao-2.jpg";
import swamp from "../Image/swamp demon.jpg";
import Muzan from "../Image/Muzan-1..jpg";
import tamayo from "../Image/tamayo-3.jpg";
import yushiro from "../Image/yushiro-1.jpg";
import Susamaro from "../Image/susamaro-1.jpg";
import Yahaba from "../Image/yahaba.jpg";
import kyogai from "../Image/kyogai.jpg";
import shinobu from "../Image/shinobu.jpg";
import murata from "../Image/murata.jpg";
import SpiderSon from "../Image/spider son.jpg";
import SpiderDaughter from "../Image/SpiderDaughter-1.jpg";
import SpiderMom from "../Image/Spidermom-1.jpg";
import SpiderFather from "../Image/Spider Father.jpg";
import Rui from "../Image/Rui.jpg";
import Kagaya from "../Image/Kagaya-1.jpg";
import Tengen from "../Image/Tengen.jpg";
import Mitsuri from "../Image/Mitsuri-2.jpg";
import Kyojuro from "../Image/Kyojuro.jpg";
import Muishiro from "../Image/Muishiro-1.jpg";
import Gyomei from "../Image/Gyomei.jpg";
import Obanai from "../Image/obanai-1.jpg";
import Sanemi from "../Image/sanemi-1.jpg";
import Enmu from "../Image/Enmu.jpg";
import Akaza from "../Image/Akaza.jpg";
import Daki from "../Image/Daki.jpg";
import Gyutaro from "../Image/Gyutaro.jpg";
import Doma from "../Image/Domaa.jpg"
import Hamtengu from "../Image/Hantengu.jpg"
import Gyokko from "../Image/Gyokko.jpg"
import Hotaru from "../Image/Hotaru-3.jpg"
import Nakime from "../Image/Nakime.jpg"
import Kokushibo from "../Image/Kokushibo.jpg"
import Yoriichi from "../Image/Yoriichi.jpg"

function DemonPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [mainPage, setMainpage] = useState<number>(1); // หน้าปัจจุบัน
  const [totalPages, setTotalPages] = useState<number>(1); // จำนวนหน้าทั้งหมด

  const getDataAsyncByAxios = async () => {
    const url = `https://www.demonslayer-api.com/api/v1/characters?page=${mainPage}`;
    try {
      const response: AxiosResponse<{
        content: Character[];
        pagination: Pagination;
      }> = await axios.get(url, { headers: { Accept: "application/json" } });
      console.log("API Response:", response);
      if (response.status === 200) {
        const { content, pagination } = response.data;

        // เพิ่ม foregroundstyle ให้กับตัวละครแต่ละตัว
        const updatedCharacters = content.map((character, index) => ({
          ...character,
          backgroundImage:
            character.id === 1
              ? Tanjiro1
              : character.id === 2
              ? nezuko
              : character.id === 3
              ? Giyu
              : character.id === 4
              ? Sakonji
              : character.id === 5
              ? Sabito
              : character.id === 6
              ? Makomo
              : character.id === 7
              ? handdemon
              : character.id === 8
              ? genyu
              : character.id === 9
              ? zenitsu
              : character.id === 10
              ? inosuke
              : character.id === 11
              ? Aoi
              : character.id === 12
              ? kanao
              : character.id === 13
              ? swamp
              : character.id === 14
              ? Muzan
              : character.id === 15
              ? tamayo
              : character.id === 16
              ? yushiro
              : character.id === 17
              ? Susamaro
              : character.id === 18
              ? Yahaba
              : character.id === 19
              ? kyogai
              : character.id === 20
              ? shinobu
              : character.id === 21
              ? murata
              : character.id === 22
              ? SpiderSon
              : character.id === 23
              ? SpiderDaughter
              : character.id === 24
              ? SpiderMom
              : character.id === 25
              ? SpiderFather
              : character.id === 26
              ? Rui
              : character.id === 27
              ? Kagaya
              : character.id === 28
              ? Tengen
              : character.id === 29
              ? Mitsuri
              : character.id === 30
              ? Kyojuro
              : character.id === 31
              ? Muishiro
              : character.id === 32
              ? Gyomei
              : character.id === 33
              ? Obanai
              : character.id === 34
              ? Sanemi
              : character.id === 35
              ? Enmu
              : character.id === 36
              ? Akaza
              : character.id === 37
              ? Daki
              : character.id === 38
              ? Gyutaro
              : character.id === 39
              ? Doma
              : character.id === 40
              ? Hamtengu
              : character.id === 41
              ? Gyokko
              : character.id === 42
              ? Hotaru
              : character.id === 43
              ? Nakime
              : character.id === 44
              ? Kokushibo
              : character.id === 45
              ? Yoriichi
              : "../Image/Default.jpg", // รูปพื้นหลังเริ่มต้นถ้าไม่ match
        }));

        setCharacters(updatedCharacters); // Set content to state
        setMainpage(pagination.currentPage); // อัปเดตหน้าปัจจุบัน
        setTotalPages(pagination.totalPages); // อัปเดตจำนวนหน้าทั้งหมด
      } else {
        console.error("Unexpected Status Code:", response.status);
      }
    } catch (err) {
      console.error("Error Fetching Data:", err);
    }
  };

  useEffect(() => {
    getDataAsyncByAxios();
  }, [mainPage]);

  return (
    <BackgroundWrapper page={mainPage}>
      <div
        style={{
          minHeight: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledText text="Demon Slayer" />
      </div>

      {/*Card*/}
      <div className="font items-center justify-center font-Yatra ml-44 mt-8">
        {characters.map((character) => (
          <div className="flex mt-3">
            <div className="card-container" key={character.id}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${character.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="foreground-wrapper"
                  style={character.foregroundstyle}
                >
                  <img
                    src={character.img}
                    alt={character.name}
                    className="foreground-image"
                  />
                </div>
              </div>
            </div>

            {/*ข้อมูลตัวละคร*/}
            <div className="h-[340px] w-[850px] ml-14 mt-4 pt-1 items-center text-center shadow-xl shadow-red-900 overflow-hidden before:ease-in-out after:ease-in-out bg-slate-400 group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#dcdddd] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5  before:duration-300 before:-z-1 before:bg-[url('https://i.pinimg.com/736x/69/56/99/6956993ae0f917bca07366db06bce341.jpg')] before:bg-no-repeat before:bg-cover before:opacity-60 before:absolute before:top-0 before:left-0 before:bg-center">
              <div className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
                <h3 className="text-3xl font-bold text-[#78281f]">
                  {character.name}
                </h3>
                <p>
                  <strong className="text-lg">Age: </strong> {character.age}
                </p>
                <p>
                  <strong className="text-lg">Gender: </strong>
                  {character.gender}
                </p>
                <p>
                  <strong className="text-lg">Race: </strong> {character.race}
                </p>
                <p>
                  <strong className="text-lg ml-4">Description: </strong>
                  {character.description || "ไม่มีข้อมูล"}
                </p>
                <p>
                  <strong className="text-lg">Quote: </strong>
                  {character.quote || "ไม่มีข้อมูล"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="mt-10 pb-5 flex justify-center font font-NewRocker">
          <button
            disabled={mainPage === 1}
            onClick={() => setMainpage((prev) => prev - 1)}
            className="h-8 w-24 rounded-md text-xl text-red-800 bg-zinc-500 hover:bg-slate-400 shadow-md shadow-red-900"
          >
            Previous
          </button>
          <span className="w-28 pt-1 pl-4 text-white">
            Page {mainPage} of {totalPages}
          </span>
          <button
            disabled={mainPage === totalPages}
            onClick={() => setMainpage((prev) => prev + 1)}
            className="h-8 w-24 rounded-md text-xl text-red-800 bg-zinc-500 hover:bg-slate-400 shadow-md shadow-red-900"
          >
            Next
          </button>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

export default DemonPage;
