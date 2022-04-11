import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

function MultipleImageUploadComponent({ images, setImages }) {
  const handleImageChange = ({ target }) => {
    for (let img of target.files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(img);
      fileReader.onload = function () {
        setImages((prev) => [...prev, fileReader.result]);
      };
    }
  };

  const removeImage = (img) => {
    const rmImg = images?.filter((d) => d !== img);
    setImages(rmImg);
  };

  return (
    <div>
      <main className="container mx-auto max-w-screen-lg h-full border border-1 mt-4">
        <article
          aria-label="File Upload Modal"
          className="relative h-full flex flex-col bg-white  rounded-md"
          onDrop={(e) => console.log("onDrop", e)}
          onDragOver={(e) => console.log("onDragOver", e)}
          onDragLeave={(e) => console.log("onDragLeave", e)}
          onDragEnter={(e) => console.log("onDragEnter", e)}
        >
          <div
            id="overlay"
            className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
          >
            <i>
              <svg
                className="fill-current w-12 h-12 mb-3 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
              </svg>
            </i>
          </div>

          <section className="overflow-auto p-8 w-full h-full flex flex-col">
            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center"></p>
              <input
                type="file"
                accept="image/*"
                id="file"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="file"
                className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
              >
                Upload images
              </label>
            </header>

            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
              To Upload
            </h1>

            {images && images?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  border border-1">
                {images?.map((img) => (
                  <div className="w-full  text-center relative flex flex-row justify-center items-center">
                    <img className="mx-auto w-full h-32" src={img} alt={img} />
                    <span
                      onClick={() => removeImage(img)}
                      className="absolute top-0 right-0 text-purple-500 cursor-pointer"
                    >
                      <AiFillCloseSquare size={20} />
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center border border-1">
                <img
                  className="text-center w-32 mt-4"
                  src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                  alt="no data"
                />
              </div>
            )}
          </section>
        </article>
      </main>
    </div>
  );
}

export default MultipleImageUploadComponent;
