import axios from "axios"
import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Card from "../card/Card";
import NotFound from "../not-found/NotFound";

export default function MiApi() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  let sortData = [];

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const url = "https://ghibliapi.herokuapp.com/films"
    try {
      const res = await axios.get(url);
      const { data } = await res;
      sortData = data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } catch (error) {
      console.log(error)
    }

    setFilms(sortData);
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const listFilms = !search
    ? films
    : films.filter((x) => x.title.toLowerCase().includes(search.toLocaleLowerCase()) || 
      x.director.toLowerCase().includes(search.toLocaleLowerCase()) || 
      x.release_date.includes(search));

  return (
    <>
      <div className="w-full bg-[#cde7f4] h-24 fixed top-0 
      flex flex-col items-center md:flex-row md:justify-between
      ">
        <img className="h-[54px] md:h-[96px]" 
        src={logo}
        />
        <div className="flex flex-col justify-center items-center pr-8">
          <div className="relative ml-7">
            <input
              className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Título, director o año"
              value={search}
              onChange={(e) => searchHandler(e)}
            />
          </div>
        </div>
      </div>
      {listFilms.length != 0 ?
        <div className="flex flex-wrap justify-center gap-6 pt-6 pb-6 w-full mt-[97px]">
        {listFilms.map((film) => (
          <Card
            key={film.id}
            film={film}
          />
          ))}
        </div>
        :
        <NotFound />
      }
    </>
  )
}