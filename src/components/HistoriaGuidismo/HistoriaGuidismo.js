import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HistoriaGuidismo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <div className="HistoriaGuidismo>">
      <div className="HistoriaGuidismo-banner" />
      <div className="HistoriaGuidismo1">
        <p className="FilhaGuia"></p>
        <p className="FilhaGuiaText"></p>
      </div>
    </div>
  );
};

export default HistoriaGuidismo;
