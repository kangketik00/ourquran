import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import SurahCard from "../surahCard/SurahCard";
import SurahCardSkeleton from "../surahCardSkeleton/SurahCardSkeleton";
import SearchBox from "../searchBox/SearchBox";
import ErrorHandle from "../error/ErrorHandle";

import "./FeaturedAlQuran.scss";
const mapStateToProps = (state) => {
  return {
    items: state.surahs.items,
    error: state.surahs.error,
    loading: state.surahs.loading,
    searchField: state.searchSurah.searchField,
  };
};

const FeatureAlQuran = (props) => {
  const { items, error, loading, searchField } = props;
  if (error) return <ErrorHandle />;

  // Filtering surah with search field
  const filteredSurah = items.filter((surah) =>
    surah.englishName.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <section>
      <div className="search-container">
        <SearchBox />
      </div>
      <Grid container spacing={3}>
        {loading ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => (
              <SurahCardSkeleton key={value} />
            ))}
          </>
        ) : (
          filteredSurah.map((props) => (
            <SurahCard key={props.number} {...props} />
          ))
        )}
      </Grid>
    </section>
  );
};

export default connect(mapStateToProps)(FeatureAlQuran);
