// frontend/src/modules/PrayerWall/PrayerWall.tsx
import React, { useState } from 'react';

const PrayerWall = () => {
  const [requests, setRequests] = useState<string[]>([]);
  const [newRequest, setNewRequest] = useState("");

  const submit = () => {
    setRequests([...requests, newRequest]);
    setNewRequest("");
  };

  return (
    <section>
      <h2>Prayer Wall</h2>
      <input
        value={newRequest}
        onChange={e => setNewRequest(e.target.value)}
        placeholder="Type a prayer request..."
      />
      <button onClick={submit}>Submit</button>
      <ul>
        {requests.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </section>
  );
};

export default PrayerWall;
