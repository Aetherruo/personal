import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description = "", image = "" }) {
  return (
    <Helmet>
      <title>{title} | Nama Website</title>
      {description && <meta name="description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}