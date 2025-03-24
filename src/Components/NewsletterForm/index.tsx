import Script from 'next/script';

import './style.css';

const NewsletterForm = () => {
  return (
    <>
      <div className="ml-embedded" data-form="uNaI57" />
      <Script async src="/mailerLiteForm.js" />
    </>
  )
}

export default NewsletterForm;
