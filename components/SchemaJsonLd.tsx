type SchemaObject = Record<string, unknown>;

type SchemaJsonLdProps = {
  /** Ein einzelnes Schema-Objekt oder eine Liste (z. B. Service + FAQPage). */
  schema: SchemaObject | SchemaObject[];
};

/**
 * Rendert strukturierte Daten als JSON-LD-Script-Tag.
 * Wird global (Organization, WebSite) und pro Seite
 * (ProfessionalService, Service, FAQPage, BreadcrumbList) eingesetzt.
 */
export default function SchemaJsonLd({ schema }: SchemaJsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          // JSON.stringify liefert valides JSON, "<" wird escaped, um
          // ein vorzeitiges Schließen des Script-Tags zu verhindern.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
