import image1 from "../../assets/Latest_Procucts/638741f4b7222-square.jpg";

const Latest = () => {
  return (
    <div className="">
      <div>
        <h1 className="pt-14 pb-2 text-center font-bold text-4xl">
          Latest Products
        </h1>
        <div
        style={{ flex: 1, height: "4px", backgroundColor: "rgb(153, 0,0)" }}
        className=" lg:mx-[540px] mx-12"
      ></div>
      </div>
      <div  className="grid lg:grid-cols-4 gap-5 pt-20 lg:mx-20 mx-5 py-10 ">
        <div className="border border-slate-950 ">
          <img
            src={image1}
            alt=""
            className="object-cover object-center w-full"
          />
          <div className="flex flex-col justify-between space-y-8">
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
            >
              SmileZ
            </button>
            
          </div>
          
        </div>

        <div className="border border-slate-950 ">
          <img
            src={image1}
            alt=""
            className="object-cover object-center w-full"
          />
          <div className="flex flex-col justify-between space-y-8">
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
            >
              SmileZ
            </button>
            
          </div>
          <div className=" px-5">
            <div className="flex pt-2">
                <h1 className="text-md font-semibold  ">Generic Name: </h1>
                <h2> Etoposide</h2>
            </div>
            <div className="flex pt-1"> 
                <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                <h2 className="pb-10">Oncalogy</h2>
            </div>
          </div>
        </div>

        <div className="border border-slate-950 ">
          <img
            src={image1}
            alt=""
            className="object-cover object-center w-full"
          />
          <div className="flex flex-col justify-between space-y-8">
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
            >
              SmileZ
            </button>
            
          </div>
          <div className=" px-5">
            <div className="flex pt-2">
                <h1 className="text-md font-semibold  ">Generic Name: </h1>
                <h2> Etoposide</h2>
            </div>
            <div className="flex pt-1"> 
                <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                <h2 className="pb-10">Oncalogy</h2>
            </div>
          </div>
        </div>

        <div className="border border-slate-950 ">
          <img
            src={image1}
            alt=""
            className="object-cover object-center w-full"
          />
          <div className="flex flex-col justify-between space-y-8">
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold bg-[#33524A] text-white"
            >
              SmileZ
            </button>
            
          </div>
          <div className=" px-5">
            <div className="flex pt-2">
                <h1 className="text-md font-semibold  ">Generic Name: </h1>
                <h2> Etoposide</h2>
            </div>
            <div className="flex pt-1"> 
                <h1 className="text-md font-semibold ">Theraputic Name:</h1>
                <h2 className="pb-10">Oncalogy</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Latest;
