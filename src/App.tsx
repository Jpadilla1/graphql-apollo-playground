import React from "react";
import { formatDistance } from 'date-fns'
import "./App.css";
import { useGetAllProfessorsQuery } from "./generated/graphql";

function App() {
  const { loading, error, data } = useGetAllProfessorsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section>
      <h3>Professors</h3>

      {data?.professors?.map((p) => (
        <div key={p?.id}>
          <p>ID: {p?.id}</p>
          <p>Name: {p?.name}</p>
          <p>College: {p?.college}</p>
          <p>Department: {p?.department}</p>
          <p>Gender: {p?.gender}</p>

          <h4>Comments</h4>
          {p?.comments?.map(c => (
            <div key={c?.id}>
              <p>{c?.message}</p>
              <p>{formatDistance(c?.date, new Date())} ago</p>
            </div>
          )) }
        </div>
      ))}
    </section>
  );
}

export default App;
