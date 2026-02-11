import React from 'react'

const Tools = () => {
  return (
    <div>
      <div className=" p-2 pl-4 flex items-center border border-default rounded-2xl">
              <Search className="text-gray-600" />

              <Input
                title="search resume"
                placeholder="search your resume"
                value={searchInput}
                onChange={handleSearch}
                className="border-none outline-none"
              />
            </div>

            <div className="hidden mt-2 md:flex gap-2">
              <button onClick={() => setGridLayout(true)} className="p-2 w-fit border border-default rounded-lg">
                <Grid3X3 className=""  />
              </button>
              <button onClick={() => setGridLayout(false)} className="p-2 w-fit border border-default rounded-lg">
                <List />
              </button>
            </div>
    </div>
  )
}

export default Tools
