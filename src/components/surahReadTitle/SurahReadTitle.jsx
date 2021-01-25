import React from "react";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

import "./SurahReadTitle.scss";

const mapStateToProps = (state) => {
  return {
    items: state.surah.items,
    loading: state.surah.loading,
  };
};
const SurahReadTitle = (props) => {
  const { items, loading } = props;

  return (
    <div id="title">
      <div className="inner">
        <h2>
          {loading ? (
            <Skeleton variant="text" width={233.988} height={62.4} />
          ) : (
            items[0].englishName
          )}
        </h2>
        <p>
          {loading ? (
            <Skeleton variant="text" width={152.45} height={36.8} />
          ) : (
            items[0].englishNameTranslation
          )}
        </p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(SurahReadTitle);
