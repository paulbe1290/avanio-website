import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Globale MDX-Komponenten für Ratgeber-Artikel: typografische Stile
 * im Avanio-Look. Artikel beginnen bei h2, die h1 setzt das Seiten-Template.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-12 text-2xl font-bold text-ink" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 font-display text-xl font-bold text-ink" {...props} />
    ),
    p: (props) => (
      <p className="mt-5 leading-relaxed text-smoke" {...props} />
    ),
    ul: (props) => (
      <ul
        className="mt-5 list-disc space-y-2 pl-6 leading-relaxed text-smoke marker:text-primary"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-5 list-decimal space-y-2 pl-6 leading-relaxed text-smoke marker:font-semibold marker:text-primary"
        {...props}
      />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-ink" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-5 rounded-r-xl border-l-4 border-primary bg-primary-soft/50 px-5 py-4 leading-relaxed text-ink"
        {...props}
      />
    ),
    hr: () => <hr className="my-10 border-line" />,
    a: ({ href = "", children, ...rest }) => (
      <Link
        href={href}
        className="font-semibold text-primary underline-offset-2 hover:text-primary-dark hover:underline"
        {...rest}
      >
        {children}
      </Link>
    ),
    ...components,
  };
}
