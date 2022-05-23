import React from 'react'
import ReactDom from 'react-dom/client';

const Index = () => {
  return (
    <div>
      Hola en React
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<Index />);