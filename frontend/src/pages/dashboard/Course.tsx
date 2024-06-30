import { useParams } from "react-router-dom";

export default function Course() {
  const {id} = useParams();

  return (
    <div>
      <h1>Course: {id}</h1>
    </div>
  );
}