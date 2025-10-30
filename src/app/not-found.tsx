import clsx from "clsx";

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        "min-h-80 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900",
        "mb-16 p-8 rounded-xl",
        "flex items-center justify-center",
        "text-center"
      )}
    >
      <div>
        <h1 className="text-7xl/tight mb-4 font-extrabold">404</h1>
        <p>
          erro 404 - A página que você está procurando não existe neste site.
        </p>
      </div>
    </div>
  );
}
