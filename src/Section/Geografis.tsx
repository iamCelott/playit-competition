  import React from "react";
import letakGeografis from "../assets/geografis.png"
import { PinContainer } from "../components/3DPin";

const Geografis: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  min-h-screen mx-2 relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none"></div>

      <div className="mb-0 md:absolute lg:top-24 lg:right-[5%] md:top-24 md:left-[25%] w-full md:w-auto text-center md:text-center lg:text-right md:mb-0">
        <p className="text-green-600 text-lg">Peta Desa Genggelang</p>
        <h1 className="text-white text-[2rem] md:text-[2.5rem] font-bold">
          Letak Geografis
        </h1>
      </div>

      <div className="relative z-0 w-full lg:w-full max-w-4xl md:mb-0 md:absolute lg:absolute md:left-[10%] md:top-[20%] lg:left-[3%] xl:left-0 lg:top-[25%]">
      <h1 className="py-2 lg:text-left lg:left-[12%] lg:top-14 text-center relative mb-0 md:top-[66%] text-white/70 transition-all duration-300 hover:text-white italic text-[10px] md:text-sm">
        Kabupaten Lombok Utara, Nusa Tenggara Barat
      </h1>
        <img
          src={letakGeografis}
          alt="Peta Desa Genggelang"
          className="block md:hidden w-full object-cover rounded-lg"
        />

        <PinContainer
          title="Desa Bentek"
          to="#"
          containerClassName="hidden md:block w-full h-full absolute top-56 "
        >
          <p></p>
        </PinContainer>
      </div>

     


      <div className="bg-[#141414] mt-2 backdrop-blur-md py-2 px-1 text-white/80 rounded-xl shadow-lg md:border border-white/30 w-full md:w-auto md:max-w-md md:mb-0 md:absolute md:left-[63%] md:top-[27%]">
        <p className="text-xs md:text-base px-2 mb-4">
          Sebelah Utara: Desa Genggelang berbatasan langsung dengan Laut Jawa,
          memberikan akses ke kawasan pantai. <br /><br />

          Sebelah Timur: Berbatasan dengan
          Desa Gondang, yang juga terletak di Kabupaten Lombok Utara.  <br /><br />

          Sebelah Selatan: Desa ini berbatasan dengan Desa Rempek, salah satu desa
          tetangga di bagian selatan.  <br /><br />

          Sebelah Barat: Berbatasan dengan Desa
          Bentek, desa yang terletak di sisi barat Desa Genggelang.
        </p>
        <p className="text-xs px-2 md:text-base">
        Lokasi Desa Genggelang berada di wilayah Kabupaten Lombok Utara, dan memiliki akses ke Laut Jawa serta dikelilingi oleh hutan tropis di bagian barat daya.
        </p>
      </div>
    </section>
  );
};

export default Geografis;
