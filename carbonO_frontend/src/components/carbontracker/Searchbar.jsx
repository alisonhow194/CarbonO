import React from 'react'

const Searchbar = () => {
  return (
 
        <form className="m-10 mx-50">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative ">
            <div class="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
            //  value={searchQuery}
        //  onInput={e => setSearchQuery(e.target.value)}
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border"
              placeholder="Search for foods,snacks,etc"
              required=""
            />
          </div>
        </form>

  );

}

export default Searchbar;