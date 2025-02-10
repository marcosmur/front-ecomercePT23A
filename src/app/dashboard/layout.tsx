import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="p-6 border border-gray-300 rounded-lg max-w-4xl mx-auto">
            <nav className="flex flex-col gap-4">
                <Link href={"/dashboard"} className="p-3 border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... border-gray-200 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                    Dashboard
                </Link>
                <Link href={"/dashboard/orders"} className="p-3 border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... border-gray-200 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                    Orders
                </Link>
            </nav>
            {children}
        </section>
    );
}
