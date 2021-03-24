import React from 'react';
import { useEffect, useState } from 'react';

function handleLanguageLocal(lang) {
  if (
    localStorage.getItem('languages') !== 'undefined' &&
    localStorage.getItem('languages') !== 'null'
  ) {
    return localStorage.getItem('languages');
  } else {
    return lang;
  }
}

function LocalStorageLocalizationButton() {
  const [lang, setLangState] = useState(() => handleLanguageLocal('en'));

  useEffect(() => {
    localStorage.setItem('languages', lang);
  }, [lang]);

  const handleLanguage = languages => {
    if (languages === 'tr') setLangState('en');
    else setLangState('tr');
  };

  return (
    <>
      <button
        className="inline-flex items-center uppercase bg-gray-700 border-0 py-1 
        px-3 focus:outline-none hover:bg-gray-600 rounded text-white mt-4 md:mt-0 "
        onClick={() => handleLanguage(lang)}
      >
        {lang}
      </button>
    </>
  );
}

export default LocalStorageLocalizationButton;
