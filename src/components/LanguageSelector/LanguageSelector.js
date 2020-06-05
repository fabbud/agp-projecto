import React from 'react';
import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-selector" onChange={changeLanguage}>
      <input type="radio" value="pt" name="language" defaultChecked />
      {' '}
      PT
      <input type="radio" value="en" name="language" className="radio-lang" />
      {' '}
      EN
    </div>
  );
};

export default LanguageSelector;
