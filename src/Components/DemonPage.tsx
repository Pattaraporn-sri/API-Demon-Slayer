import { useEffect, useState } from "react";
import { Character, DemonSlayerApiResponse } from "../Model/DemonModel";
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
import Doma from "../Image/Domaa.jpg";
import Hamtengu from "../Image/Hantengu.jpg";
import Gyokko from "../Image/Gyokko.jpg";
import Hotaru from "../Image/Hotaru-3.jpg";
import Nakime from "../Image/Nakime.jpg";
import Kokushibo from "../Image/Kokushibo.jpg";
import Yoriichi from "../Image/Yoriichi.jpg";

function DemonPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [mainPage, setMainpage] = useState<number>(1); // หน้าปัจจุบัน
  const [totalPages, setTotalPages] = useState<number>(1); // จำนวนหน้าทั้งหมด
  const [isLoading, setIsLoading] = useState<boolean>(false); // สถานะการโหลด

  const backgroundImages: { [key: number]: string } = {
    1: Tanjiro1,
    2: nezuko,
    3: Giyu,
    4: Sakonji,
    5: Sabito,
    6: Makomo,
    7: handdemon,
    8: genyu,
    9: zenitsu,
    10: inosuke,
    11: Aoi,
    12: kanao,
    13: swamp,
    14: Muzan,
    15: tamayo,
    16: yushiro,
    17: Susamaro,
    18: Yahaba,
    19: kyogai,
    20: shinobu,
    21: murata,
    22: SpiderSon,
    23: SpiderDaughter,
    24: SpiderMom,
    25: SpiderFather,
    26: Rui,
    27: Kagaya,
    28: Tengen,
    29: Mitsuri,
    30: Kyojuro,
    31: Muishiro,
    32: Gyomei,
    33: Obanai,
    34: Sanemi,
    35: Enmu,
    36: Akaza,
    37: Daki,
    38: Gyutaro,
    39: Doma,
    40: Hamtengu,
    41: Gyokko,
    42: Hotaru,
    43: Nakime,
    44: Kokushibo,
    45: Yoriichi,
  };

  const getDataAsyncByAxios = async () => {
    const url = `https://www.demonslayer-api.com/api/v1/characters?page=${mainPage}`;
    try {
      const response: AxiosResponse<DemonSlayerApiResponse> = await axios.get(
        url,
        { headers: { Accept: "application/json" } }
      );
      if (response.status === 200) {
        const { content, pagination } = response.data;

        const updatedCharacters = content.map((character) => ({
          ...character,
          backgroundImage:
            backgroundImages[character.id] || "../Image/Default.jpg",
        }));

        setCharacters(updatedCharacters); // Set content to state
        setMainpage(pagination.currentPage); // อัปเดตหน้าปัจจุบัน
        setTotalPages(pagination.totalPages); // อัปเดตจำนวนหน้าทั้งหมด
      } else {
        console.error("Unexpected Status Code:", response.status);
      }
    } catch (err) {
      console.error("Error Fetching Data:", err);
    } finally {
      setIsLoading(false);
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
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          characters.map((character) => (
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
          ))
        )}
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
