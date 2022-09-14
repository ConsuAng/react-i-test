import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'


export default function NotFound() {
  return (
    <div className="flex flex-wrap justify-center items-center h-[calc(100vh-121px)]">
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3 text-left">
            <h3 className="text-sm font-medium text-yellow-800">No hay resultados para esta búsqueda</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Debes buscar por nombre, director o año de estreno de película de Studio Ghibli.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}