export default function Card({ film }) {

  return (
    <>
      <div key={film.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg w-[300px] hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={film.movie_banner} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium ">
              <a className="hover:text-gray-900 text-gray-900">
                {film.original_title}
              </a>
            </p>
            <a className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">{film.title}</p>
              <p className="mt-3 text-base text-gray-500">{film.director}</p>
            </a>
          </div>
          <div className="pt-2 text-sm text-gray-500 text-center">
            {film.release_date}
          </div>
        </div>
      </div>
    </>
  )
}