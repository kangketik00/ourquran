import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import "./AyahCardSkeleton.scss";
const AyahCardSkeleton = () => {
  return (
    <div className="ayah-card-skeleton">
      <div className="surah">
        <span className="number-surah">
          <Skeleton variant="circle" width="100%" height="100%" />
        </span>
        <div className="text-ayah">
          <Skeleton variant="text" width="100%" />
        </div>
      </div>
      <div className="text-translate">
        <p className="text-transliteration">
          <Skeleton variant="text" width="50%" height="100%" />
        </p>
        <p className="text-translation">
          <Skeleton variant="text" width="40%" height="100%" />
        </p>
      </div>
    </div>
  );
};

export default AyahCardSkeleton;
