import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    schema
}) {
    const siteTitle = 'VIHAAN ENGINEERS';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = 'https://vihaan-engineers.in'; // Replace with actual domain
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const defaultImage = `${siteUrl}/logo.png`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage || defaultImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
