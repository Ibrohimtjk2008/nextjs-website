"use client";

// import useLanguage from "../context/useLanguage";

export default function ChangeLangButton() {
  //   const { lang, setLang } = useLanguage();
  return (
    <div className="relative h-1/2 md:h-auto">
      <div className="text-3xl  md:text-xl absolute -rotate-90  bottom-0 right-0 -translate-y-full translate-x-1/3">
        <div>
          <button
          //   onClick={() => setLang("ru")}
          //   className={lang === "ru" ? "font-bold" : ""}
          >
            RU
          </button>{" "}
          |{" "}
          <button
          //   onClick={() => setLang("en")}
          //   className={lang === "en" ? "font-bold" : ""}
          >
            ENG
          </button>
        </div>
      </div>
    </div>
  );
}
