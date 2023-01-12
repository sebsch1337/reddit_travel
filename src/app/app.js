import React from 'react';
import { Posts } from '../features/posts/Posts';
import { Topics } from '../features/topics/Topics';

function App() {
  return (
    <div className="root">
      <header>
          <div className="select-topic">
            <p>Travel to...</p>
            <Topics />
          </div>
      </header>
      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;