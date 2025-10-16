import * as React from 'react';
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <div>
      <p>This is the about section of the website</p>
      <button className="bg-accent" onClick={() => navigate("/service")}>Go to service</button>
    </div>
  )
}
