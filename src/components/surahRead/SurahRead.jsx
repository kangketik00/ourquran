import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Toolbar } from "@material-ui/core";
import "./SurahRead.scss";
import AyahCard from "../ayahCard/AyahCard";
import SurahReadTitle from "../surahReadTitle/SurahReadTitle";
import AyahCardSkeleton from "../ayahCardSkeleton/AyahCardSkeleton";
import ErrorHandle from "../error/ErrorHandle";
const mapStateToProps = (state) => {
  return {
    items: state.surah.items,
    error: state.surah.error,
    loading: state.surah.loading,
  };
};

class SurahRead extends Component {
  render() {
    const { items, error, loading } = this.props;
    if (error) return <ErrorHandle />;

    return (
      <section id="surah-read" className="top-page">
        <Container>
          <Toolbar />
          <SurahReadTitle />
          {loading ? (
            <>
              <AyahCardSkeleton />
              <AyahCardSkeleton />
              <AyahCardSkeleton />
              <AyahCardSkeleton />
              <AyahCardSkeleton />
            </>
          ) : (
            items[0].ayahs.map((ayah) => {
              return (
                <AyahCard
                  key={ayah.number}
                  surahNumber={items[0].number}
                  {...ayah}
                  textTranslation={items[1].ayahs}
                  textTransliteration={items[2].ayahs}
                />
              );
            })
          )}
        </Container>
      </section>
    );
  }
}

export default connect(mapStateToProps)(SurahRead);
