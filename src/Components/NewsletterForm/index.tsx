"use client";

import Script from 'next/script';

import './style.css';
import {useEffect, useState} from 'react';

const NewsletterForm = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    // Wait for component to be rendered in the browser to execute the script
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <>
      <div className="ml-embedded" data-form="uNaI57" />
      <Script async src="/mailerLiteForm.js" />
    </>
  )
}

export default NewsletterForm;
