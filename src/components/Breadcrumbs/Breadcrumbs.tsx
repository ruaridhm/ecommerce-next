import Link from "next/link";

interface IBreadcrumb {
  title: string;
  url: string;
}

const Breadcrumbs = (breadcrumbs: IBreadcrumb[]) => {
  return (
    <ul className="py-2">
      {breadcrumbs.map(({ title, url }, index) => {
        return index < breadcrumbs.length ? (
          <li key={index}>
            <Link href={url} className="hover:">
              {title}
            </Link>
          </li>
        ) : (
          <li key={index}>{title}</li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
