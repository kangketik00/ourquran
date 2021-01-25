import React from "react";
import "./AyahCard.scss";

const AyahCard = (props) => {
  const {
    surahNumber,
    number,
    text,
    numberInSurah,
    textTranslation,
    textTransliteration,
  } = props;

  const handleTranslation = () =>
    textTranslation.map((translation) =>
      number === translation.number ? translation.text : ""
    );

  const handleTransliterarion = () =>
    textTransliteration.map((Transliteration) =>
      number === Transliteration.number ? Transliteration.text : ""
    );

  const handleText = () => {
    let textHandle = text;

    if (surahNumber > 1 && numberInSurah === 1)
      textHandle = text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "");

    return textHandle;
  };

  return (
    <div className="ayah-card">
      <div className="surah">
        <span className="number-surah">{`${surahNumber}:${numberInSurah}`}</span>
        <div className="text-ayah">{handleText()}</div>
      </div>
      <div className="text-translate">
        <p className="text-transliteration">{handleTransliterarion()}</p>
        <p className="text-translation">{handleTranslation()}</p>
      </div>
    </div>
  );
};

export default AyahCard;
