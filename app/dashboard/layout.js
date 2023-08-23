// Layouts can be nested and composed
export default function DashboardLayout({ children }) {
  return (
    <section>
      <h1>Admin Dashboard</h1>
      {children}
    </section>
  );
}
