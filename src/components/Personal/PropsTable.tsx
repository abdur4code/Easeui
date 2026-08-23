import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isDark
          ? "border-zinc-800 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] table-fixed border-collapse">
          <thead
            className={`sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-opacity-80 ${
              isDark
                ? "bg-zinc-900/85 text-zinc-400"
                : "bg-gray-50/90 text-gray-500"
            }`}
          >
            <tr className={isDark ? "border-b border-zinc-800" : "border-b border-gray-200"}>
              <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em] w-[18%]">
                Prop
              </th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em] w-[28%]">
                Type
              </th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em] w-[18%]">
                Default
              </th>
              <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em] w-[36%]">
                Description
              </th>
            </tr>
          </thead>

          <tbody className={isDark ? "divide-y divide-zinc-800" : "divide-y divide-gray-200"}>
            {data.length > 0 ? (
              data.map((row, i) => (
                <tr
                  key={`${row.prop}-${i}`}
                  className={`align-top transition-colors ${
                    isDark ? "hover:bg-zinc-900/40" : "hover:bg-gray-50/70"
                  }`}
                >
                  {/* Prop */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex max-w-full items-center rounded-md border px-2.5 py-1 text-xs font-medium font-mono truncate ${
                        isDark
                          ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                          : "border-indigo-200 bg-indigo-50 text-indigo-700"
                      }`}
                      title={row.prop}
                    >
                      {row.prop}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-5 py-4">
                    <code
                      className={`block w-full whitespace-pre-wrap break-words rounded-lg border px-2.5 py-2 text-xs leading-5 font-mono ${
                        isDark
                          ? "border-zinc-700 bg-zinc-900 text-zinc-200"
                          : "border-gray-200 bg-gray-50 text-gray-700"
                      }`}
                    >
                      {row.type || "—"}
                    </code>
                  </td>

                  {/* Default */}
                  <td className="px-5 py-4">
                    <code
                      className={`inline-block max-w-full whitespace-pre-wrap break-all rounded-md border px-2.5 py-1.5 text-xs leading-5 font-mono ${
                        isDark
                          ? "border-zinc-700 bg-zinc-900 text-zinc-300"
                          : "border-gray-200 bg-gray-50 text-gray-600"
                      }`}
                      title={row.default}
                    >
                      {row.default || "—"}
                    </code>
                  </td>

                  {/* Description */}
                  <td
                    className={`px-5 py-4 text-sm leading-6 break-words ${
                      isDark ? "text-zinc-300" : "text-gray-700"
                    }`}
                  >
                    {row.description || "—"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className={`px-5 py-10 text-center text-sm ${
                    isDark ? "text-zinc-500" : "text-gray-500"
                  }`}
                >
                  No props to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PropsTable;