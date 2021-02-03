import React from "react";
import Grid from "@material-ui/core/Grid";
import { Skeleton } from "@material-ui/lab";

import "./FeatureAsmaulSkeleton.scss";
const AsmaulCardSkeleton = () => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <div className="asmaul-collection-item-skleton">
        <p className="text">
          <Skeleton varian="text" animation="wave" width={140} height={50} />
        </p>
        <p className="textTransliteration">
          <Skeleton varian="text" animation="wave" width={100} height={30} />
        </p>
        <p className="textTranslation">
          <Skeleton varian="text" animation="wave" width={50} height={20} />
        </p>
      </div>
    </Grid>
  );
};

export default AsmaulCardSkeleton;
