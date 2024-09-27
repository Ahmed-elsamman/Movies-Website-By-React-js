import useFetch from "../../hooks/useFetchHook/useFetch";
export default function TestHookComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <ul>
        {data.map((fact) => {
          return (
            <div key={fact.id} className="my-3 bg-slate-700 w-80">
              <h2> Todo :{fact.id}</h2>
              <h2> Tile :{fact.title}</h2>
            </div>
          );
        })}
      </ul>
    </>
  );
}
