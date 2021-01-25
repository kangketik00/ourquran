import React from "react";
import Grid from "@material-ui/core/Grid";
import { Skeleton } from "@material-ui/lab";

import "./SurahCardSkeleton.scss";
const SurahCardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="surah-collection-item-skleton">
        <dv className="surah-detail">
          <h3>
            <Skeleton varian="text" animation="wave" width={149} height={30} />
          </h3>
          <p>
            <Skeleton varian="text" animation="wave" width={123} height={20} />
          </p>
        </dv>
        <div className="surah-name">
          <Skeleton varian="text" animation="wave" width={86} height={69} />
        </div>
      </div>
    </Grid>
  );
};

export default SurahCardSkeleton;
