import React from "react";
import Grid from "@material-ui/core/Grid";
import "./SurahCard.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SurahCard = (props) => {
  const { number, englishName, englishNameTranslation, name } = props;

  // Handling surah name
  const handleSurahName = (name) => {
    let surahName = name.replace("سورة", "");
    surahName = surahName.replace("سُورَةُ", "");
    return surahName;
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/alquran/${number}`} className="surah-collection-item">
        <div className="surah-detail">
          <h3 className="text-transliteration">{`${number}. ${englishName}`}</h3>
          <p className="text-translation">{englishNameTranslation}</p>
        </div>
        <div className="surah-name">
          <h3>{handleSurahName(name)}</h3>
        </div>
      </Link>
    </Grid>
  );
};

export default connect()(SurahCard);
